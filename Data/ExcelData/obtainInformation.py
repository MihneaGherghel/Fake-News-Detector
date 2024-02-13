import re


def obtainInforamtion(file_path="", type="real"):
    with open(file_path, 'r', encoding='utf-8') as file:
        text_content = file.read()

    # expresie regulata pentru extragerea titlului
    title_pattern = re.compile(r'Title: (.+?) \|')
    if (type == "fake"):
        title_pattern = re.compile(r'Title: .*?: (.+?) \|')

    # expresie regulata pentru identificarea continutului articolului
    text_pattern = re.compile(r'Text Content:(.+)', re.DOTALL)

    # obtinere titlu
    title_match = title_pattern.search(text_content)
    title = title_match.group(1).strip() if title_match else None

    # obtinere text
    text_match = text_pattern.search(text_content)
    text = text_match.group(1).strip() if text_match else None

    return title, text
