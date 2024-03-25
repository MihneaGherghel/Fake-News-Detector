from nltk.stem.porter import PorterStemmer
from nltk.corpus import stopwords
import re
import nltk
nltk.download('stopwords')
nltk.download('wordnet')


def lower_characters_and_delete_punctutation(sentence):
    words = sentence.split()
    new_words = []
    for word in words:
        new_word = re.sub(r'[^\w\s$]', '', word).lower()
        new_words.append(new_word)
    return " ".join(new_words)


def stopWordsStemmer(data, porter_stemmer):
    words = []
    for x in data.split():
        if (x not in stopwords.words("english")):
            words.append(porter_stemmer.stem(x))
    return " ".join(words)


def preprocessing(data):
    porter_stemmer = PorterStemmer()
    data = lower_characters_and_delete_punctutation(data)
    data = stopWordsStemmer(data, porter_stemmer)
    return data
