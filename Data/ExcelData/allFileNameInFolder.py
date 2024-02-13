import os


def allFileNameInFolder(folder_path=""):

    # obtine toate caile catre fisiere din folder
    file_paths = [os.path.join(folder_path, f) for f in os.listdir(
        folder_path) if os.path.isfile(os.path.join(folder_path, f))]
    return file_paths
