
import pandas as pd
from config import Configurations

config = Configurations().get_config()
config2 = Configurations().get_config2()


class S3:

    def go_get_counter(self):
        directory_path = config2['directory_path']
        if config2['env'] == 'prod':
            obj_df = pd.read_csv(directory_path + '/files/counter_prod.csv')
        else:
            obj_df = pd.read_csv(directory_path + '/files/counter_qual.csv')
        obj_df["pub_counter"] = obj_df["pub_counter"] + 1

        if config2['env'] == 'prod':
            obj_df.to_csv(directory_path + '/files/counter_prod.csv', sep=',', encoding='utf-8', index=False)
        else:
            obj_df.to_csv(directory_path + '/files/counter_qual.csv', sep=',', encoding='utf-8', index=False)
        counter = str(obj_df["pub_counter"].values[0]).zfill(6)
        return counter
