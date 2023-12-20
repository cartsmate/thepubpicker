from app import app
from flask import render_template, request, redirect, url_for
from app.static.pythonscripts.csv import Csv
from app.models.review.review import Review
from app.models.diary.diary import Diary
from app.static.pythonscripts.csv_single import CsvSingle
from app.static.pythonscripts.dataframes import Dataframes
from app.static.pythonscripts.controls_list import ControlsList
from app.static.pythonscripts.objects import Objects
from app.static.pythonscripts.edit_detail import EditDetail
from app.static.pythonscripts.files_detail import FilesDetail
from app.static.pythonscripts.files_review import FilesReview
from app.static.pythonscripts.files_diary import FilesDiary
from config import Configurations


@app.route("/submit/", methods=['POST'])
def submit():
    print('START submit')
    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations().get_config2()

    # # # GET MODEL DISPLAY FORMATS
    model_formats = ControlsList().go_get_control_list()

    # # # GET MODEL DISPLAY NAMES
    alias = Objects().go_get_alias()

    # # # GET REQUESTED PUB
    pub_id = request.args.get('id')
    print('id from url: ' + pub_id)
    # df_pub = CsvSingle().go_get_1_pub(pub_id)

    df_details_current = Csv().go_get_details()
    rslt_df = df_details_current[df_details_current['pub_identity'] == pub_id]
    newdf1 = rslt_df.transpose()
    print('CURRENT')
    print(newdf1)


    df_reviews_current = Csv().go_get_reviews()
    df_diarys_current = Csv().go_get_diarys()

    newdf1 = df_details_current.transpose()
    # print(newdf1)
    # df_detail_current = CsvSingle().go_get_1_detail(pub_id)

    config2 = Configurations().get_config2()
    directory_path = config2['directory_path']

    df_pub_submit = df_details_current.loc[df_details_current['pub_identity'] == pub_id]

    # df_pub_review = EntitiesSingle().get_pub_review(pub_id)
    if df_pub_submit.empty:
        # IF PUB IDENTITY NOT FOUND IN FILE
        print('# add new pub - due to ADD')
        df_new_detail = FilesDetail().form_detail()
        newdf1 = df_new_detail.transpose()
        # print(newdf1)
        df_updated_details = FilesDetail().add_detail_df(df_details_current, df_new_detail)
        newdf1 = df_updated_details.transpose()
        # print(newdf1)

        df_new_review = FilesReview().form_review()
        # print(df_new_review)
        df_updated_reviews = FilesReview().add_review_df(df_reviews_current, df_new_review)
        # print(df_updated_reviews)

        df_new_diary = FilesDiary().form_diary()
        # print(df_new_diary)
        df_updated_diarys = FilesDiary().add_diary_df(df_diarys_current, df_new_diary)
        # print(df_updated_diarys)

    else:

        # IF PUB IDENTITY IS IN FILE
        print('# update current pub - due to EDIT')
        df_updated_details = FilesDetail().update_detail_df(df_details_current, pub_id)
        rslt_df = df_updated_details[df_updated_details['pub_identity'] == pub_id]
        newdf1 = rslt_df.transpose()
        print('POST UPDATE')
        print(newdf1)
        # df_updated_details = EditDetail().update_edit_detail(df_details_current, pub_id)
        df_updated_reviews = FilesReview().update_review_df(df_reviews_current, pub_id)

        df_updated_diarys = FilesDiary().update_diary_df(df_diarys_current, pub_id)
    # df_pubs_updated = FormInput().get_pub(df_pubs, pub_id)

    df_updated_details = FilesDetail().update_detail_csv(df_updated_details)
    # df_updated_details.to_csv(directory_path + '/files/details.csv', index=False, sep=',', encoding='utf-8')
    df_updated_reviews = FilesReview().update_review_csv(df_updated_reviews)
    # df_updated_reviews.to_csv(directory_path + '/files/reviews.csv', index=False, sep=',', encoding='utf-8')
    df_updated_diarys = FilesDiary().update_diary_csv(df_updated_diarys)

    print('details csv file updated')

    df_updated_detail = CsvSingle().go_get_1_detail(pub_id)
    pub_json = Dataframes().df_to_dict(df_updated_detail)

    # # # FOR TESTING PURPOSES ONLY
    newdf = df_updated_detail.transpose()
    print(newdf)
    print('END submit')
    # return redirect(url_for('home', pub_id=pub_id), code=307)
    return redirect(url_for('pub', id=pub_id), code=307)

    # , pub=pub_json)
                    # env_vars=env_vars,
                    # model_formats=model_formats,
                    # alias=alias,
                    # review=Review(),
                    # diary=Diary())

    # return render_template('03_pub.html',
    #                        pub=pub_json,
    #                        env_vars=env_vars,
    #                        model_formats=model_formats,
    #                        alias=alias,
    #                        review=Review(),
    #                        diary=Diary())
