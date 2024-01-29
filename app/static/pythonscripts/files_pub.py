import os
import uuid
import pandas as pd
from config import Configurations
# from app.static.pythonscripts.csv import Csv

from app.models.station.station_identity import StationIdentity
from app.models.photo.photo_identity import PhotoIdentity
from app.static.pythonscripts.uuid_generater import UuidGenerator
# from app.static.pythonscripts.new_detail import NewDetail
from app.static.pythonscripts.files_detail import FilesDetail
from app.static.pythonscripts.files_review import FilesReview
from app.static.pythonscripts.files_station import FilesStation
from app.static.pythonscripts.files_direction import FilesDirection
from app.static.pythonscripts.files_diary import FilesDiary
from app.static.pythonscripts.files_events import FilesEvent


config = Configurations().get_config()
config2 = Configurations().get_config2()
directory_path = config2['directory_path']


class FilesPub:

    def go_get_pubs(self):
        print('go_get_pubs')
        df_details = FilesDetail().go_get_details()
        df_reviews = FilesReview().go_get_reviews_csv()
        df_reviews_no_dupes = df_reviews.drop_duplicates(subset='pub_identity', keep="last")
        df_detail_reviews = pd.merge(df_details, df_reviews_no_dupes, on='pub_identity', how='left')

        df_stations = FilesStation().go_get_stations()
        df_det_rev_sts = pd.merge(df_detail_reviews, df_stations, on='station_identity', how='left')

        df_directions = FilesDirection().go_get_directions()
        df_pb_rev_st_dirs = pd.merge(df_det_rev_sts, df_directions, on='direction_identity', how='left')

        df_diarys = FilesDiary().go_get_diarys()
        df_pb_rev_st_dir_drys = pd.merge(df_pb_rev_st_dirs, df_diarys, on='pub_identity', how='left')

        # df_photos = self.go_get_photos()
        # df_with_photos = pd.merge(df_pb_rev_st_dir_drys, df_photos, on='pub_identity', how='left')
        # df_pb_rev_st_dir_drys = df_pb_rev_st_dir_drys.fillna('')
        df_pb_rev_st_dir_drys['distance'] = 0

        # df_events = FilesEvent().go_get_events()
        # df_pb_rev_st_dir_drys_evnts = pd.merge(df_pb_rev_st_dir_drys, df_events, on='pub_identity', how='left')
        # df_pb_rev_st_dir_drys_evnts = df_pb_rev_st_dir_drys_evnts.fillna('')
        return df_pb_rev_st_dir_drys
        # return df_pb_rev_st_dir_drys_evnts

    def go_get_1_pub(self, pub_id):
        print('go_get_1_pub')
        df_pubs = self.go_get_pubs()
        df_1_pub = df_pubs.loc[(df_pubs['pub_identity'] == pub_id)]

        # df_detail = FilesDetail().go_get_1_detail(pub_id)
        # df_review = FilesReview().go_get_1_review(pub_id)
        # df_detail_review = pd.merge(df_detail, df_review, on='pub_identity', how='left')
        #
        # station_id = df_detail['station_identity'].iloc[0]
        # df_station = FilesStation().go_get_1_station(station_id)
        # df_det_rev_st = pd.merge(df_detail_review, df_station, on='station_identity', how='left')
        #
        # direction_id = df_station['direction_identity'].iloc[0]
        # df_direction = FilesDirection().go_get_1_direction(direction_id)
        # df_pb_rev_st_dir = pd.merge(df_det_rev_st, df_direction, on='direction_identity', how='left')
        #
        # df_diary = FilesDiary().go_get_1_diary(pub_id)
        # df_pb_rev_st_dir_dry = pd.merge(df_pb_rev_st_dir, df_diary, on='pub_identity', how='left')
        # df_pb_rev_st_dir_dry = df_pb_rev_st_dir_dry.fillna('')
        print('df_1_pub')
        print(df_1_pub)
        return df_1_pub

    def go_new_pub(self):
        new_pub_id = UuidGenerator().get_new_uuid()
        # df_detail = NewDetail().go_get_new_detail(pub_id=new_pub_id)
        df_detail = FilesDetail().new_detail(pub_id=new_pub_id)

        df_review = FilesReview().new_review(rev_id=UuidGenerator().get_new_uuid(), pub_id=new_pub_id)
        df_detail_review = pd.merge(df_detail, df_review, on='pub_identity', how='left')

        # station_id = df_detail['station_identity'].iloc[0]
        df_station = FilesStation().go_get_new_station()
        df_det_rev_st = pd.merge(df_detail_review, df_station, on='station_identity', how='left')

        # direction_id = df_station['direction_identity'].iloc[0]
        df_direction = FilesDirection().go_get_new_direction()
        df_pb_rev_st_dir = pd.merge(df_det_rev_st, df_direction, on='direction_identity', how='left')

        # df_diary = FilesDiary().new_diary(pub_id=new_pub_id)
        # df_pb_rev_st_dir_dry = pd.merge(df_pb_rev_st_dir, df_diary, on='pub_identity', how='left')

        df_diary = FilesDiary().new_diary(pub_id=new_pub_id)
        df_pb_rev_st_dir_dry = pd.merge(df_pb_rev_st_dir, df_diary, on='pub_identity', how='left')

        # df_photo = NewPhoto().go_get_new_photo(id=UuidGenerator().get_new_uuid(), pub_id=new_pub_id)
        # df_with_photo = pd.merge(df_pb_rev_st_dir_dry, df_photo, on='pub_identity', how='left')
        df_pb_rev_st_dir_dry = df_pb_rev_st_dir_dry.fillna('')

        return df_pb_rev_st_dir_dry
