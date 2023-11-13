import os
import json
from dotenv import load_dotenv
from pathlib import Path
from configparser import ConfigParser


class Configurations:
    def get_config(self):
        directory_path = os.getcwd()
        with open(directory_path + '/config_s.json') as file:  # Opening JSON file
            config = json.load(file)  # returns JSON object as a dictionary
        return config

    def get_config2(self):
        # try:
        #     directory_path = os.getcwd()
        #     constants = ConfigParser()
        #     filepath = directory_path + "/constants_s.ini"
        #     constants.read(filepath)
        #     config2 = {
        #         "directory_path": directory_path,
        #         "google_key": constants.get('local', 'MAP'),
        #         "access_id": constants.get('local', 'ID'),
        #         "access_key": constants.get('local', 'KEY'),
        #         "bucket_name": constants.get('local', 'BUCKET'),
        #         "env": "qual"
        #     }
        # except:
        path = os.getcwd()
        # print('path')
        # print(path)
        total_path = path + '/.env'
        dotenv_path = Path(total_path)
        load_dotenv(dotenv_path=dotenv_path)
        # load_dotenv()
        # GOOGLE_KEY = os.getenv("HEROKU_GOOGLE_API")
        # print('GOOGLE_KEY')
        # print(GOOGLE_KEY)
        # MY_ENV_VAR = os.getenv('MY_ENV_VAR')
        config2 = {
            "directory_path": os.getcwd(),
            "google_key": os.environ.get("HEROKU_GOOGLE_API"),
            "access_id": os.environ.get("ACCESS_ID"),
            "access_key": os.environ.get("ACCESS_KEY"),
            "bucket_name": os.environ.get("BUCKET_NAME"),
            "env": os.environ.get("ENV")
        }
        # print('config2: ' + str(config2))
        return config2
