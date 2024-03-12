import json
from app.models.detail.pub_identity import PubIdentity
from app.models.detail.address import Address
from app.models.detail.category import Category
from app.models.detail.detail_deletion import DetailDeletion
from app.models.detail.detail_latitude import DetailLatitude
from app.models.detail.detail_longitude import DetailLongitude
from app.models.detail.detail_name import DetailName
from app.models.detail.place import Place
from app.models.detail.ranking import Ranking
from app.models.detail.colour import Colour
from app.models.detail.extra import Extra
from app.models.detail.ordering import Ordering
from app.models.detail.website import Website
from app.models.detail.url import Url
from app.models.station.station_identity import StationIdentity
from app.models.photo.photo_identity import PhotoIdentity


class Detail:

    filename = 'combined'

    def __init__(self, pub_identity=PubIdentity(), station_identity=StationIdentity(), detail_name=DetailName(),
                 address=Address(), category=Category(), detail_deletion=DetailDeletion(),
                 detail_latitude=DetailLatitude(), detail_longitude=DetailLongitude(), extra=Extra(),
                 place=Place(), ranking=Ranking(), website=Website(), url=Url()):
        self.pub_identity = pub_identity
        self.station_identity = station_identity
        self.detail_name = detail_name
        self.address = address
        self.category = category
        self.detail_deletion = detail_deletion
        self.detail_latitude = detail_latitude
        self.detail_longitude = detail_longitude
        self.extra = extra
        self.place = place
        self.ranking = ranking
        self.website = website
        self.url = url
