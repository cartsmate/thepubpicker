import os
import uuid
import pandas as pd
from config import Configurations
from app.static.pythonscripts.csv import Csv

from app.models.station.station_identity import StationIdentity
from app.models.photo.photo_identity import PhotoIdentity
from app.static.pythonscripts.uuid_generater import UuidGenerator
# from app.static.pythonscripts.new_detail import NewDetail
from app.static.pythonscripts.files_detail import FilesDetail
from app.static.pythonscripts.files_review import FilesReview
from app.static.pythonscripts.files_station import FilesStation
from app.static.pythonscripts.files_direction import FilesDirection
from app.static.pythonscripts.files_diary import FilesDiary


config = Configurations().get_config()
config2 = Configurations().get_config2()
directory_path = config2['directory_path']


class FilesPub:

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

        df_diary = FilesDiary().new_diary(pub_id=new_pub_id)
        df_pb_rev_st_dir_dry = pd.merge(df_pb_rev_st_dir, df_diary, on='pub_identity', how='left')

        # df_photo = NewPhoto().go_get_new_photo(id=UuidGenerator().get_new_uuid(), pub_id=new_pub_id)
        # df_with_photo = pd.merge(df_pb_rev_st_dir_dry, df_photo, on='pub_identity', how='left')
        df_pb_rev_st_dir_dry = df_pb_rev_st_dir_dry.fillna('')

        return df_pb_rev_st_dir_dry
