import os
import random
from datetime import datetime, timedelta, date
import pandas as pd
import numpy as np
from config import Configurations

config = Configurations().get_config()
config2 = Configurations().get_config2()
directory_path = config2['directory_path']


class Csv:

    def add_no_feature(self, df_data):
        df_data['no_feature'] = np.where((df_data['brunch'] == 'true') | \
                                        (df_data['dart'] == 'true') | \
                                        (df_data['entertain'] == 'true') | \
                                        (df_data['favourite'] == 'true') | \
                                        (df_data['garden'] == 'true') | \
                                        (df_data['history'] == 'true') | \
                                        (df_data['late'] == 'true') | \
                                        (df_data['music'] == 'true') | \
                                        (df_data['pool'] == 'true') | \
                                        (df_data['quiz'] == 'true') | \
                                        (df_data['roast'] == 'true') | \
                                        (df_data['sport'] == 'true') \
                                        , 'false', 'true')
        return df_data

    def go_get_stations_directions(self):
        df_pub_with_station = pd.merge(self.go_get_details(), self.go_get_stations(), on='station_identity',
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
        df_details = self.go_get_details()
        df_reviews = self.go_get_reviews()
        df_reviews_no_dupes = df_reviews.drop_duplicates(subset='pub_identity', keep="last")
        df_detail_reviews = pd.merge(df_details, df_reviews_no_dupes, on='pub_identity', how='left')

        df_stations = self.go_get_stations()
        df_det_rev_sts = pd.merge(df_detail_reviews, df_stations, on='station_identity', how='left')

        df_directions = self.go_get_directions()
        df_pb_rev_st_dirs = pd.merge(df_det_rev_sts, df_directions, on='direction_identity', how='left')

        df_diarys = self.go_get_diarys()
        df_pb_rev_st_dir_drys = pd.merge(df_pb_rev_st_dirs, df_diarys, on='pub_identity', how='left')

        # df_photos = self.go_get_photos()
        # df_with_photos = pd.merge(df_pb_rev_st_dir_drys, df_photos, on='pub_identity', how='left')
        df_pb_rev_st_dir_drys = df_pb_rev_st_dir_drys.fillna('')

        return df_pb_rev_st_dir_drys

    def go_get_pubs(self, df_detail_reviews):
        df_stations = self.go_get_stations()
        df_details_reviews_station = pd.merge(df_detail_reviews, df_stations, on='station_identity', how='left')

        df_directions = self.go_get_directions()
        df_detail_reviews_station_direction = pd.merge(df_details_reviews_station, df_directions, on='direction_identity', how='left')

        df_diary = self.go_get_diarys()
        df_detail_reviews_station_direction_diary = pd.merge(df_detail_reviews_station_direction, df_diary, on='pub_identity', how='left')
        # df_detail_reviews_station_direction_diary = df_detail_reviews_station_direction_diary.fillna('')

        df_photos = self.go_get_photos()
        # print('df_photos')
        # print(df_photos)
        df_pubs = pd.merge(df_detail_reviews_station_direction_diary, df_photos, on='pub_identity', how='left')
        df_pubs = df_pubs.fillna('')

        return df_pubs

    def go_get_details_daily(self):
        print('go_get_details_daily')
        df_details_day = pd.read_csv(directory_path + '/files/details_day.csv',
                                     dtype={'pub_identity': str, 'timestamp': str})
        # print(df_details_day)

        # read value of date
        df_lastline = df_details_day.tail(1)
        print('df_lastline')
        print(df_lastline)
        previous_timestamp_str = df_lastline.iloc[0]['timestamp']
        print('previous_timestamp_str: ' + previous_timestamp_str)
        # format_data = "%d/%m/%y %H:%M:%S.%f"
        # format_data = "%Y-%m-%d"
        # previous_timestamp = datetime.strptime(previous_timestamp_str, format_data)
        # print('previous_timestamp: ' + str(previous_timestamp))

        new_timestamp = datetime.now()
        new_timestamp_str = datetime.today().strftime('%Y-%m-%d')
        # new_timestamp = datetime.date.today()
        # print('new_timestamp_str: ' + new_timestamp_str)

        # if ((current_timestamp - daily_pub_timestamp) > timedelta(days=1)
        #         or current_timestamp.weekday() != daily_pub_timestamp.weekday()):
        if new_timestamp_str == previous_timestamp_str:
            print("same day")
            df_details_day = df_details_day

        else:
            print("next day")
            # # # GET RANDOM PUB
            df_details = Csv().go_get_details()

            no_of_details = df_details.shape[0]
            random_index = random.randrange(0, no_of_details)
            df_random_pub = df_details.iloc[random_index]
            # print(df_random_pub)
            random_pub_id = df_random_pub['pub_identity']
            # print(random_pub_id)

            data = {'pub_identity': [random_pub_id], 'timestamp': [new_timestamp_str]}

            df_new = pd.DataFrame(data)

            # daily_pub_list = ['pub_identity', random_pub_id, 'timestamp', new_timestamp_str]
            # df_new = pd.DataFrame(daily_pub_list)
            # print(df_details_day)
            print(df_new)
            df_appended = pd.concat([df_details_day, df_new], ignore_index=True)
            print(df_appended)
            df_appended.to_csv(directory_path + '/files/details_day.csv', index=False, sep=',', encoding='utf-8')
            df_details_day = df_new
        return df_details_day

    def go_get_details(self):
        df_details = pd.read_csv(directory_path + '/files/details.csv',
                                 dtype={'pub_identity': str, 'station_identity': str, 'detail_name': str,
                                        'address': str, 'category': str, 'colour': str, 'detail_deletion': str,
                                        'detail_latitude': float, 'detail_longitude': float, 'extra': str, 'place': str,
                                        'rank': float, 'website': str, 'url': str})
        # print(df_details)
        print('details csv file downloaded')
        return df_details

    def go_get_reviews(self):
        df_reviews = pd.read_csv(directory_path + '/files/reviews.csv', dtype={'review_identity': str, 'pub_identity':str,
            'review_deletion': str, 'brunch': str,
                                                                  'dart': str, 'entertain': str,
                                                                  'favourite': str, 'garden': str,
                                                                  'history': str, 'late': str,
                                                                  'music': str, 'pool': str, 'quiz': str,
                                                                  'roast': str, 'sport': str})
        # print(df_reviews)
        df_reviews = self.add_no_feature(df_reviews)
        print('reviews csv file downloaded')
        return df_reviews

    def go_get_diarys(self):
        df_diarys = pd.read_csv(directory_path + '/files/diary.csv', dtype={'pub_identity': str, 'monday': str,
                                                                       'tuesday': str, 'wednesday': str,
                                                                       'thursday': str, 'friday': str,
                                                                       'saturday': str, 'sunday': str})
        # print(df_diarys)
        print('diarys csv file downloaded')
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
        df_photos = pd.read_csv(directory_path + '/files/photos_api.csv',
                                dtype={'photo_identity': str, 'photo_deletion': str, 'pub_identity': str})
        return df_photos
