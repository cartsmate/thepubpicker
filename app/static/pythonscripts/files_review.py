import os
import uuid
import pandas as pd
from flask import request
from config import Configurations
from app.static.pythonscripts.csv import Csv
from app.static.pythonscripts.s3 import S3
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
from app.static.pythonscripts.controls_list import ControlsList
from app.models.photo.photo_identity import PhotoIdentity
from app.static.pythonscripts.uuid_generater import UuidGenerator

config = Configurations().get_config()
config2 = Configurations().get_config2()
directory_path = config2['directory_path']
model_formats = ControlsList().go_get_control_list()
env_vars = Configurations().get_config2()


class FilesReview:

    def new_review(self, rev_id, pub_id):
        new_review = Review(review_identity=rev_id, pub_identity=pub_id, review_deletion=ReviewDeletion().value,
                            sport=Sport().value, garden=Garden().value, music=Music().value, roast=Roast().value,
                            brunch=Brunch().value, late=Late().value, quiz=Quiz().value, pool=Pool().value,
                            dart=Dart().value, entertain=Entertain().value, history=History().value,
                            favourite=Favourite().value, nofeature=NoFeature().value)
        df_new_review = pd.DataFrame([new_review.__dict__])
        return df_new_review

    def form_review(self):
        print('get review form')
        new_review = Review(review_identity=UuidGenerator().get_new_uuid(),
                            review_deletion=request.form['review_deletion' + "_check"],
                            pub_identity=request.form['pub_identity'],
                            brunch='1' if request.form.get('brunch' + "_check") == 'on' else '0',
                            dart='1' if request.form.get('dart' + "_check") == 'on' else '0',
                            entertain='1' if request.form.get('entertain' + "_check") == 'on' else '0',
                            favourite='1' if request.form.get('favourite' + "_check") == 'on' else '0',
                            garden='1' if request.form.get('garden' + "_check") == 'on' else '0',
                            history='1' if request.form.get('history' + "_check") == 'on' else '0',
                            late='1' if request.form.get('late' + "_check") == 'on' else '0',
                            music='1' if request.form.get('music' + "_check") == 'on' else '0',
                            pool='1' if request.form.get('pool' + "_check") == 'on' else '0',
                            quiz='1' if request.form.get('quiz' + "_check") == 'on' else '0',
                            roast='1' if request.form.get('roast' + "_check") == 'on' else '0',
                            sport='1' if request.form.get('sport' + "_check") == 'on' else '0',
                            nofeature='1' if request.form.get('nofeature' + "_check") == 'on' else '0')
        df_new_review = pd.DataFrame([new_review.__dict__])
        return df_new_review

    def update_review_df(self, df_reviews, pub_id):
        print('UPDATE edit review')
        for review in list(Review().__dict__.keys()):
            print(review)
            if review != 'pub_identity':
                if review in model_formats['icon_list']:
                    print('if')
                    print(review + ' : ' + str(request.form.get(review + "_check")))
                    df_reviews.loc[df_reviews['pub_identity'] == pub_id, review] = '1' \
                        if (request.form.get(review + "_check") == 'on' or request.form.get(review + "_check") == 'true')\
                        else '0'
                else:
                    print('else')
                    print(review + ' : ' + str(request.form.get(review + "_check")))
                    df_reviews.loc[df_reviews['pub_identity'] == pub_id, review] = request.form[review + "_check"]
        print('df_reviews')
        df2 = df_reviews.loc[df_reviews['pub_identity'] == pub_id]
        print(df2.transpose())
        return df_reviews

    def add_review_df(self, df_reviews, df_new):
        print('ADD new detail')
        df_appended = pd.concat([df_reviews, df_new], ignore_index=True)
        # df_full = pd.merge(df_details, df_new, on='pub_identity')
        return df_appended

    def update_review_csv(self, df_updated_reviews, type):
        print('updating review csv')
        # print(df_updated_reviews)
        df_reviews = Csv().go_get_reviews()
        print('pre_count: ' + str(df_reviews.shape[0]))
        print('post_count: ' + str(df_updated_reviews.shape[0]))

        if (df_updated_reviews.shape[0] == df_reviews.shape[0] + 1) and (type == 'add'):
            df_updated_reviews.to_csv(directory_path + '/files/reviews.csv', index=False, sep=',', encoding='utf-8')
            if env_vars['source'] == 'csv':
                s3_resp = S3().s3_write(df_updated_reviews, 'reviews.csv')
                print(s3_resp)
            print('Review csv/s3 added to')
        else:
            print('Review csv/s3 did not add to')

        if (df_updated_reviews.shape[0] == df_reviews.shape[0]) and (type == 'edit'):
            print('INSIDE REVIEW AND EDIT')
            idid = 'd010138e-02c3-492d-ada2-df1478095d2d'
            df2 = df_updated_reviews.loc[df_updated_reviews['pub_identity'] == idid]
            print(df2.transpose())

            df_updated_reviews.to_csv(directory_path + '/files/reviews.csv', index=False, sep=',', encoding='utf-8')
            if env_vars['source'] == 'csv':
                s3_resp = S3().s3_write(df_updated_reviews, 'reviews.csv')
                print(s3_resp)
            print('Review csv/s3 updated')
        else:
            print('Review csv/s3 did not update')

        return df_updated_reviews
