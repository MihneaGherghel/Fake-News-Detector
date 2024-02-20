import requests
from bs4 import BeautifulSoup
import re


def extractDataVeridica(url):

    # se trimite un request catre url
    response = requests.get(url)

    # se verifica daca requestul a fost acceptat
    if response.status_code == 200:

        # se parseaza continutul paginii de tip html
        soup = BeautifulSoup(response.text, 'html5lib')
        # se extrage titlul articolului
        title = soup.title.text.strip()

        # se extrage continutul articolului
        text_content_div = soup.find('div', class_='article-content')
        if text_content_div == None:
            return

        # se extrage textul articolului
        paragraphs = text_content_div.find_all('p')
        text_content = "\n".join([paragraph.text.strip()
                                  for paragraph in paragraphs])

        # obtinere nume fisier
        match = re.search(r"/([^/]+)$", url)

        if match:
            extracted_url = match.group(1)

            # dimensiunea fisierului e redusa la maxim 45 de caractere
            if len(extracted_url) > 45:
                extracted_url = extracted_url[:45]

            # se adauga in fisierul cu nume corespunzator titlul si continutul stirii false
            with open(f"data\\{extracted_url}.txt", 'w', encoding='utf-8') as file:
                file.write(
                    f"Title: {title}\n\nText Content:\n{text_content}")
    else:
        print(
            f"Failed to retrieve the webpage. Status Code: {response.status_code}")
