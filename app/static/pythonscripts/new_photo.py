import os
import uuid
import pandas as pd
from config import Configurations
from app.static.pythonscripts.csv import Csv
from app.models.photo.photo import Photo
from app.models.station.station_identity import StationIdentity
from app.models.photo.photo_identity import PhotoIdentity
from app.static.pythonscripts.uuid_generater import UuidGenerator

config = Configurations().get_config()
config2 = Configurations().get_config2()
directory_path = config2['directory_path']


class NewPhoto:

    def go_get_new_photo(self, id, pub_id):
        new_diary = Photo(photo_identity=id, photo_deletion='false', pub_identity=pub_id)
        df_new_diary = pd.DataFrame([new_diary.__dict__])
        return df_new_diary

