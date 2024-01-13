import os
import uuid
import pandas as pd
from config import Configurations
from app.static.pythonscripts.csv import Csv
from app.models.review.review import Review
from app.models.review.brunch import Brunch
from app.models.review.dart import Dart
from app.models.review.garden import Garden
from app.models.review.favourite import Favourite
from app.models.review.history import History
from app.models.review.late import Late
from app.models.review.music import Music
from app.models.review.entertain import Entertain
from app.models.review.pool import Pool
from app.models.review.quiz import Quiz
from app.models.review.review_deletion import ReviewDeletion
from app.models.review.roast import Roast
from app.models.review.sport import Sport
from app.models.review.nofeature import NoFeature
from app.models.review.review_identity import ReviewIdentity
from app.models.detail.pub_identity import PubIdentity

from app.models.station.station_identity import StationIdentity
from app.models.photo.photo_identity import PhotoIdentity
from app.static.pythonscripts.uuid_generater import UuidGenerator

config = Configurations().get_config()
config2 = Configurations().get_config2()
directory_path = config2['directory_path']


class NewReview:

    def go_get_new_review(self, id, pub_id):
        new_review = Review(review_identity=id, pub_identity=pub_id, review_deletion=ReviewDeletion().value,
                            sport=Sport().value, garden=Garden().value, music=Music().value, roast=Roast().value,
                            brunch=Brunch().value, late=Late().value, quiz=Quiz().value, pool=Pool().value,
                            dart=Dart().value, entertain=Entertain().value, history=History().value,
                            favourite=Favourite().value, nofeature=NoFeature().value)
        df_new_review = pd.DataFrame([new_review.__dict__])
        return df_new_review
