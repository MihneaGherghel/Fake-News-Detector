import pickle
from tensorflow.keras.preprocessing.sequence import pad_sequences
import torch
from preprocessingData import preprocessing
import sklearn
import gensim
import numpy as np


def tokenize_news(data):
    data = preprocessing(data)
    with open('./trainData/tokenizer.pkl', 'rb') as f:
        tokenizer = pickle.load(f)
    data = [data]
    tokenizer_data = tokenizer.texts_to_sequences(data)
    pad_tokenize_data = pad_sequences(
        tokenizer_data, padding="pre", truncating="pre", maxlen=500)
    return pad_tokenize_data


def tfidf_news(data):
    data = preprocessing(data)
    with open("./trainData/tfidf.pkl", "rb") as f:
        tfidf = pickle.load(f)
    data = [data]
    tfidf_data = tfidf.transform(data)
    return tfidf_data


def word2vec_news(data):
    data = preprocessing(data)
    with open("./trainData/word2vec.pkl", "rb") as f:
        model = pickle.load(f)
    max_length = 1000
    embedded_sentence = []
    words = data.split()
    for word in words:
        if len(embedded_sentence) < max_length:
            if word in model.wv:
                embedded_sentence.append(model.wv[word])
    while len(embedded_sentence) < max_length:
        embedded_sentence.append(np.zeros(1))
    return embedded_sentence
