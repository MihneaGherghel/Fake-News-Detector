import pandas as pd
from countryPattern import countryPattern
from subjectPattern import subjectPattern


def createSubjectType():
    subject = {
        "war": [], "social": [], "culture": [], "tragedy": [], "politics": [],
        "sport": [], "nature": [], "financial/business": [], "entertainment": []
    }
    return subject


def createSplitDataType():
    countries = {
        "USA": createSubjectType(), "America": createSubjectType(),
        "Europe": createSubjectType(), "Middle-East": createSubjectType(),
        "Asia": createSubjectType(), "China": createSubjectType(),
        "Russia": createSubjectType(), "Ukraine": createSubjectType(),
        "Australia": createSubjectType(), "Africa": createSubjectType()
    }
    return countries


def numberOfWords(element, pPattern):
    pattern = {}
    for key, value in pPattern.items():
        for word in value:
            if isinstance(element, str) == True:
                value = pattern.get(key, 0)+element.count(word)
                pattern[key] = value
    return pattern


def maximValue(dictionar, default):
    maxim = 0
    result = default
    for key, value in dictionar.items():
        if value > maxim:
            maxim = value
            result = key
    return result


def splitDataBySubjectRegion(data, indexes):
    result = createSplitDataType()
    for index, element in enumerate(data):
        countries = numberOfWords(element, countryPattern)
        country = maximValue(countries, "USA")
        subjects = numberOfWords(element, subjectPattern)
        subject = maximValue(subjects, "politics")
        result[country][subject].append(indexes[index])
    return result


def splitDataByContent():
    file_path = "C:\\Users\\40741\\Documents\\LucrareLicenta\\Data\\ExcelData\\kaggleFakeNewsFinal.xlsx"
    data = pd.read_excel(file_path)
    false_data = data[data["Label"] == 1]
    true_data = data[data["Label"] == 0]
    false_text_data = false_data['Text'].values
    false_index_data = false_data['Index'].values
    true_text_data = true_data['Text'].values
    true_index_data = true_data['Index'].values
    information_fake_news = splitDataBySubjectRegion(
        false_text_data, false_index_data)
    information_real_news = splitDataBySubjectRegion(
        true_text_data, true_index_data)
    return information_fake_news, information_real_news


splitDataByContent()
