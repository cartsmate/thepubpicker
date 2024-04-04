from app import app
from flask import render_template, request, session

import datetime
import functools
import pandas as pd

from app.static.pythonscripts.files_pub import FilesPub
from app.static.pythonscripts.model_metadata import ModelMetadata
from app.static.pythonscripts.source_data import SourceData
from app.static.pythonscripts.visitor_counter import VisitorCounter

from config import *
from logger.logger import Logger


# # # # # UNNECESSARY DECORATOR - PURELY FOR CODE PRACTICE # # # # #
def debug(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        args_repr = [repr(a) for a in args]
        kwargs_repr = [f"{k}={v!r}" for k, v in kwargs.items()]
        signature = ", ".join(args_repr + kwargs_repr)
        print(f'Calling {func.__name__} with {signature}')
        result = func(*args, **kwargs)
        print(f'Returning {func.__name__!r}')
        # result {result!r}')
        return result
    return wrapper


# # # # # UNNECESSARY DECORATOR - PURELY FOR CODE PRACTICE # # # # #
def my_decorator(statement):
    def print_remarks(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # PRE function
            print(f'pre function decorator: {statement}')
            # RUN function
            result = func(*args, **kwargs)
            # POST function
            print(f'post function decorator: {statement}')
            return result
        return wrapper
    return print_remarks


@app.route("/", methods=['GET'])
@app.route("/home/", methods=['GET'])
@debug
@my_decorator(statement='hello world')
def home():
    # GET CONFIG
    env_vars = Configurations.get_config()

    # SET SESSION KEY ON HOME PAGE
    session['KEY_NAME'] = env_vars['session_key']

    logger = Logger().create_logger()
    t1 = datetime.datetime.now()
    try:
        logger.info(f'{t1} : home page OPEN')
        filters = request.args.get('filters')

        # GET DATA FROM SOURCE (DETERMINED BY CONFIG)
        source_data = SourceData().get_source_data(env_vars)
        pub_ent_json = pd.merge(source_data['df_pub'],
                                source_data['df_daily_event_all'],
                                on='pub_identity', how='left').to_dict(orient='records')

        # # # GET FEATURED PUB PHOTOS # # #
        pub_1_json = (FilesPub().get_pub_1(source_data['df_pub'], source_data['daily_id'])
                      .to_dict(orient='records'))

        # # # GET TIMEOUT LIST # # #
        timeout_json = (source_data['df_pub'].loc[source_data['df_pub']['timeout'] == True]
                        .to_dict(orient='records'))

        # # # GET COUNTER TALLY # # #
        counter6 = VisitorCounter.get_counter(env_vars)

        # # # GET MODEL METADATA # # #
        models_json = ModelMetadata.get_model_metadata()

        # # # LOG DURATION TO GET DATA # # #
        t2 = datetime.datetime.now()
        logger.info(f'{t2} : {(t2 - t1)} : home page LOADED')

        return render_template('02_home_.html',
                               env_vars=env_vars,
                               color_theme='#A1BE95',
                               daily_id=source_data['daily_id'],
                               pub_1=pub_1_json,
                               pub_all=pub_ent_json,
                               review=models_json['review_json'],
                               diary=models_json['diary_json'],
                               pub_obj=models_json['pub_obj_json'],
                               photos_list=source_data['photos_list'],
                               filters=filters,
                               directions_list=source_data['directions_list'],
                               stations_directions_list=source_data['stations_directions_list'],
                               counter=counter6,
                               page='home',
                               timeout_pubs=timeout_json)
    except Exception as e:
        gap = datetime.datetime.now() - t1
        t2 = datetime.datetime.now()
        logger.error(f'{t1} : {gap} : {e}', exc_info=True)
        return render_template('00_errorhandling_500.html')
