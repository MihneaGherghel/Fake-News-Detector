import requests
from bs4 import BeautifulSoup

# obtinerea url-urilor necesare dintr-o pagina


def extractURL(url):

    # array in care se vor afla url-urile necesare
    hrefs = []

    # variabila necesara pentru filtrarea linkurilor
    target_class = "stretched-link"

    # request catre url paginii de pe care se doreste extragerea informatiei
    response = requests.get(url)

    if response.status_code == 200:

        # parsarea folosind un parser html
        soup = BeautifulSoup(response.text, 'html.parser')

        # obtinere linkuri cu o anumita clasa
        anchor_elements_with_class = soup.find_all('a', class_=target_class)

        # extragerea linkului
        for anchor_element in anchor_elements_with_class:
            href_attribute = anchor_element.get('href', '')
            hrefs.append(href_attribute)

    return hrefs
