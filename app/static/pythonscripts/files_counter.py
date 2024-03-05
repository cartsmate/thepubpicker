import datetime
import pandas as pd
from config import *
from logger.logger import *

counter_path = f"{Configurations.get_config()['directory_path']}/files/counter_qual.csv"


class FilesCounter:

    @staticmethod
    def go_get_counter():
        logger = Logger().create_logger()
        try:
            obj_df = pd.read_csv(f"{counter_path}")
            obj_df["pub_counter"] = obj_df["pub_counter"] + 1
            counter = obj_df["pub_counter"].values[0]
            return counter
        except FileNotFoundError as e:
            print('file not found', e)
            logger.error(f'{datetime.datetime.now()} : file not found: {e}, exc_info=True')

    @staticmethod
    def go_write_counter(new_counter):
        data = {'pub_counter': [new_counter]}
        df_updated_counter = pd.DataFrame(data)
        df_updated_counter.to_csv(f"{counter_path}",
                                  sep=',', encoding='utf-8', index=False)
        counter = df_updated_counter["pub_counter"].values[0]

        return counter
