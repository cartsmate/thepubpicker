import os
import uuid
import pandas as pd
from config import Configurations
from app.static.pythonscripts.csv import Csv
from app.models.direction.direction import Direction
from app.models.direction.direction_identity import DirectionIdentity
from app.models.direction.direction_name import DirectionName
from app.models.direction.direction_deletion import DirectionDeletion
from app.models.station.station_identity import StationIdentity
from app.models.photo.photo_identity import PhotoIdentity
from app.models.area.area_identity import AreaIdentity
from app.static.pythonscripts.uuid_generater import UuidGenerator

config = Configurations().get_config()
config2 = Configurations().get_config2()
directory_path = config2['directory_path']


class NewDirection:

    def go_get_new_direction(self):
        new_direction = Direction(direction_identity=DirectionIdentity().value, direction_name=DirectionName().value,
                                  direction_deletion=DirectionDeletion().value)
        df_new_direction = pd.DataFrame([new_direction.__dict__])
        return df_new_direction
