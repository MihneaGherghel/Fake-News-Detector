from pattern import splitDataByContent


def plotStatistic(data):
    dictCountries = {}
    dictSubject = {}
    maxim = 0
    for keyCountries, value in data.items():
        for keySubject, valueSubject in value.items():
            nrCountries = dictCountries.get(keyCountries, 0)
            nrSubject = dictSubject.get(keySubject, 0)
            dictCountries[keyCountries] = nrCountries+len(valueSubject)
            dictSubject[keySubject] = nrSubject+len(valueSubject)
            print(
                f"Country: {keyCountries}, Subject: {keySubject} -> {str(len(valueSubject))}")
    print("----------------- -----------------")
    for key, value in dictCountries.items():
        print(f"Country: {key} -> {str(value)}")
    print()
    print()
    nr = 0
    for key, value in dictSubject.items():
        print(f"Subject: {key} -> {str(value)}")
        nr = nr+value
    print("---------------- -------------------")
    print(f"Numer of data {str(nr)}")
    print("---------------- -------------------")
    print("---------------- -------------------")
    print("---------------- -------------------")
    print("---------------- -------------------")


def statistic():
    realData, fakeData = splitDataByContent()
    plotStatistic(realData)
    plotStatistic(fakeData)


statistic()
