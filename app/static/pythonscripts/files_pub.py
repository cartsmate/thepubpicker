import os
import uuid
import pandas as pd
from config import Configurations
# from app.static.pythonscripts.csv import Csv
from app.models.detail.detail import Detail
from app.models.station.station import Station
from app.models.direction.direction import Direction
from app.models.diary.diary import Diary
from app.models.station.station_identity import StationIdentity
from app.models.photo.photo_identity import PhotoIdentity
from app.static.pythonscripts.uuid_generater import UuidGenerator
from app.static.pythonscripts.postgres import PostgresConnection


from app.static.pythonscripts.pub_get import GetPub
from app.static.pythonscripts.pub_new import NewPub
from app.models.review.review import Review


# config = Configurations().get_config()
env_vars = Configurations().get_config2()
directory_path = env_vars['directory_path']


class FilesPub:

    def get_pub_all(self, df_detail_all, df_review_all, df_diary_all, df_station_all, df_direction_all):
        # get all pub REVIEWS
        df_pub_all = df_review_all.drop_duplicates(subset='pub_identity', keep="last")
        # merge with all pub DETAILS
        df_pub_all = pd.merge(df_detail_all, df_pub_all, on='pub_identity', how='left')
        # merge with all DIARY days
        df_pub_all = pd.merge(df_pub_all, df_diary_all, on='pub_identity', how='left')
        # merge with all STATIONS
        df_pub_all = pd.merge(df_pub_all, df_station_all, on='station_identity', how='left')
        # merge with all DIRECTIONS
        df_pub_all = pd.merge(df_pub_all, df_direction_all, on='direction_identity', how='left')
        return df_pub_all

    def get_pub_1(self, df_pubs, pub_id):
        # get all PUBS
        # df_pubs = self.get_pub_all()
        # filter to get single PUB
        df_1_pub = df_pubs.loc[(df_pubs['pub_identity'] == pub_id)]
        return df_1_pub

    def new_pub(self):
        new_pub_id = UuidGenerator().get_new_uuid()
        print('new_pub_id: ' + new_pub_id)
        df_new_detail = NewPub().new_pub(Detail(), new_pub_id)
        df_new_review = NewPub().new_pub(Review(), new_pub_id)
        # df_new_diary = NewPub().new_pub(Diary(), new_pub_id)
        df_new_station = NewPub().new_pub(Station(), new_pub_id)
        df_new_direction = NewPub().new_pub(Direction(), new_pub_id)
        df_pub = pd.merge(df_new_detail, df_new_review, on='pub_identity', how='left')
        # df_pub = pd.merge(df_pub, df_new_diary, on='pub_identity', how='left')
        df_pub = pd.merge(df_pub, df_new_station, on='station_identity', how='left')
        df_pub = pd.merge(df_pub, df_new_direction, on='direction_identity', how='left')
        return df_pub


    # def add_pub(self):
    #     new_pub_id = UuidGenerator().get_new_uuid()
    #     # df_detail = NewDetail().go_get_new_detail(pub_id=new_pub_id)
    #
    #     df_detail = FilesDetail().add_detail(pub_id=new_pub_id)
    #
    #     df_review = FilesReview().add_review(rev_id=UuidGenerator().get_new_uuid(), pub_id=new_pub_id)
    #     df_detail_review = pd.merge(df_detail, df_review, on='pub_identity', how='left')
    #
    #     df_det_rev_st = pd.merge(df_detail_review, GetPub().get_all(Station()), on='station_identity', how='left')
    #
    #     df_pb_rev_st_dir = pd.merge(df_det_rev_st, GetPub().get_all(Direction()), on='direction_identity', how='left')
    #
    #     # df_diary = FilesDiary().new_diary(pub_id=new_pub_id)
    #     # df_pb_rev_st_dir_dry = pd.merge(df_pb_rev_st_dir, df_diary, on='pub_identity', how='left')
    #
    #     # df_diary = FilesDiary().add_diary(pub_id=new_pub_id)
    #     # df_pb_rev_st_dir_dry = pd.merge(df_pb_rev_st_dir, df_diary, on='pub_identity', how='left')
    #
    #     # df_photo = NewPhoto().go_get_new_photo(id=UuidGenerator().get_new_uuid(), pub_id=new_pub_id)
    #     # df_with_photo = pd.merge(df_pb_rev_st_dir_dry, df_photo, on='pub_identity', how='left')
    #     # df_pb_rev_st_dir_dry = df_pb_rev_st_dir_dry.fillna('')
    #
    #     return df_pb_rev_st_dir
