import os
from flask import Flask
from flask_assets import Bundle, Environment

app = Flask(__name__)

from app import views

dirname = os.path.dirname(__file__)
print(dirname)
# js_files = []
# for file in os.listdir(directory_path):
#     filename = os.fsdecode(file)
#     if filename.endswith(".js"):
#         js_files.append(filename)
#         continue
#     else:
#         continue
#
# js = Bundle(js_files, output='gen/main.js', filters='jsmin')

js_main = Bundle([f"{dirname}/static/javascript/onload/onload.js",
             f"{dirname}/static/javascript/html/set_color_theme.js",
             f"{dirname}/static/javascript/html/is_touch.js"],
            output='js_main.js',
            filters='jsmin')

js_home_main = Bundle([f"{dirname}/static/javascript/urgent/display_counter.js",
             f"{dirname}/static/javascript/urgent/get_no_of_reviews.js",
             f"{dirname}/static/javascript/urgent/get_unique_list.js",
             f"{dirname}/static/javascript/urgent/setup_filters.js",
             f"{dirname}/static/javascript/urgent/setup_filters_populate.js"],
            output='js_home_main.js',
            filters='jsmin')

js_home_defer = Bundle([f"{dirname}/static/javascript/defer/spinner_set_css_classes.js",
                   f"{dirname}/static/javascript/defer/spinner_set_css_classes_flat.js"],
                  output='js_home_defer.js',
                  filters='jsmin')

# css = Bundle(['/static/css/filter/diary_filter.css',
#               '/static/css/filter/direction_filter.css',
#               '/static/css/filter/events_filter.css'],
#              output='gen/main.css', filters='cssmin')

assets = Environment(app)
assets.url = app.static_url_path
# # # # # assets.config['sass_bin'] = '/usr/local/bin/sass'

assets.register('js_main.js', js_main)
js_main.build()

assets.register('js_home_main.js', js_home_main)
js_home_main.build()

assets.register('js_home_defer.js', js_home_defer)
js_home_defer.build()

# assets.register('main.css', css)