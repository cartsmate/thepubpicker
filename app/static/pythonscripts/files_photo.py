
import requests
import pandas as pd

from flask import request
from config import Configurations
# from app.static.pythonscripts.csv import Csv
from app.static.pythonscripts.pub_get import GetPub
from app.models.review.review import Review
from app.models.diary.diary import Diary
# from app.models.detail.ranking import Ranking
from app.models.detail.detail_deletion import DetailDeletion
from app.models.detail.detail import Detail
from app.models.detail.place import Place
from app.models.detail.colour import Colour
from app.models.detail.category import Category
from app.models.detail.detail_name import DetailName
from app.models.detail.detail_longitude import DetailLongitude
from app.models.detail.detail_latitude import DetailLatitude
from app.models.detail.extra import Extra
from app.models.detail.address import Address
from app.models.station.station_identity import StationIdentity
# from app.static.pythonscripts.controls_list import ControlsList
from app.models.photo.photo_identity import PhotoIdentity
from app.static.pythonscripts.uuid_generater import UuidGenerator

# config = Configurations().get_config()
# config2 = Configurations().get_config2()
# directory_path = config2['directory_path']
# model_formats = ControlsList().go_get_control_list()


class FilesPhoto:

    # def go_get_photos(self):
    #     print('go get photos')
    #     if env_vars['source'] == 'csv':
    #         df_photos = pd.read_csv(directory_path + '/files/photos_api.csv',
    #                                 dtype={'photo_identity': str, 'photo_deletion': str, 'pub_identity': str})
    #     else:
    #         df_photos = None
    #     return df_photos

    # def go_get_1_photo(self, pub_id):
    #     print('Go get 1 photo')
    #     df_photos = Csv().go_get_photos()
    #     df_1_photo = df_photos.loc[df_photos['pub_identity'] == pub_id]
    #     return df_1_photo
    def go_get_place_id(self, df, pub_id):
        print('go_get_place_id')

        df_place_id = GetPub().get_1(df, pub_id).iloc[0]['place']
        return df_place_id

    def go_get_1_photo_request(self, df, pub_id, env_vars):
        print('go_get_1_photo_request')
        place_id = GetPub().get_1(df, pub_id).iloc[0]['place']
        # place_id = self.go_get_place_id(pub_id)
        base_url = 'https://maps.googleapis.com/maps/api/place/details/json?'

        keyw = env_vars['places_key']
        fields = 'name,photos'

        full_url = base_url + "place_id=" + place_id + "&key=" + keyw + "&fields=" + fields
        # print(full_url)
        photo_list = []
        try:
            response = requests.get(full_url)
            # print(response.json())
            try:
                photo_ids = response.json()['result']['photos']
                for x in photo_ids:
                    photo_list.append(x['photo_reference'])
            except KeyError:
                print('API call worked, but nothing useful returned')
                pass

        except ConnectionError as e:
            print('API call failed')
            pass
        except Exception as e:
            print('API call - further errors occurred')

        # except NewConnectionError as e:
        #     print('API call failed')
        #
        # except MaxRetryError:
        #     print('API call failed MAX number of times')
        #     pass

        return photo_list

    # def add_photo_df(self, df_photos, df_new):
    #     print('ADD new detail')
    #     df_appended = pd.concat([df_photos, df_new], ignore_index=True)
    #     # df_full = pd.merge(df_details, df_new, on='pub_identity')
    #     return df_appended

    # def update_photo_csv(self, df_updated_photos):
    #     print('updating photo csv')
    #     # print(df_updated_photos)
    #     df_updated_photos.to_csv(directory_path + '/files/photos.csv', index=False, sep=',', encoding='utf-8')
    #     print('csv updated')
    #     return df_updated_photos
