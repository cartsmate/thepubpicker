import pandas as pd
from config import Configurations

config2 = Configurations().get_config2()


class FilesCounter:
    def go_get_counter(self):
        directory_path = config2['directory_path']
        obj_df = pd.read_csv(directory_path + '/files/counter_qual.csv')
        obj_df["pub_counter"] = obj_df["pub_counter"] + 1
        counter = obj_df["pub_counter"].values[0]
        return counter


    def go_write_counter(self, new_counter):
        directory_path = config2['directory_path']
        data = {'pub_counter': [new_counter]}
        df_updated_counter = pd.DataFrame(data)
        df_updated_counter.to_csv(directory_path + '/files/counter_qual.csv', sep=',', encoding='utf-8', index=False)
        counter = df_updated_counter["pub_counter"].values[0]

        return counter
