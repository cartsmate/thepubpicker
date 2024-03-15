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
from app.models.detail.color import Color
from app.models.detail.extra import Extra
from app.models.detail.ordering import Ordering
from app.models.detail.website import Website
from app.models.detail.url import Url
from app.models.station.station_identity import StationIdentity
from app.models.photo.photo_identity import PhotoIdentity
from app.models.review.beer import Beer
from app.models.review.brunch import Brunch
from app.models.review.cocktail import Cocktail
from app.models.review.comedy import Comedy
from app.models.review.dart import Dart
from app.models.review.dj import Dj
from app.models.review.entertain import Entertain
from app.models.review.favourite import Favourite
from app.models.review.garden import Garden
from app.models.review.history import History
from app.models.review.hours import Hours
from app.models.review.karaoke import Karaoke
from app.models.review.late import Late
from app.models.review.music import Music
from app.models.review.nofeature import NoFeature
from app.models.review.outdoor import Outdoor
from app.models.review.pool import Pool
from app.models.review.private import Private
from app.models.review.quiz import Quiz
from app.models.review.restaurant import Restaurant
from app.models.review.roast import Roast
from app.models.review.scenic import Scenic
from app.models.review.sport import Sport
from app.models.review.timeout import Timeout
from app.models.review.scenic import Scenic
from app.models.review.wine import Wine

from app.models.diary.monday import Monday
from app.models.diary.tuesday import Tuesday
from app.models.diary.wednesday import Wednesday
from app.models.diary.thursday import Thursday
from app.models.diary.friday import Friday
from app.models.diary.saturday import Saturday
from app.models.diary.sunday import Sunday

from app.models.station.station_name import StationName
from app.models.direction.direction import DirectionName


class PubRecord:

    filename = 'combined'

    def __init__(self, pub_identity=PubIdentity(), detail_name=DetailName(), color=Color(),
                 address=Address(), detail_latitude=DetailLatitude(), detail_longitude=DetailLongitude(), extra=Extra(),
                 place=Place(), ranking=Ranking(), website=Website(), url=Url(),
                 beer=Beer(), brunch=Brunch(), cocktail=Cocktail(), comedy=Comedy(), dart=Dart(), dj=Dj(),
                 entertain=Entertain(), favourite=Favourite(), garden=Garden(), history=History(), hours=Hours(),
                 karaoke=Karaoke(), late=Late(), music=Music(), nofeature=NoFeature(), outdoor=Outdoor(),
                 pool=Pool(), private=Private(), quiz=Quiz(), restaurant=Restaurant(), roast=Roast(),
                 scenic=Scenic(), sport=Sport(), timeout=Timeout(), wine=Wine(),
                 monday=Monday(), tuesday=Tuesday(), wednesday=Wednesday(), thursday=Thursday(), friday=Friday(),
                 saturday=Saturday(), sunday=Sunday(),
                 station_name=StationName(), direction_name=DirectionName()):
        self.pub_identity = pub_identity,
        self.detail_name = detail_name,
        self.address = address,
        self.detail_latitude = detail_latitude,
        self.detail_longitude = detail_longitude,
        self.extra = extra,
        self.place = place,
        self.ranking = ranking,
        self.website = website,
        self.url = url,
        self.color = color,

        self.beer = beer,
        self.brunch = brunch,
        self.cocktail = cocktail,
        self.comedy = comedy,
        self.dart = dart,
        self.dj = dj,
        self.entertain = entertain,
        self.favourite = favourite,
        self.garden = garden,
        self.history = history,
        self.hours = hours,
        self.karaoke = karaoke,
        self.late = late,
        self.music = music,
        self.nofeature = nofeature,
        self.outdoor = outdoor,
        self.pool = pool,
        self.private = private,
        self.quiz = quiz,
        self.restaurant = restaurant,
        self.roast = roast,
        self.scenic = scenic,
        self.sport = sport,
        self.timeout = timeout,
        self.wine = wine,

        self.monday = monday,
        self.tuesday = tuesday,
        self.wednesday = wednesday,
        self.thursday = thursday,
        self.friday = friday,
        self.saturday = saturday,
        self.sunday = sunday,

        self.station_name = station_name,
        self.direction_name = direction_name