from bs4 import BeautifulSoup
from fastapi import FastAPI
from pydantic import BaseModel
from modelRandomForest import modelRandomForest
import requests
from GPTZero.infer import detectAIText

app = FastAPI()


class TextandTitle(BaseModel):
    title: str
    text: str


class URL(BaseModel):
    url: str


@app.post("/fakeNewsUsingTitleAndText")
def fakeNewsDetector(data: TextandTitle):
    title, text = data.title, data.text
    aiGeneratedText = detectAIText(text)
    prediction = modelRandomForest(title + " " + text)
    prediction_rounded = round(prediction, 4)*100
    return {"prediction_rounded": prediction_rounded, "title": title, "text": text, "generatedByAI": aiGeneratedText[1]}


def extractData(url: str):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html5lib')
    title = soup.title.text.strip()
    paragraphs = soup.find_all('p')
    text_content = "\n".join([paragraph.text.strip()
                              for paragraph in paragraphs])
    return title, text_content


@app.post("/fakeNewsUsingURL")
def fakeNewsDetectorURL(data: URL):
    title, text = extractData(data.url)
    prediction = modelRandomForest(title + " " + text)
    aiGeneratedText = detectAIText(text)
    prediction_rounded = round(prediction, 4)*100
    return {"prediction_rounded": prediction_rounded, "title": title, "text": text, "generatedByAI": aiGeneratedText[1]}


if __name__ == "__main__":
    app.run(debug=True, port=8000)
