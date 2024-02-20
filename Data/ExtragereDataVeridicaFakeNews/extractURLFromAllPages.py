from extractURLFromPage import *

# functia extrage toate url-urile paginilor de pe care se doreste extragerea informatiei


def extractUrlFromAllPages():

    # array in care se vor retine url-urile din care se doreste extragerea informatiei
    all_url = []

    # url de baza
    url = "https://www.veridica.ro/en/database"

    # obtinerea url-urilor din pagina principal
    for link in returnURLToPages(url):
        all_url.append(link)

    number_of_pages = 136

    # parcurgerea tuturor paginilor si extragerea url-urilor aferente
    for i in range(2, number_of_pages+1, 1):
        new_url = url+"?page="+str(i)
        for link in returnURLToPages(new_url):
            all_url.append(link)
    return all_url
