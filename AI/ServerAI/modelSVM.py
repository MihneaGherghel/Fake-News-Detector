import pickle
from tokenizeNews import tfidf_news, word2vec_news
import numpy as np
from preprocessingData import preprocessing
import gensim
import sklearn


def modelSVM(data):
    data = word2vec_news(data)
    data = np.array(data).squeeze().tolist()
    with open('./trainData/svm_linear_classifier.pkl', 'rb') as f:
        modelSVM = pickle.load(f)
    prediction = modelSVM.predict_proba([data])
    return prediction


print(modelSVM("maia sandu tri usurp power republ moldovatoday rule april 15 en constitut court compar rule 2019 vlad plahotniuc use court dissolv parliament psrm leader igor dodon comment recent rule constitut court time dodon rule possibl parliament might recogn rule call vote noconfid three judg argu favor dissolv parliament mean today rule major constitut court 3 5 judg usurp suprem court moldova interest presid republ repres seriou breach constitut regul court rule year recommend council europ venic commiss dodon said time socialist leader said maia sandu tri usurp state power mean three magistr much like fugit oligarch answer attempt might similar happen 2019 refus take note court rule vote noconfid three court judg request step call intern partner interven thu put end attempt coup order restor rule law republ moldova dodon conclud quot offici websit psrm media outlet republ moldova"))
