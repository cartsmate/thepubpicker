import os
import uuid
import pandas as pd
from flask import request
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
from app.models.review.review_identity import ReviewIdentity
from app.models.detail.pub_identity import PubIdentity
from app.static.pythonscripts.controls_list import ControlsList
from app.models.photo.photo_identity import PhotoIdentity
from app.static.pythonscripts.uuid_generater import UuidGenerator

config = Configurations().get_config()
config2 = Configurations().get_config2()
directory_path = config2['directory_path']
model_formats = ControlsList().go_get_control_list()

class FilesReview:

    def new_review(self, id, pub_id):
        new_review = Review(review_identity=id, pub_identity=pub_id, review_deletion=ReviewDeletion().value,
                            sport=Sport().value, garden=Garden().value, music=Music().value, roast=Roast().value,
                            brunch=Brunch().value, late=Late().value, quiz=Quiz().value, pool=Pool().value,
                            dart=Dart().value, entertain=Entertain().value, history=History().value,
                            favourite=Favourite().value)
        df_new_review = pd.DataFrame([new_review.__dict__])
        return df_new_review

    def form_review(self):
        print('get review form')
        new_review = Review(review_identity=request.form['review_identity'],
                            review_deletion=request.form['review_deletion'], pub_identity=request.form['pub_identity'],
                            brunch='true' if request.form.get('brunch') == 'on' else 'false',
                            dart='true' if request.form.get('dart') == 'on' else 'false',
                            entertain='true' if request.form.get('entertain') == 'on' else 'false',
                            favourite='true' if request.form.get('favourite') == 'on' else 'false',
                            garden='true' if request.form.get('garden') == 'on' else 'false',
                            history='true' if request.form.get('history') == 'on' else 'false',
                            late='true' if request.form.get('late') == 'on' else 'false',
                            music='true' if request.form.get('music') == 'on' else 'false',
                            pool='true' if request.form.get('pool') == 'on' else 'false',
                            quiz='true' if request.form.get('quiz') == 'on' else 'false',
                            roast='true' if request.form.get('roast') == 'on' else 'false',
                            sport='true' if request.form.get('sport') == 'on' else 'false')
        df_new_review = pd.DataFrame([new_review.__dict__])
        return df_new_review

    def update_review_df(self, df_reviews, pub_id):
        print('UPDATE edit review')
        for review in list(Review().__dict__.keys()):
            if review in model_formats['icon_list']:
                # print(review + ' : ' + str(request.form.get(review)))
                df_reviews.loc[df_reviews['pub_identity'] == pub_id, review] = 'true' \
                    if request.form.get(review) == 'on' \
                    else 'false'
            else:
                # print(review + ' : ' + str(request.form.get(review)))
                df_reviews.loc[df_reviews['pub_identity'] == pub_id, review] = request.form[review]
        print('details model updated with form data')
        return df_reviews

    def add_review_df(self, df_reviews, df_new):
        print('ADD new detail')
        df_appended = pd.concat([df_reviews, df_new], ignore_index=True)
        # df_full = pd.merge(df_details, df_new, on='pub_identity')
        return df_appended

    def update_review_csv(self, df_updated_reviews):
        print('updating review csv')
        # print(df_updated_reviews)
        df_updated_reviews.to_csv(directory_path + '/files/reviews.csv', index=False, sep=',', encoding='utf-8')
        print('review csv updated')
        return df_updated_reviews
