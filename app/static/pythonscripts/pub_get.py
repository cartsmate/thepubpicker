import pandas as pd
from config import Configurations
from app.models.detail.detail import Detail
from app.static.pythonscripts.s3 import S3
from app.static.pythonscripts.postgres import PostgresConnection

# config2 = Configurations().get_config2()
directory_path = Configurations().get_config2()['directory_path']
env_vars = Configurations().get_config2()


class GetPub:

    def get_all(self, model):
        dtype_obj = {}
        for key, value in model.__dict__.items():
            dtype_obj[value.name] = value.datatype
        df = pd.read_csv(directory_path + '/files/' + model.filename + '.csv', dtype=dtype_obj)

        df = df.fillna('')
        print(f'{model.__class__.__name__} | {df.shape[0]}')
        return df

    def get_1(self, df, pub_id):
        # df = self.get_all(model)
        df_1 = df.loc[df['pub_identity'] == pub_id]
        return df_1

    def get_all_s3(self, model):
        attribute_list = []
        for key, value in model.__dict__.items():
            attribute_list.append(value.name)
        df = S3().s3_read(model.filename, attribute_list)
        return df
