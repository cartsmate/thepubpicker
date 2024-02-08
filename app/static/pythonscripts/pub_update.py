import pandas as pd
from flask import request
from config import Configurations
from app.models.detail.detail import Detail
from app.static.pythonscripts.s3 import S3

# config2 = Configurations().get_config2()
directory_path = Configurations().get_config2()['directory_path']
env_vars = Configurations().get_config2()


class UpdatePub:

    def update_pub(self, model, df_all, df_update):
        pub_id = df_update.iloc[0]['pub_identity']
        for mod in model.__dict__.keys():
            print('mod: ' + str(mod))
            print(df_update.iloc[0][mod])
            df_all.loc[df_all['pub_identity'] == pub_id, mod] = df_update.iloc[0][mod]
        return df_all
