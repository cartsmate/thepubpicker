from app import app
from flask import render_template, request, redirect, url_for
from app.static.pythonscripts.csv import Csv
# from app.models.review.review import Review
# from app.models.diary.diary import Diary
# from app.static.pythonscripts.csv_single import CsvSingle
# from app.static.pythonscripts.dataframes import Dataframes
# from app.static.pythonscripts.controls_list import ControlsList
# from app.static.pythonscripts.objects import Objects
# from app.static.pythonscripts.edit_detail import EditDetail
from app.static.pythonscripts.files_detail import FilesDetail
from app.static.pythonscripts.files_review import FilesReview
from app.static.pythonscripts.files_diary import FilesDiary
from config import Configurations


@app.route("/submit/", methods=['POST'])
def submit():
    print('start SUBMIT')
    # # # GET ENVIRONMENTAL VARIABLES
    # env_vars = Configurations().get_config2()

    # # # GET MODEL DISPLAY FORMATS
    # model_formats = ControlsList().go_get_control_list()

    # # # GET MODEL DISPLAY NAMES
    # alias = Objects().go_get_alias()

    # # # GET REQUESTED PUB
    pub_id = request.args.get('id')
    filters = request.args.get('filters')
    print('id from url: ' + pub_id)
    # df_pub = CsvSingle().go_get_1_pub(pub_id)

    df_details_current = FilesDetail().go_get_details()
    df_detail_current = df_details_current[df_details_current['pub_identity'] == pub_id]
    # print('current DETAIL')
    # print(df_detail_current.transpose())

    df_reviews_current = FilesReview().go_get_reviews_csv()
    df_review_current = df_reviews_current[df_reviews_current['pub_identity'] == pub_id]
    # print('current REVIEW')
    # print(df_review_current.transpose())

    df_diarys_current = FilesDiary().go_get_diarys()
    df_diary_current = df_diarys_current[df_diarys_current['pub_identity'] == pub_id]
    # print('current DIARY')
    # print(df_diary_current.transpose())

    # df_detail_current = CsvSingle().go_get_1_detail(pub_id)

    # df_pub_submit = df_details_current.loc[df_details_current['pub_identity'] == pub_id]

    # df_pub_review = EntitiesSingle().get_pub_review(pub_id)
    if df_detail_current.empty:
        print('pub_id from url: ' + pub_id)
        # IF PUB IDENTITY NOT FOUND IN FILE
        print('# add new pub - due to ADD')
        df_new_detail = FilesDetail().form_detail()
        print('pub_id from newDetails: ' + df_new_detail['pub_identity'])
        newdf1 = df_new_detail.transpose()
        # print(newdf1)
        df_updated_details = FilesDetail().add_detail_df(df_details_current, df_new_detail)
        newdf1 = df_updated_details.transpose()
        # print(newdf1)

        df_new_review = FilesReview().form_review()
        print('df_new_review')
        newdf1 = df_new_review.transpose()
        print(newdf1)
        df_updated_reviews = FilesReview().add_review_df(df_reviews_current, df_new_review)
        # print(df_updated_reviews)

        df_new_diary = FilesDiary().form_diary()
        # print(df_new_diary)
        df_updated_diarys = FilesDiary().add_diary_df(df_diarys_current, df_new_diary)
        # print(df_updated_diarys)

        df_updated_details = FilesDetail().update_detail_csv(df_updated_details, 'add')
        df_updated_reviews = FilesReview().update_review_csv(df_updated_reviews, 'add')
        df_updated_diarys = FilesDiary().update_diary_csv(df_updated_diarys, 'add')
    else:

        # IF PUB IDENTITY IS IN FILE
        print('# update current pub - due to EDIT')
        df_updated_details = FilesDetail().update_detail_df(df_details_current, pub_id)
        df_updated_reviews = FilesReview().update_review_df(df_reviews_current, pub_id)
        df_updated_diarys = FilesDiary().update_diary_df(df_diarys_current, pub_id)

        df_updated_details = FilesDetail().update_detail_csv(df_updated_details, 'edit')
        df_updated_reviews = FilesReview().update_review_csv(df_updated_reviews, 'edit')
        df_updated_diarys = FilesDiary().update_diary_csv(df_updated_diarys, 'edit')

    print('details csv file updated')

    # df_updated_detail = CsvSingle().go_get_1_detail(pub_id)
    # pub_json = Dataframes().df_to_dict(df_updated_detail)

    # # # FOR TESTING PURPOSES ONLY
    # newdf = df_updated_detail.transpose()
    # print(newdf)
    print('end SUBMIT')
    # return redirect(url_for('home', pub_id=pub_id), code=307)
    return redirect(url_for('pub', id=pub_id, filters=filters))
    # return render_template('03_pub.html', id=pub_id)

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
