from pattern import splitDataByContent
import random


def splitVector(data):
    train = []
    validation = []
    test = []
    for i in range(0, len(data), 1):
        if (i % 10 == 0 or i % 10 == 9):
            validation.append(data[i])
        elif (i % 10 == 1):
            test.append(data[i])
        else:
            train.append(data[i])
    return train, validation, test


def splitData(data):
    train_data = []
    validation_data = []
    test_data = []
    diffrent = []
    for keyCountry, valueCountry in data.items():
        for keySubject, valueSubject in valueCountry.items():
            if keySubject in ['tragedy', 'sport', 'nature', 'entertainment', 'social']:
                diffrent += valueSubject
            else:
                train, validation, test = splitVector(valueSubject)
                train_data += train
                validation_data += validation
                test_data += test
    train, validation, test = splitVector(diffrent)
    train_data += train
    validation_data += validation
    test_data += test
    return train_data, validation_data, test_data


def trainTestValidation():
    realData, fakeData = splitDataByContent()
    train_real, validation_real, test_real = splitData(realData)
    train_fake, validation_fake, test_fake = splitData(fakeData)
    train_data = train_real+train_fake
    validation_data = validation_real+validation_fake
    test_data = test_real+test_fake
    print(train_data)


trainTestValidation()
