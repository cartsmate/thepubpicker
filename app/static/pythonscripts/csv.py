import os
import random
from datetime import datetime, timedelta, date
import pandas as pd
import numpy as np
from app.static.pythonscripts.s3 import S3
from config import Configurations

config = Configurations().get_config()
config2 = Configurations().get_config2()
directory_path = config2['directory_path']
# # # GET ENVIRONMENTAL VARIABLES
env_vars = Configurations().get_config2()


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
        df_pb_rev_st_dir_drys['distance'] = 0

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

        df_pubs = pd.merge(df_detail_reviews_station_direction_diary, df_photos, on='pub_identity', how='left')
        df_pubs = df_pubs.fillna('')

        return df_pubs

    def go_get_details_daily(self):
        print('go_get_details_daily')
        if env_vars['source'] == 'csv':
            df_details_day = pd.read_csv(directory_path + '/files/featured.csv',
                                         dtype={'pub_identity': str, 'timestamp': str})
        else:
            attribute_list = ['pub_identity', 'timestamp']
            df_details_day = S3().s3_read('featured', attribute_list)

        df_lastline = df_details_day.tail(1)

        previous_timestamp_str = df_lastline.iloc[0]['timestamp']


        new_timestamp = datetime.now()
        new_timestamp_str = datetime.today().strftime('%Y-%m-%d')

        if new_timestamp_str == previous_timestamp_str:
            daily_id = df_lastline.iloc[0]['pub_identity']
        else:
            # # # GET RANDOM PUB
            df_details = Csv().go_get_details()

            no_of_details = df_details.shape[0]
            random_index = random.randrange(0, no_of_details)
            df_random_pub = df_details.iloc[random_index]
            random_pub_id = df_random_pub['pub_identity']
            data = {'pub_identity': [random_pub_id], 'timestamp': [new_timestamp_str]}

            df_new = pd.DataFrame(data)

            df_appended = pd.concat([df_details_day, df_new], ignore_index=True)

            if env_vars['source'] == 'csv':
                df_appended.to_csv(directory_path + '/files/featured.csv', index=False, sep=',', encoding='utf-8')
            else:
                s3_resp = S3().s3_write(df_appended, 'featured.csv')
                print(s3_resp)

            daily_id = df_new.iloc[0]['pub_identity']
        return daily_id

    def go_get_details(self):
        print('CSV - go get details')
        if env_vars['source'] == 'csv':
            df_details = pd.read_csv(directory_path + '/files/details.csv',
                                     dtype={'pub_identity': str, 'station_identity': str, 'detail_name': str,
                                            'address': str, 'category': str, 'colour': str, 'detail_deletion': str,
                                            'detail_latitude': float, 'detail_longitude': float, 'extra': str,
                                            'place': str, 'rank': float, 'website': str, 'url': str})
        else:
            attribute_list = ['pub_identity', 'station_identity', 'detail_name', 'address', 'category', 'colour',
                        'detail_deletion', 'detail_latitude', 'detail_longitude', 'extra', 'place', 'rank', 'website',
                        'url']
            df_details = S3().s3_read('details', attribute_list)

        return df_details

    def go_get_reviews(self):
        print('go get reviews')
        if env_vars['source'] == 'csv':
            df_reviews = pd.read_csv(directory_path + '/files/reviews.csv', dtype={'review_identity': str, 'pub_identity':str,
                'review_deletion': str, 'brunch': str,
                                                                      'dart': str, 'entertain': str,
                                                                      'favourite': str, 'garden': str,
                                                                      'history': str, 'late': str,
                                                                      'music': str, 'pool': str, 'quiz': str,
                                                                      'roast': str, 'sport': str})
        else:
            attribute_list = ['review_identity', 'review_deletion', 'pub_identity', 'brunch', 'dart', 'entertain',
                              'favourite', 'garden', 'history', 'late', 'music', 'pool', 'quiz', 'roast', 'sport',
                              'no_feature']
            df_reviews = S3().s3_read('reviews', attribute_list)

        return df_reviews

    def go_get_diarys(self):
        print('go get diarys')
        if env_vars['source'] == 'csv':
            df_diarys = pd.read_csv(directory_path + '/files/diary.csv', dtype={'pub_identity': str, 'monday': str,
                                                                           'tuesday': str, 'wednesday': str,
                                                                           'thursday': str, 'friday': str,
                                                                           'saturday': str, 'sunday': str})
        else:
            attribute_list = ['pub_identity', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday',
                              'sunday']
            df_diarys = S3().s3_read('diary', attribute_list)
        return df_diarys

    def go_get_stations(self):
        print('go get stations')
        if env_vars['source'] == 'csv':
            df_station = pd.read_csv(directory_path + '/files/stations.csv',
                                     dtype={'station_identity': str, 'station_deletion': str, 'station_name': str,
                                            'station_latitude': float, 'station_longitude': float, 'zone': str,
                                            'postcode': str, 'direction_identity': str})
        else:
            attribute_list = ['station_identity', 'station_deletion', 'station_name', 'station_latitude',
                              'station_longitude', 'zone', 'postcode', 'direction_identity']
            df_station = S3().s3_read('station', attribute_list)
        return df_station

    def go_get_directions(self):
        print('go get directions')
        if env_vars['source'] == 'csv':
            df_directions = pd.read_csv(directory_path + '/files/directions.csv',
                                        dtype={'direction_identity': str, 'direction_name': str, 'direction_deletion': str})
        else:
            attribute_list = ['direction_identity', 'direction_name', 'direction_deletion']
            df_directions = S3().s3_read('direction', attribute_list)
        return df_directions

    def go_get_photos(self):
        print('go get photos')
        if env_vars['source'] == 'csv':
            df_photos = pd.read_csv(directory_path + '/files/photos_api.csv',
                                    dtype={'photo_identity': str, 'photo_deletion': str, 'pub_identity': str})
        else:
            df_photos = None
        return df_photos


    def go_get_counter(self):
        directory_path = config2['directory_path']
        # if config2['env'] == 'prod':
        obj_df = pd.read_csv(directory_path + '/files/counter_qual.csv')
        # else:
        #     obj_df = pd.read_csv(directory_path + '/files/counter_qual.csv')
        obj_df["pub_counter"] = obj_df["pub_counter"] + 1

        # if config2['env'] == 'prod':
        obj_df.to_csv(directory_path + '/files/counter_qual.csv', sep=',', encoding='utf-8', index=False)
        # else:
        #     obj_df.to_csv(directory_path + '/files/counter_qual.csv', sep=',', encoding='utf-8', index=False)
        counter = obj_df["pub_counter"].values[0]
        # counter6 = counter.zfill(6)

        print('counter: ' + str(counter))
        return counter
