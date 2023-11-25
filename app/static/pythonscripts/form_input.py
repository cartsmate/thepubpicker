from flask import request
from config import Configurations
from app.models.detail.pub import Pub
from app.models.review.review import Review
from app.models.diary.week import Week
from app.static.pythonscripts.controls_list import ControlsList
config = Configurations().get_config()


class FormInput:

    total_list_obj = ControlsList().go_get_control_list()

    def get_pub(self, df_pubs, pub_id):
        for pub in list(Pub().__dict__.keys()):
            print(pub + ' : ' + request.form[pub])
            df_pubs.loc[df_pubs['pub_identity'] == pub_id, pub] = request.form[pub]
        return df_pubs

    def get_review(self, df_reviews, pub_id):
        # print(df_reviews.loc[df_reviews['quiz'] == pub_id])

        for review in list(Review().__dict__.keys()):
            if review in self.total_list_obj['icon_list']:
                print('in icon list')
                print(review + ' : ' + str(request.form.get(review)))
                df_reviews.loc[df_reviews['pub_identity'] == pub_id, review] = 'true' \
                    if (request.form.get(review) == 'true' or request.form.get(review) == 'on') \
                    else 'false'
            else:
                print('NOT in icon list')
                print(review + ' : ' + str(request.form.get(review)))
                df_reviews.loc[df_reviews['pub_identity'] == pub_id, review] = request.form[review]
        print('df_reviews')
        print(df_reviews.loc[df_reviews['pub_identity'] == pub_id])
        return df_reviews

    def get_diary(self, df_diary, pub_id):
        for diary in list(Week().__dict__.keys()):
            df_diary.loc[df_diary['pub_identity'] == pub_id, diary] = request.form[diary]
            print(diary + ' : ' + request.form[diary])
        return df_diary
