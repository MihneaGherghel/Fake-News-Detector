import pandas as pd


def kaggleFakeNews():
    file_path = 'C:\\Users\\40741\\Documents\\LucrareLicenta\\Data\\ExcelData\\kaggleFakeNewsInitial.csv'
    excel_kaggle = pd.read_csv(file_path)
    columnDelete = ["id", "author"]
    excel_kaggle = excel_kaggle.drop(columns=columnDelete)
    change_name = {'title': 'Title', 'text': 'Text', 'label': 'Label'}
    excel_kaggle = excel_kaggle.rename(columns=change_name)
    excel_kaggle = excel_kaggle.loc[(excel_kaggle['Title'].apply(type) == str) &
                                    (excel_kaggle['Text'].apply(type) == str)]
    excel_kaggle.insert(0, 'Index', excel_kaggle.reset_index().index)
    excel_kaggle.to_excel('kaggleFakeNewsFinal.xlsx', index=False)


kaggleFakeNews()
