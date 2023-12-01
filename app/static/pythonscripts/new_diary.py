import os
import uuid
import pandas as pd
from config import Configurations
from app.static.pythonscripts.csv import Csv
from app.models.diary.diary import Diary
from app.models.station.station_identity import StationIdentity
from app.models.photo.photo_identity import PhotoIdentity
from app.models.area.area_identity import AreaIdentity
from app.static.pythonscripts.uuid_generater import UuidGenerator

config = Configurations().get_config()
config2 = Configurations().get_config2()
directory_path = config2['directory_path']


class NewDiary:

    def go_get_new_diary(self, pub_id):
        new_diary = Diary(pub_identity=pub_id, monday="", tuesday="", wednesday="", thursday="", friday="",
                          saturday="", sunday="")
        df_new_diary = pd.DataFrame([new_diary.__dict__])
        return df_new_diary
