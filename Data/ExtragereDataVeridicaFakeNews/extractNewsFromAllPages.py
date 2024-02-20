from extractURLFromAllPages import *
from extractNews import *


def extractNewFromAllPages():

    # obtinerea url-urilor paginilor din care se doreste extragerea informatiei
    articlesURL = extractUrlFromAllPages()

    # pentru fiecare url se extrage informatia
    for articleURL in articlesURL:
        extractDataVeridica(articleURL)


extractNewFromAllPages()
