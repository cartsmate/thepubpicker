import os
import uuid
import pandas as pd
from config import Configurations
from app.static.pythonscripts.csv import Csv
from app.models.detail.pub import Pub
from app.models.detail.rank import Rank
from app.models.detail.pub_deletion import PubDeletion
from app.models.detail.detail import Detail
from app.models.detail.place import Place
from app.models.detail.colour import Colour
from app.models.detail.category import Category
from app.models.detail.pub_name import PubName
from app.models.detail.pub_longitude import PubLongitude
from app.models.detail.pub_latitude import PubLatitude
from app.models.detail.address import Address
from app.models.station.station_identity import StationIdentity
from app.models.photo.photo_identity import PhotoIdentity
from app.models.area.area_identity import AreaIdentity
from app.static.pythonscripts.uuid_generater import UuidGenerator

config = Configurations().get_config()
config2 = Configurations().get_config2()
directory_path = config2['directory_path']


class NewDetail:

    def go_get_new_detail(self, pub_id):
        new_detail = Pub(pub_identity=pub_id, rank=Rank().value, place=Place().value, pub_deletion=PubDeletion().value,
                         pub_name=PubName().value, address=Address().value,
                         pub_latitude=PubLatitude().value, pub_longitude=PubLongitude().value,
                         station_identity=StationIdentity().value,
                         area_identity=AreaIdentity().value, category=Category().value,
                         colour=Colour().value, detail=Detail().value)
        df_new_detail = pd.DataFrame([new_detail.__dict__])
        return df_new_detail
