from allFileNameInFolder import *
from obtainInformation import *
from unidecode import unidecode
import pandas as pd


def constructInformation(files_name, type, counter):
    information = []
    value = 0
    if (type == "fake"):
        value = 1
    for file in files_name:
        inf = obtainInforamtion(file, type)
        if (inf[0] != None and inf[1] != None):
            inf = [counter, unidecode(inf[0]), unidecode(inf[1]), value]
            information.append(inf)
            counter += 1
    return information


def createInformation():
    folder_path_fake = '..\\ExtragereDataVeridicaFakeNews\\data'
    folder_path_real = '..\\ExtragereDateVeridicaRealNews\\data'
    files_name_fake = allFileNameInFolder(folder_path_fake)
    files_name_real = allFileNameInFolder(folder_path_real)
    informationFake = constructInformation(files_name_fake, "fake", 0)
    counter = len(informationFake)
    informationReal = constructInformation(files_name_real, "real", counter)
    news = []
    for info in informationFake:
        news.append(info)
        counter += 1
    for info in informationReal:
        news.append(info)
        counter += 1
    return news


def veridicaExcel():
    news = createInformation()
    df = pd.DataFrame(news, columns=["Index", "Title", "Text", "Label"])
    df.to_excel("veridicaData.xlsx", index=False)


veridicaExcel()
