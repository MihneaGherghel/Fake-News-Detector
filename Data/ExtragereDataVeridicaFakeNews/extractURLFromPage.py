import re
import requests

# obtinerea url-urilor necesare dintr-o pagina


def returnURLToPages(url):

    # request catre url paginii de pe care se doreste extragerea informatiei
    response = requests.get(url)

    # extragerea url-urilor din pagina
    article_links = re.findall(
        r"<a href=\"(.*?)\">(.*?)</a>", response.content.decode('utf-8')
    )

    # filtrarea url-urilor
    target_formats = ['https://www.veridica.ro/en/fake-news/',
                      'https://www.veridica.ro/en/disinformation/',
                      'https://www.veridica.ro/en/propaganda/']
    filtered_urls = []
    for article_link in article_links:
        for target_format in target_formats:
            if article_link[0].startswith(target_format):
                filtered_urls.append(article_link[0])
    return filtered_urls
