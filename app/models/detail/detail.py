import json
from app.models.detail.pub_identity import PubIdentity
from app.models.detail.address import Address
from app.models.detail.category import Category
from app.models.detail.detail_deletion import DetailDeletion
from app.models.detail.detail_latitude import DetailLatitude
from app.models.detail.detail_longitude import DetailLongitude
from app.models.detail.detail_name import DetailName
from app.models.detail.place import Place
from app.models.detail.rank import Rank
from app.models.detail.colour import Colour
from app.models.detail.extra import Extra
from app.models.station.station_identity import StationIdentity
from app.models.photo.photo_identity import PhotoIdentity


class Detail:

    def __init__(self, detail_deletion=DetailDeletion(), place=Place(), detail_name=DetailName(),
                 address=Address(), detail_latitude=DetailLatitude(), detail_longitude=DetailLongitude(), category=Category(),
                 rank=Rank(), station_identity=StationIdentity(), pub_identity=PubIdentity(),
                 colour=Colour(), extra=Extra()):
        self.rank = rank
        self.pub_identity = pub_identity
        self.address = address
        self.category = category
        self.place = place
        self.colour = colour
        self.detail_deletion = detail_deletion
        self.detail_latitude = detail_latitude
        self.detail_longitude = detail_longitude
        self.detail_name = detail_name
        self.station_identity = station_identity
        self.extra = extra

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
