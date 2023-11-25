import os
import pandas as pd
from config import Configurations
from app.static.pythonscripts.csv import Csv

config = Configurations().get_config()
config2 = Configurations().get_config2()
directory_path = config2['directory_path']


class CsvSingle:


    def go_get_1_pub(self, pub_id):
        df_detail = CsvSingle().go_get_1_detail(pub_id)
        print(df_detail)
        df_review = CsvSingle().go_get_1_review(pub_id)
        df_detail_review = pd.merge(df_detail, df_review, on='pub_identity', how='left')

        station_id = df_detail['station_identity'].iloc[0]
        df_station = self.go_get_1_station(station_id)
        df_det_rev_st = pd.merge(df_detail_review, df_station, on='station_identity', how='left')

        direction_id = df_station['direction_identity'].iloc[0]
        df_direction = self.go_get_1_direction(direction_id)
        df_pb_rev_st_dir = pd.merge(df_det_rev_st, df_direction, on='direction_identity', how='left')

        df_diary = self.go_get_1_diary(pub_id)
        df_pb_rev_st_dir_dry = pd.merge(df_pb_rev_st_dir, df_diary, on='pub_identity', how='left')

        df_photo = self.go_get_1_photo(pub_id)
        df_with_photo = pd.merge(df_pb_rev_st_dir_dry, df_photo, on='pub_identity', how='left')
        df_pb_rev_st_dir_dry = df_with_photo.fillna('')

        return df_pb_rev_st_dir_dry

    def go_get_1_detail(self, pub_id):
        df_details = Csv().go_get_details()
        df_1_detail = df_details.loc[df_details['pub_identity'] == pub_id]
        return df_1_detail

    def go_get_1_review(self, pub_id):
        df_reviews = Csv().go_get_reviews()
        df_rev_no_dupes = df_reviews.drop_duplicates(subset='pub_identity', keep="last")
        df_1_review = df_rev_no_dupes.loc[df_rev_no_dupes['pub_identity'] == pub_id]
        return df_1_review

    def go_get_1_station(self, station_id):
        df_stations = Csv().go_get_stations()
        df_1_station = df_stations.loc[df_stations['station_identity'] == station_id]
        return df_1_station

    def go_get_1_direction(self, direction_id):
        df_directions = Csv().go_get_directions()
        df_1_direction = df_directions.loc[df_directions['direction_identity'] == direction_id]
        return df_1_direction

    def go_get_1_diary(self, pub_id):
        df_photos = Csv().go_get_diarys()
        df_1_photo = df_photos.loc[df_photos['pub_identity'] == pub_id]
        return df_1_photo

    def go_get_1_photo(self, pub_id):
        df_photos = Csv().go_get_photos()
        df_1_photo = df_photos.loc[df_photos['pub_identity'] == pub_id]
        return df_1_photo
