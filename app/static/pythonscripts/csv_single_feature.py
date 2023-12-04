import os
import pandas as pd
from config import Configurations
from app.static.pythonscripts.csv import Csv

config = Configurations().get_config()
config2 = Configurations().get_config2()
directory_path = config2['directory_path']


class CsvFeature:


    def go_get_1_feature(self, feature):
        df_details = Csv().go_get_details()

        df_reviews = Csv().go_get_reviews()

        df_rev_no_dupes = df_reviews.drop_duplicates(subset='pub_identity', keep="last")
        df_feature = df_rev_no_dupes.loc[df_rev_no_dupes[feature] == "true"]

        df_feat_pub = pd.merge(df_feature, df_details, on='pub_identity', how='inner')

        df_stations = Csv().go_get_stations()
        df_pb_rev_st = pd.merge(df_feat_pub, df_stations, on='station_identity', how='left')

        df_directions = Csv().go_get_directions()
        df_pb_rev_st_dir = pd.merge(df_pb_rev_st, df_directions, on='direction_identity', how='left')

        df_diarys = Csv().go_get_diarys()
        df_pb_rev_st_dir_dry = pd.merge(df_pb_rev_st_dir, df_diarys, on='pub_identity', how='left')

        df_photos = Csv().go_get_photos()
        df_with_photo = pd.merge(df_pb_rev_st_dir_dry, df_photos, on='pub_identity', how='left')
        df_pb_rev_st_dir_dry = df_with_photo.fillna('')

        return df_pb_rev_st_dir_dry
