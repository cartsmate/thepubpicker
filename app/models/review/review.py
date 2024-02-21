from app.models.review.beer import Beer
from app.models.review.brunch import Brunch
from app.models.review.cocktail import Cocktail
from app.models.review.comedy import Comedy
from app.models.review.dart import Dart
from app.models.review.dj import Dj
from app.models.review.garden import Garden
from app.models.review.entertain import Entertain
from app.models.review.favourite import Favourite
from app.models.review.history import History
from app.models.review.karaoke import Karaoke
from app.models.review.late import Late
from app.models.review.music import Music
from app.models.review.outdoor import Outdoor
from app.models.review.pool import Pool
from app.models.review.private import Private
from app.models.review.quiz import Quiz
from app.models.review.review_deletion import ReviewDeletion
from app.models.review.roast import Roast
from app.models.review.restaurant import Restaurant
from app.models.review.scenic import Scenic
from app.models.review.sport import Sport
from app.models.review.timeout import Timeout
from app.models.review.wine import Wine
from app.models.review.review_identity import ReviewIdentity
from app.models.detail.pub_identity import PubIdentity
from app.models.review.nofeature import NoFeature


class Review:

    filename = 'review'

    def __init__(self, review_deletion=ReviewDeletion(), scenic=Scenic(), sport=Sport(), garden=Garden(), music=Music(),
                 roast=Roast(), brunch=Brunch(), late=Late(), quiz=Quiz(), pool=Pool(), dart=Dart(),
                 entertain=Entertain(), history=History(), favourite=Favourite(), pub_identity=PubIdentity(),
                 review_identity=ReviewIdentity(), cocktail=Cocktail(), beer=Beer(), wine=Wine(), outdoor=Outdoor(),
                 restaurant=Restaurant(), nofeature=NoFeature(), private=Private(), dj=Dj(), comedy=Comedy(),
                 karaoke=Karaoke(), timeout=Timeout()):
        self.review_identity = review_identity
        self.review_deletion = review_deletion
        self.pub_identity = pub_identity
        self.beer = beer
        self.brunch = brunch
        self.cocktail = cocktail
        self.comedy = comedy
        self.dart = dart
        self.dj = dj
        self.entertain = entertain
        self.favourite = favourite
        self.garden = garden
        self.history = history
        self.karaoke = karaoke
        self.late = late
        self.music = music
        self.outdoor = outdoor
        self.pool = pool
        self.private = private
        self.quiz = quiz
        self.roast = roast
        self.restaurant = restaurant
        self.scenic = scenic
        self.sport = sport
        self.wine = wine
        self.timeout = timeout
        self.nofeature = nofeature
