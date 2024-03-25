from flask import Flask, request, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup
import re
import requests
from modelTransformer import modelData

app = Flask(__name__)
CORS(app)


@app.route('/fakeNewsUsingTitleAndText', methods=['POST'])
def fakeNewsDetector():
    data = request.json
    title = data['title']
    text = data['text']
    prediction = modelData(title + " " + text)
    prediction_rounded = round(prediction, 3)*100
    return jsonify(prediction_rounded), 200


def extractData(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html5lib')
    title = soup.title.text.strip()
    paragraphs = soup.find_all('p')
    text_content = "\n".join([paragraph.text.strip()
                              for paragraph in paragraphs])
    return title, text_content


@app.route('/fakeNewsUsingURL', methods=['POST'])
def fakeNewsDetectorURL():
    data = request.json
    url = data['url']
    title, text = extractData(url)
    prediction = modelData(title + " " + text)
    prediction_rounded = round(prediction, 3)*100
    return jsonify(prediction_rounded), 200


if __name__ == "__main__":
    app.run(debug=True, port=8000)
