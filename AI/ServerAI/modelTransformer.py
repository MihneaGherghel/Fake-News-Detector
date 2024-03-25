from preprocessingData import preprocessing
from tokenizeNews import tokenize_news
import torch
import torch.nn as nn
import torch.nn.functional as F


class TransformerModel(nn.Module):
    def __init__(self, vocabulary_size, embedding_dim, input_size, num_layers=3, num_heads=4, ff_hidden_size=50, dropout=0.5):
        super(TransformerModel, self).__init__()
        self.embedding = nn.Embedding(vocabulary_size, embedding_dim)
        self.positional_encoding = PositionalEncoding(embedding_dim)

        encoder_layer = nn.TransformerEncoderLayer(
            d_model=embedding_dim,
            nhead=num_heads,
            dim_feedforward=ff_hidden_size,
            dropout=dropout
        )
        self.transformer_encoder = nn.TransformerEncoder(
            encoder_layer, num_layers=num_layers)

        self.fc = nn.Linear(embedding_dim, 1)
        self.sigmoid = nn.Sigmoid()

    def forward(self, x):
        embedded = self.embedding(x)
        embedded = self.positional_encoding(embedded)
        encoded = self.transformer_encoder(embedded)
        pooled = torch.mean(encoded, dim=1)
        output = self.sigmoid(self.fc(pooled))
        return output.squeeze()


class PositionalEncoding(nn.Module):
    def __init__(self, embedding_dim, max_len=5000):
        super(PositionalEncoding, self).__init__()
        self.dropout = nn.Dropout(p=0.3)
        pe = torch.zeros(max_len, embedding_dim)
        position = torch.arange(0, max_len, dtype=torch.float).unsqueeze(1)
        div_term = torch.exp(torch.arange(0, embedding_dim, 2).float(
        ) * (-torch.log(torch.tensor(10000.0)) / embedding_dim))
        pe[:, 0::2] = torch.sin(position * div_term)
        pe[:, 1::2] = torch.cos(position * div_term)
        pe = pe.unsqueeze(0).transpose(0, 1)
        self.register_buffer('pe', pe)

    def forward(self, x):
        x = x + self.pe[:x.size(0), :]
        return self.dropout(x)


def modelData(data):
    vocabulary_size = 150000
    input_size = 500
    embedding_dim = 40
    model = TransformerModel(vocabulary_size, embedding_dim, input_size)
    model.load_state_dict(torch.load('./trainData/modelTransformer.h5'))
    model.eval()
    data = preprocessing(data)
    data = tokenize_news(data)
    data = torch.tensor(data)
    with torch.no_grad():
        prediction = model(data)
    return prediction.item()
