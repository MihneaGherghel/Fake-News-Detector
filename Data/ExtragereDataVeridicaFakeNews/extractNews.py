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
        paragraphs = soup.find_all('p')
        text_content = "\n".join([paragraph.text.strip()
                                  for paragraph in paragraphs])

        # obtinere nume fisier
        match = re.search(r'/fake-news/([^/]+)', url)
        if match:
            extracted_url = match.group(1)

            with open(f"data\\{extracted_url}.txt", 'w', encoding='utf-8') as file:
                file.write(text_content)
            with open(f"data\\{extracted_url}.txt", 'r', encoding='utf-8') as file:
                file_content = file.read()

            # se extrage stirea falsa
            match = re.search(r'NEWS:(.*?)(?:\n|\r\n)NARRATIVE',
                              file_content, re.DOTALL | re.IGNORECASE)

            if match:
                extracted_text = match.group(1).strip()

                # se adauga in fisierul cu nume corespunzator titlul si continutul stirii false
                with open(f"data\\{extracted_url}.txt", 'w', encoding='utf-8') as file:
                    file.write(
                        f"Title: {title}\n\nText Content:\n{extracted_text}")
    else:
        print(
            f"Failed to retrieve the webpage. Status Code: {response.status_code}")
