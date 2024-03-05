import random
import pandas as pd
from config import *
from app.models.detail.detail import Detail
from app.static.pythonscripts.s3 import S3
from datetime import datetime, timedelta, date
from app.static.pythonscripts.pub_get import GetPub
from app.static.pythonscripts.files_pub import FilesPub

# env_vars = Configurations().get_config2()
# config2 = Configurations().get_config2()
# directory_path = config2['directory_path']
env_vars = Configurations.get_config()


class FilesDaily:

    # def get_timeout(self, df_pubs):
    #     df_timeout = df_pubs.loc[df_pubs['timeout'] == '1']
    #     return df_timeout


    # directory_path = Configurations.get_config()['directory_path']

    def go_get_details_daily(self, df_detail_all):
        print('go_get_details_daily')
        if env_vars['env'] == 'qual':
            print('csv')
            df_details_day = pd.read_csv(f"{env_vars['directory_path']}/files/featured.csv",
                                         dtype={'pub_identity': str, 'timestamp': str})
        else:
            print('s3')
            attribute_list = ['pub_identity', 'timestamp']
            df_details_day = S3().s3_read('featured', attribute_list)

        df_lastline = df_details_day.tail(1)
        previous_timestamp_str = df_lastline.iloc[0]['timestamp']

        new_timestamp_str = datetime.today().strftime('%Y-%m-%d')

        if new_timestamp_str == previous_timestamp_str:
            daily_id = df_lastline.iloc[0]['pub_identity']
        else:
            # # # GET RANDOM PUB
            # df_detail_all = GetPub().get_all(Detail())
            df_best = df_detail_all.loc[(df_detail_all['ranking'] > 4) & (df_detail_all['ranking'] < 5) & (df_detail_all['extra'] != '')]

            no_of_details = df_best.shape[0]
            random_index = random.randrange(0, no_of_details)
            df_random_pub = df_best.iloc[random_index]
            random_pub_id = df_random_pub['pub_identity']
            data = {'pub_identity': [random_pub_id], 'timestamp': [new_timestamp_str]}

            df_new = pd.DataFrame(data)

            df_appended = pd.concat([df_details_day, df_new], ignore_index=True)

            if env_vars['env'] == 'qual':
                df_appended.to_csv(f"{env_vars['directory_path']}/files/featured.csv",
                                   index=False, sep=',', encoding='utf-8')
            else:
                s3_resp = S3().s3_write(df_appended, 'featured.csv')
                print(s3_resp)

            daily_id = df_new.iloc[0]['pub_identity']
        return daily_id
