import pandas as pd
from config import Configurations

config = Configurations().get_config()
config2 = Configurations().get_config2()


class Dataframes:

    def df_to_dict(self, df):
        df_dict = df.to_dict(orient='records')
        return df_dict

    def merge_dfs(self, df_1, df_2):
        print('Dataframe.merge_dfs')
        df_merged = pd.merge(df_1, df_2, how='left', on='pub_identity')
        return df_merged

    def append_df(self, _get, new_df):
        print('Dataframe: append_df')
        df_appended = pd.concat([_get, new_df], ignore_index=True)
        return df_appended

    def to_csv(self, df_appended, key):
        print('Dataframes: to_csv')
        # directory_path = os.getcwd()
        # directory_path = '/Users/andycarter/Documents/develop/thepubcrawls/'
        directory_path = config2['directory_path']
        # print(directory_path)
        df_appended.to_csv(directory_path + '/files/' + config[key]['aws_key'], sep=',', encoding='utf-8', index=False)
