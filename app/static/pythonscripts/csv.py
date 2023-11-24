import os
import pandas as pd
from config import Configurations

config = Configurations().get_config()
config2 = Configurations().get_config2()
directory_path = config2['directory_path']


class Csv:

    def go_get_stations_directions(self):
        df_pub_with_station = pd.merge(self.go_get_pubs(), self.go_get_stations(), on='station_identity',
                                       how='left').sort_values(
                                       by='station_name')
        unique_station_identity_list = df_pub_with_station['station_identity'].unique()
        df_unique_stations_identity = pd.DataFrame({'station_identity': unique_station_identity_list})
        df_unique_stations = pd.merge(df_unique_stations_identity, self.go_get_stations(), on='station_identity', how='left')
        df_stations_directions = pd.merge(df_unique_stations, self.go_get_directions(), on='direction_identity', how='left')
        return df_stations_directions

    def go_get_directions_list(self):
        df_stations_directions = self.go_get_stations_directions()
        unique_directions_list = df_stations_directions['direction_identity'].unique()
        df_unique_directions_identity = pd.DataFrame({'direction_identity': unique_directions_list})
        df_unique_directions = pd.merge(df_unique_directions_identity, self.go_get_directions(), on='direction_identity',
                                        how='left')
        df_unique_directions_trunc = df_unique_directions[['direction_identity', 'direction_name']]
        directions_list = df_unique_directions_trunc.values.tolist()
        return directions_list

    def go_get_stations_directions_list(self):
        df_stations_directions = self.go_get_stations_directions()
        df_stations_directions_trunc = df_stations_directions[
            ['station_identity', 'station_name', 'direction_identity', 'direction_name']]
        stations_directions_list = df_stations_directions_trunc.values.tolist()
        return stations_directions_list

    def go_get_feature(self, feature):
        df_all = self.go_get_all()
        df_feature = df_all.loc[df_all[feature] == "true"]
        return df_feature

    def go_get_all(self):
        df_pubs = self.go_get_pubs()
        df_reviews = self.go_get_reviews()
        df_rev_no_dupes = df_reviews.drop_duplicates(subset='pub_identity', keep="last")
        df_pb_rev = pd.merge(df_pubs, df_rev_no_dupes, on='pub_identity', how='left')
        return df_pb_rev

    def go_get_data(self, df_pb_rev):
        df_stations = self.go_get_stations()
        df_pb_rev_st = pd.merge(df_pb_rev, df_stations, on='station_identity', how='left')

        df_directions = self.go_get_directions()
        df_pb_rev_st_dir = pd.merge(df_pb_rev_st, df_directions, on='direction_identity', how='left')

        df_diary = self.go_get_diarys()
        df_pb_rev_st_dir_dry = pd.merge(df_pb_rev_st_dir, df_diary, on='pub_identity', how='left')
        # df_pb_rev_st_dir_dry = df_pb_rev_st_dir_dry.fillna('')

        df_photos = self.go_get_photos()
        print('df_photos')
        print(df_photos)
        df_with_photos = pd.merge(df_pb_rev_st_dir_dry, df_photos, on='pub_identity', how='left')
        df_pb_rev_st_dir_dry = df_with_photos.fillna('')

        return df_pb_rev_st_dir_dry

    def go_get_pubs(self):
        df_pubs = pd.read_csv(directory_path + '/files/pubs.csv', dtype={'pub_identity': str, 'area_identity': str,
                                                               'station_identity': str, 'pub_deletion': str,
                                                               'pub_name': str, 'address': str, 'category': str,
                                                               'colour': str, 'place': str, 'pub_latitude': float,
                                                               'pub_longitude': float, 'rank': float,
                                                               'detail': str})
        return df_pubs

    def go_get_reviews(self):
        df_reviews = pd.read_csv(directory_path + '/files/reviews.csv', dtype={'review_deletion': str, 'brunch': str,
                                                                  'dart': str, 'entertain': str,
                                                                  'favourite': str, 'garden': str,
                                                                  'history': str, 'late': str,
                                                                  'music': str, 'pool': str, 'quiz': str,
                                                                  'roast': str, 'sport': str})
        return df_reviews

    def go_get_diarys(self):
        df_diarys = pd.read_csv(directory_path + '/files/diary.csv', dtype={'pub_identity': str, 'monday': str,
                                                                       'tuesday': str, 'wednesday': str,
                                                                       'thursday': str, 'friday': str,
                                                                       'saturday': str, 'sunday': str})
        return df_diarys

    def go_get_stations(self):
        df_station = pd.read_csv(directory_path + '/files/stations.csv',
                                 dtype={'station_identity': str, 'station_deletion': str, 'station_name': str,
                                        'station_latitude': float, 'station_longitude': float, 'zone': str,
                                        'postcode': str, 'direction_identity': str})
        return df_station

    def go_get_directions(self):
        df_directions = pd.read_csv(directory_path + '/files/directions.csv',
                                    dtype={'direction_identity': str, 'direction_name': str, 'direction_deletion': str})
        return df_directions

    def go_get_photos(self):
        df_photos = pd.read_csv(directory_path + '/files/photos.csv',
                                dtype={'photo_identity': str, 'pub_identity': str, 'photo_deletion': str})
        return df_photos
