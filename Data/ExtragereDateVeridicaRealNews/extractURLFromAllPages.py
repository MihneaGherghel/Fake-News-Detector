from extractURLFromPage import *

# functie ce concateneaza trei array-uri


def combine_arrays(arrays):
    combined_array = []

    for array in arrays:
        combined_array.extend(array)

    return combined_array


# functia extrage toate url-urile necesare pentru un anumit domeniu
def extractUrlFromAllPages(url, nr_pages):

    # array in care se vor retine url-urile din care se doreste extragerea informatiei
    all_url = []

    # obtinerea url-urilor din pagina principal
    for link in extractURL(url):
        all_url.append(link)
    number_of_pages = nr_pages

    # parcurgerea tuturor paginilor si extragerea url-urilor aferente
    for i in range(2, number_of_pages+1, 1):
        new_url = url+"?page="+str(i)
        for link in extractURL(new_url):
            all_url.append(link)
    return all_url

# functia extrage toate url-urile paginilor de pe care se doreste extragerea informatiei


def extractUrlFromAllTypesNews():
    url1 = "https://www.veridica.ro/en/editorials"
    nr_page1 = 10
    urls1 = extractUrlFromAllPages(url1, nr_page1)
    url2 = "https://www.veridica.ro/en/analyses"
    nr_page2 = 6
    urls2 = extractUrlFromAllPages(url2, nr_page2)
    url3 = "https://www.veridica.ro/en/acf"
    nr_page3 = 3
    urls3 = extractUrlFromAllPages(url3, nr_page3)
    return combine_arrays([urls1, urls2, urls3])
