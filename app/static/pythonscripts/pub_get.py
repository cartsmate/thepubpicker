import pandas as pd
from config import *
from app.models.detail.detail import Detail
from app.static.pythonscripts.s3 import S3
from app.static.pythonscripts.postgres import PostgresConnection

# config2 = Configurations().get_config2()

# env_vars = Configurations().get_config2()
directory_path = Configurations.get_config()['directory_path']


class GetPub:

    @staticmethod
    def get_all(model):
        df = pd.read_csv(f"{directory_path}/files/{model.filename}.csv")
        df = df.fillna('')
        print(f'{model.__class__.__name__} | {df.shape[0]}')
        return df

    @staticmethod
    def get_1(df, pub_id):
        df_1 = df.loc[df['pub_identity'] == pub_id]
        return df_1

    @staticmethod
    def get_all_s3(model):
        attribute_list = []
        for key, value in model.__dict__.items():
            attribute_list.append(value.name)
        df = S3().s3_read(model.filename, attribute_list)
        return df
