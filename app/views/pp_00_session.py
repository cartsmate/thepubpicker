from app import app
from flask import redirect, url_for, session

app.config['SECRET_KEY'] = '999-zzz-888-yyy'  # a random string set to use sessions

@app.route('login_success')
def login_success():

    session['KEY_NAME'] = 'key_value'  # stores a key in the webbrowser
    return redirect(url_for('home.html'))

