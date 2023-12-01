import json
from app.models.detail.pub_identity import PubIdentity
from app.models.detail.address import Address
from app.models.detail.category import Category
from app.models.detail.pub_deletion import PubDeletion
from app.models.detail.pub_latitude import PubLatitude
from app.models.detail.pub_longitude import PubLongitude
from app.models.detail.pub_name import PubName
from app.models.detail.place import Place
from app.models.detail.rank import Rank
from app.models.detail.colour import Colour
from app.models.detail.detail import Detail
from app.models.area.area_identity import AreaIdentity
from app.models.station.station_identity import StationIdentity
from app.models.photo.photo_identity import PhotoIdentity


class Pub:

    def __init__(self, pub_deletion=PubDeletion(), place=Place(), pub_name=PubName(),
                 address=Address(), pub_latitude=PubLatitude(), pub_longitude=PubLongitude(), category=Category(),
                 rank=Rank(), station_identity=StationIdentity(), area_identity=AreaIdentity(), pub_identity=PubIdentity(),
                 colour=Colour(), detail=Detail()):
        self.rank = rank
        self.pub_identity = pub_identity
        self.address = address
        self.area_identity = area_identity
        self.category = category
        self.place = place
        self.colour = colour
        self.pub_deletion = pub_deletion
        self.pub_latitude = pub_latitude
        self.pub_longitude = pub_longitude
        self.pub_name = pub_name
        self.station_identity = station_identity
        self.detail = detail

    # def to_dict(self):
    #     return {
    #         'rank': self.rank,
    #         'pub_identity': self.pub_identity,
    #         'address': self.address,
    #         'area_identity': self.area_identity,
    #         'category': self.category,
    #         'place': self.place,
    #         'colour': self.colour,
    #         'pub_deletion': self.pub_deletion,
    #         'pub_latitude': self.pub_latitude,
    #         'pub_longitude': self.pub_longitude,
    #         'pub_name': self.pub_name,
    #         'photo_identity': self.photo_identity,
    #         'station_identity': self.station_identity,
    #         'detail': self.detail,
    #     }

    def reprJSON(self):
        return dict(pub_identity=self.pub_identity, pub_deletion=self.pub_deletion, area_identity=self.area_identity,
                    station_identity=self.station_identity, address=self.address, category=self.category,
                    latitude=self.pub_latitude, longitude=self.pub_longitude, name=self.pub_name, place=self.place,
                    rank=self.rank)


class ComplexEncoder(json.JSONEncoder):
    def default(self, obj):
        if hasattr(obj, 'reprJSON'):
            return obj.reprJSON()
        else:
            return json.JSONEncoder.default(self, obj)
