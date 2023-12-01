import os
import uuid
import pandas as pd
from config import Configurations
from app.models.station.station import Station
from app.models.station.station_deletion import StationDeletion
from app.models.station.station_identity import StationIdentity
from app.models.station.station_name import StationName
from app.models.station.station_latitude import StationLatitude
from app.models.station.station_longitude import StationLongitude
from app.models.station.zone import Zone
from app.models.station.postcode import Postcode
from app.models.direction.direction_identity import DirectionIdentity
from app.models.photo.photo_identity import PhotoIdentity
from app.models.area.area_identity import AreaIdentity
from app.static.pythonscripts.uuid_generater import UuidGenerator

config = Configurations().get_config()
config2 = Configurations().get_config2()
directory_path = config2['directory_path']


class NewStation:

    def go_get_new_station(self):
        new_station = Station(station_identity=StationIdentity().value, station_deletion=StationDeletion().value,
                              station_name=StationName().value, station_latitude=StationLatitude().value,
                              station_longitude=StationLongitude().value, zone=Zone().value,
                              postcode=Postcode().value, direction_identity=DirectionIdentity().value)
        df_new_station = pd.DataFrame([new_station.__dict__])
        return df_new_station
