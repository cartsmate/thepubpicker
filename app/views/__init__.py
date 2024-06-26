from .z_test import test
from .pp_02_home import home
from .pp_03_pub import pub
from .pp_04_add import add
from .pp_05_edit import edit
from .pp_06_submit import submit
from app import app
from flask import render_template, request
from flask_assets import Bundle, Environment
from config import Configurations
import os

# directory_path = Configurations().get_config2()['directory_path']
app.config['SECRET_KEY'] = 'random_string_value'


@app.errorhandler(404)
def page_not_found(e):
    return render_template('00_errorhandling_404.html'), 404


@app.errorhandler(500)
def internal_server_error(e):
    return render_template('00_errorhandling_500.html'), 500


@app.errorhandler(403)
def page_forbidden(e):
    return render_template('00_errorhandling_403.html'), 500
