import os
import uuid
import pandas as pd
from config import Configurations
from app.static.pythonscripts.csv import Csv
from app.models.detail.detail import Detail
from app.models.detail.rank import Rank
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
from app.models.photo.photo_identity import PhotoIdentity
from app.static.pythonscripts.uuid_generater import UuidGenerator

config = Configurations().get_config()
config2 = Configurations().get_config2()
directory_path = config2['directory_path']


class NewDetail:

    def go_get_new_detail(self, pub_id):
        new_detail = Detail(pub_identity=pub_id, rank=Rank().value, place=Place().value, detail_deletion=DetailDeletion().value,
                         detail_name=DetailName().value, address=Address().value,
                         detail_latitude=DetailLatitude().value, detail_longitude=DetailLongitude().value,
                         station_identity=StationIdentity().value,
                         category=Category().value,
                         colour=Colour().value, extra=Extra().value)
        df_new_detail = pd.DataFrame([new_detail.__dict__])
        return df_new_detail
