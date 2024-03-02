from .pp_00_test import test
from .pp_02_home import home
from .pp_03_pub import pub
from .pp_04_add import add
from .pp_05_edit import edit
from .pp_06_submit import submit
from app import app
from flask import render_template, request


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500


@app.errorhandler(403)
def page_forbidden(e):
    return render_template('403.html'), 500
