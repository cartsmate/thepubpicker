import os
import json
import pandas as pd
from flask import render_template, request, redirect, url_for, g, session, flash
from app import app
from config import Configurations
from app.static.pythonscripts.form_input import FormInput
from app.static.pythonscripts.form_new import FormNew
from app.static.pythonscripts.dataframes import Dataframes
from app.static.pythonscripts.csv import Csv
from app.static.pythonscripts.s3 import S3
from app.static.pythonscripts.entities_multi import EntitiesMulti
from app.static.pythonscripts.entities_single import EntitiesSingle
from app.static.pythonscripts.controls_list import ControlsList
from app.models.pub.pub import Pub
from app.models.review.review import Review
from app.models.diary.week import Week
from app.models.station.station import Station
from app.models.photo.photo import Photo
from app.models.area.area import Area
from werkzeug.utils import secure_filename

config = Configurations().get_config()
config2 = Configurations().get_config2()

ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/pub/", methods=['GET', 'POST'])
def pub_read():

    print('pub_read')

    config2 = Configurations().get_config2()

    total_list_obj = ControlsList().go_get_control_list()
    pub_id = request.args.get('id')
    station = request.args.get('station')
    day = request.args.get('day')

    inst_pub = Pub()
    inst_review = Review()
    inst_pub.__dict__.update(inst_review.__dict__)
    inst_station = Station()
    inst_pub.__dict__.update(inst_station.__dict__)
    inst_pub_review = inst_pub
    alias = {}
    for k, v in inst_pub_review.__dict__.items():
        alias[k] = v.alias

    directory_path = config2['directory_path']

    total_list_obj = ControlsList().go_get_control_list()

    df_stations = Csv().go_get_stations()
    stations_json = Dataframes().df_to_dict(df_stations)

    diary_headers = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

    if request.method == 'GET':
        print('pub_read: GET')
        df_pub_review = EntitiesSingle().get_pub_review(pub_id)
        # df_pub_review['colour'] = total_list_obj['selected_pub_colour']
        pub_review_json = Dataframes().df_to_dict(df_pub_review)

        selected_station = df_pub_review['station_identity'].values[0]
        station = selected_station

        pub_review_list = df_pub_review['pub_identity'].tolist()
        df_pubs_reviews = EntitiesMulti().get_pubs_reviews()
        # df_pubs_reviews['colour'] = total_list_obj['other_pub_colour']
        df_pubs_reviews2 = df_pubs_reviews[~df_pubs_reviews['pub_identity'].isin([pub_review_list])]
        pubs_reviews_json = Dataframes().df_to_dict(df_pubs_reviews2)

        review_lat = df_pub_review['pub_latitude'].values[0]
        review_long = df_pub_review['pub_longitude'].values[0]

        directory_path = config2['directory_path']
        df_diary = pd.read_csv(directory_path + '/files/diary.csv')
        df_diary_selected = df_diary.loc[df_diary['pub_identity'] == pub_id]
        df_diary_selected = df_diary_selected.fillna('')
        diary_json = Dataframes().df_to_dict(df_diary_selected)

        return render_template("pub.html", form_type='read', google_key=config2['google_key'],
                               total_list_obj=total_list_obj,
                               pubs_selection=pub_review_json, config=config, config2=config2,
                               map_lat=review_lat, map_lng=review_long,
                               alias=alias, diary_headers=diary_headers,
                               station=station, diary_body=diary_json,
                               pubs_reviews=pubs_reviews_json, stations=stations_json,
                               # areas=areas_json, fields_list=fields_list,
                               # star_list=star_list, dropdown_list=dropdown_list, input_list=input_list,
                               # check_list=check_list, slider_list=slider_list, date_list=date_list,
                               # form_visible_list=form_visible_list, table_visible_list=table_visible_list,
                               # required_list=required_list, day=day, show_other_pubs=True,
                               # alias_list=alias_list, icon_list=icon_list, ignore_list=ignore_list,
                               review_obj=Review()
                               )

    if request.method == 'POST':
        print('pub_read: POST')
        df_pubs = pd.read_csv(directory_path + '/files/pubs.csv',
                              dtype={'pub_identity': str, 'area_identity': str, 'station_identity': str,
                                     'pub_deletion': str, 'pub_name': str, 'address': str, 'category': str,
                                     'colour': str, 'place': str, 'pub_latitude': float, 'pub_longitude': float,
                                     'rank': float, 'detail': str})
        df_pub_review = df_pubs.loc[df_pubs['pub_identity'] == pub_id]

        # df_pub_review = EntitiesSingle().get_pub_review(pub_id)
        if df_pub_review.empty:
            print('new pub')
            df_pubs_reviews = EntitiesMulti().get_pubs_reviews()
            if df_pubs_reviews.loc[df_pubs_reviews['place'] == str(request.form['place'])].empty:
                print('new / not dupe pub')

                df_new_pub = FormNew().get_pub(pub_id)
                print(df_new_pub)
                print('got new pub')
                # df_pubs = S3().get_s3_pubs()
                df_pubs = Csv().get_pubs()
                df_pub_appended = Dataframes().append_df(df_pubs, df_new_pub)
                error = ""
                response = ""
                if df_pub_appended.shape[1] == len(Pub().__dict__.items()):
                    Dataframes().to_csv(df_pub_appended, 'pub')
                    # s3_resp = S3().s3_write(df_pub_appended, 'pubs.csv')
                    # response = str(s3_resp)
                else:
                    print('Error in processing')
                    # tkinter.messagebox.showwarning("Error in processing", "Failed to save new venue")
                    error = "Failed to save new venue"
                    # flash(error)
                    response = str('pub error')

                df_new_review = FormNew().get_review(pub_id)
                # df_reviews = S3().get_s3_reviews()
                # df_reviews = Csv().get_reviews()
                df_reviews = Csv().go_get_reviews()
                df_review_appended = Dataframes().append_df(df_reviews, df_new_review)
                if df_review_appended.shape[1] == len(Review().__dict__.items()):
                    Dataframes().to_csv(df_review_appended, 'review')
                    # s3_resp = S3().s3_write(df_review_appended, 'reviews.csv')
                    # flash(s3_resp)
                    # response += " | " + str(s3_resp)
                else:
                    print('Error in processing')
                    # top = tkinter.Tk()
                    # top.geometry("150x150")
                    # tkinter.messagebox.showwarning("Error in processing", "Failed to save review")
                    # top.mainloop()
                    # error = "Failed to save review"
                    # flash(error)
                    response += " | " + str('review error')

                df_new_diary = FormNew().get_diary(pub_id)
                directory_path = config2['directory_path']
                df_diary = pd.read_csv(directory_path + '/files/diary.csv')
                df_diary_appended = Dataframes().append_df(df_diary, df_new_diary)
                if df_diary_appended.shape[1] == len(Week().__dict__.items()):
                    df_diary_appended.to_csv(directory_path + '/files/diary.csv', sep=',', encoding='utf-8', index=False)
                else:
                    print('Error in processing')
                station = df_new_pub['station_identity'].values[0]

                df_new_merged = Dataframes().merge_dfs(df_new_pub, df_new_review)
                df_area_added = Dataframes().add_area(df_new_merged)
                df_station_added = Dataframes().add_station(df_area_added)
                df_station_added['colour'] = '#0275d8'
                pd.set_option('display.max_columns', None)
                pub_review_json = Dataframes().df_to_dict(df_station_added)

                diary_json = Dataframes().df_to_dict(df_diary)
                review_lat = df_station_added['pub_latitude'].values[0]
                review_long = df_station_added['pub_longitude'].values[0]
                flash(response)
                pub_review_list = df_pub_review['pub_identity'].tolist()

                df_pubs_reviews = EntitiesMulti().get_pubs_reviews()
                df_pubs_reviews['colour'] = '#d9534f'
                df_pubs_reviews2 = df_pubs_reviews[~df_pubs_reviews['pub_identity'].isin([pub_review_list])]
                pubs_reviews_json = Dataframes().df_to_dict(df_pubs_reviews2)

                return render_template('pub_read.html', response=response, diary_headers=diary_headers,
                                       error=error, form_type='read', google_key=config2['google_key'],
                                       pubs_reviews=pubs_reviews_json, stations=stations_json,
                                       pubs_selection=pub_review_json, config=config, config2=config2,
                                       alias=alias, station=station, diary_body=diary_json,
                                       # areas=areas_json, fields_list=fields_list,
                                       # map_lat=review_lat, map_lng=review_long, show_other_pubs=True,
                                       # star_list=star_list, dropdown_list=dropdown_list, input_list=input_list,
                                       # check_list=check_list, slider_list=slider_list, date_list=date_list,
                                       # form_visible_list=form_visible_list, table_visible_list=table_visible_list,
                                       # required_list=required_list, ignore_list=ignore_list,
                                       # alias_list=alias_list, icon_list=icon_list, day=day,
                                       review_obj=Review()
                                       )
            else:
                print('duplicate pub')
                df_pubs_reviews = EntitiesMulti().get_pubs_reviews()
                dupe_id = df_pubs_reviews.loc[df_pubs_reviews['place'] == str(request.form['place'])]['pub_identity']
                return redirect(url_for('pub_add'))
                # return render_template("pop_up_dupe.html",
                #                        pub_review=Functions().df_to_dict(
                #                            df_pubs_reviews.loc[df_pubs_reviews['place'] == str(request.form['place'])]),
                #                        dupe_id=dupe_id)
        else:
            print('edit pub')
            # PUB
            df_pubs = pd.read_csv(directory_path + '/files/pubs.csv',
                                  dtype={'pub_identity': str, 'area_identity': str, 'station_identity': str,
                                         'pub_deletion': str, 'pub_name': str, 'address': str, 'category': str,
                                         'colour': str, 'place': str, 'pub_latitude': str, 'pub_longitude': str,
                                         'rank': str, 'detail': str})
            df_pubs_updated = FormInput().get_pub(df_pubs, pub_id)
            df_pubs_updated.to_csv(directory_path + '/files/pubs.csv', index=False, sep=',', encoding='utf-8')

            # REVIEW
            df_reviews = pd.read_csv(directory_path + '/files/reviews.csv',
                                     dtype={'review_identity': str, 'review_deletion': str, 'pub_identity': str,
                                            'brunch': str, 'dart': str, 'entertain': str, 'favourite': str,
                                            'garden': str, 'history': str, 'late': str, 'music': str, 'pool': str,
                                            'quiz': str, 'roast': str, 'sport': str})
            df_update_r = df_reviews.loc[df_reviews['pub_identity'] == pub_id]
            if df_update_r.empty:
                print('new review record')
                df_new_review = FormNew().get_review(pub_id)
                # print(df_new_review['favourite'])
                df_review_updated = Dataframes().append_df(df_reviews, df_new_review)
            else:
                print('updated review record')
                df_review_updated = FormInput().get_review(df_reviews, pub_id)
                # print(df_review_updated.loc[df_review_updated['pub_identity'] == pub_id]['favourite'])
            df_review_updated.to_csv(directory_path + '/files/reviews.csv', index=False, sep=',', encoding='utf-8')

            # DIARY
            df_diary = pd.read_csv(directory_path + '/files/diary.csv')
            df_update_d = df_diary.loc[df_diary['pub_identity'] == pub_id]
            if df_update_d.empty:
                df_new_diary = FormNew().get_diary(pub_id)
                df_diary_updated = Dataframes().append_df(df_diary, df_new_diary)
            else:
                df_diary_updated = FormInput().get_diary(df_diary, pub_id)
            df_diary_updated.to_csv(directory_path + '/files/diary.csv', index=False, sep=',', encoding='utf-8')

            #
            # df_diary_selected = df_diary_updated.loc[df_diary_updated['pub_identity'] == pub_id]
            # df_diary_selected = df_diary_selected.fillna('')
            # diary_json = Dataframes().df_to_dict(df_diary_selected)
            #
            # selected_station = df_pub_review['station_identity'].values[0]
            # station = selected_station
            #
            # # df_pub_review = EntitiesSingle().get_pub_review(pub_id)
            # df_pub_review = EntitiesSingle().go_get_pub_review_station()
            # df_pub_review['colour'] = '#0275d8'
            # pub_review_json = Dataframes().df_to_dict(df_pub_review)
            #
            # pub_review_list = df_pub_review['pub_identity'].tolist()
            #
            # df_pubs_reviews = EntitiesMulti().get_pubs_reviews()
            # df_pubs_reviews['colour'] = '#d9534f'
            # df_pubs_reviews2 = df_pubs_reviews[~df_pubs_reviews['pub_identity'].isin([pub_review_list])]
            # pubs_reviews_json = Dataframes().df_to_dict(df_pubs_reviews2)

            # review_lat = df_pub_review['pub_latitude'].values[0]
            # review_long = df_pub_review['pub_longitude'].values[0]
            # flash(word_response)

            return redirect(url_for('home', pub_id=pub_id), code=307)
            # return render_template('pub_read.html',
            #                        # response=response,
            #                        form_type='read', google_key=config2['google_key'],
            #                        pubs_selection=pub_review_json, diary_headers=diary_headers,
            #                        pubs_reviews=pubs_reviews_json, diary_body=diary_json,
            #                        config=config, config2=config2, day=day,  show_other_pubs=True,
            #                        stations=stations_json, areas=areas_json,
            #                        fields_list=fields_list, alias=alias, station=station,
            #                        map_lat=review_lat, map_lng=review_long,
            #                        star_list=star_list, dropdown_list=dropdown_list, input_list=input_list,
            #                        check_list=check_list, slider_list=slider_list, date_list=date_list,
            #                        form_visible_list=form_visible_list, table_visible_list=table_visible_list,
            #                        required_list=required_list,
            #                        alias_list=alias_list, icon_list=icon_list,
            #                        review_obj=Review2(), ignore_list=ignore_list)
