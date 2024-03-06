import os
from flask import Flask
from flask_assets import Bundle, Environment

app = Flask(__name__)

from app import views

dirname = os.path.dirname(__file__)

assets = Environment(app)
assets.url = app.static_url_path

# print(dirname)
# js_redirect_list = []
# for file in os.listdir(f"{dirname}/static/javascript/redirect"):
#     filename = os.fsdecode(file)
#     print('filename', filename)
#     if filename.endswith(".js"):
#         js_redirect_list.append(filename)
#         continue
#     else:
#         continue
#
# js_redirect = Bundle(js_redirect_list, output='js_redirect.js', filters='jsmin')

js_main = Bundle([f"{dirname}/static/javascript/urgent/onload.js",
                  f"{dirname}/static/javascript/urgent/set_color_theme.js",
                  f"{dirname}/static/javascript/urgent/is_touch.js",
                  f"{dirname}/static/javascript/urgent/spinner_add_listener_click_face.js",
                  f"{dirname}/static/javascript/urgent/populate_summary.js",
                  f"{dirname}/static/javascript/urgent/populate_photo_carousel.js"],
            output='js_main.js',
            filters='jsmin')
assets.register('js_main.js', js_main)
js_main.build()

js_home_main = Bundle([f"{dirname}/static/javascript/urgent/display_counter.js",
                       f"{dirname}/static/javascript/urgent/get_no_of_reviews.js",
                       f"{dirname}/static/javascript/urgent/get_unique_list.js",
                       f"{dirname}/static/javascript/urgent/setup_filters.js",
                       f"{dirname}/static/javascript/urgent/setup_filters_populate.js"],
                      output='js_home_main.js',
            filters='jsmin')
assets.register('js_home_main.js', js_home_main)
js_home_main.build()

js_home_defer = Bundle([f"{dirname}/static/javascript/defer/spinner_set_css_classes.js",
                   f"{dirname}/static/javascript/defer/spinner_set_css_classes_flat.js"],
                  output='js_home_defer.js',
                  filters='jsmin')
assets.register('js_home_defer.js', js_home_defer)
js_home_defer.build()

js_filter = Bundle([f"{dirname}/static/javascript/filter/clear_filter.js",
             f"{dirname}/static/javascript/filter/get_filter_values.js",
             f"{dirname}/static/javascript/filter/on_click.js",
                      f"{dirname}/static/javascript/filter/populate_header.js",
                      f"{dirname}/static/javascript/filter/pre_populate.js",
                      f"{dirname}/static/javascript/filter/reset_filter.js",
                      f"{dirname}/static/javascript/filter/toggle_overlay.js",
                      f"{dirname}/static/javascript/filter/toggle_reset.js",
f"{dirname}/static/javascript/filter/create/create_filter_.js",
f"{dirname}/static/javascript/filter/create/create_filter_diary.js",
f"{dirname}/static/javascript/filter/create/create_filter_direction.js",
f"{dirname}/static/javascript/filter/create/create_filter_event.js",
f"{dirname}/static/javascript/filter/create/create_filter_feature.js",
f"{dirname}/static/javascript/filter/create/create_filter_pub_identity.js",
f"{dirname}/static/javascript/filter/create/create_filter_station.js",
                    f"{dirname}/static/javascript/filter/filter_by/filter_by_.js",
                    f"{dirname}/static/javascript/filter/filter_by/filter_by_diary.js",
                    f"{dirname}/static/javascript/filter/filter_by/filter_by_direction.js",
                    f"{dirname}/static/javascript/filter/filter_by/filter_by_event.js",
                    f"{dirname}/static/javascript/filter/filter_by/filter_by_feature.js",
                    f"{dirname}/static/javascript/filter/filter_by/filter_by_pub_identity.js",
                    f"{dirname}/static/javascript/filter/filter_by/filter_by_station.js"],
            output='js_filter.js',
            filters='jsmin')
assets.register('js_filter.js', js_filter)
js_filter.build()

js_list = Bundle([f"{dirname}/static/javascript/list_js/list_addjson.js",
             f"{dirname}/static/javascript/list_js/list_columns.js",
             f"{dirname}/static/javascript/list_js/list_create.js",
             f"{dirname}/static/javascript/list_js/list_delete.js",
                      f"{dirname}/static/javascript/list_js/list_filter.js",
                      f"{dirname}/static/javascript/list_js/list_setup.js"],
            output='js_map.js',
            filters='jsmin')
assets.register('js_list.js', js_list)
js_list.build()

js_map = Bundle([f"{dirname}/static/javascript/map/map_addListener_bounds_changed.js",
             f"{dirname}/static/javascript/map/map_addListener_click.js",
             f"{dirname}/static/javascript/map/map_center.js",
             f"{dirname}/static/javascript/map/map_create.js",
                      f"{dirname}/static/javascript/map/map_initiate.js",
                      f"{dirname}/static/javascript/map/map_load.js",
                      f"{dirname}/static/javascript/map/nearest_station.js",
                      f"{dirname}/static/javascript/map/searchbox_addListener_places_changed.js",
                      f"{dirname}/static/javascript/map/sort_by_distance.js"],
            output='js_map.js',
            filters='jsmin')
assets.register('js_map.js', js_map)
js_map.build()

js_populate = Bundle([f"{dirname}/static/javascript/populate/populate_detail.js",
             f"{dirname}/static/javascript/populate/populate_diary.js",
             f"{dirname}/static/javascript/populate/populate_direction.js",
             f"{dirname}/static/javascript/populate/populate_events.js",
                      f"{dirname}/static/javascript/populate/populate_pub.js",
                      f"{dirname}/static/javascript/populate/populate_review.js",
                      f"{dirname}/static/javascript/populate/populate_stars.js",
                      f"{dirname}/static/javascript/populate/populate_station.js"],
            output='js_populate.js',
            filters='jsmin')
assets.register('js_populate.js', js_populate)
js_populate.build()

js_redirect = Bundle([f"{dirname}/static/javascript/redirect/redirect_add.js",
             f"{dirname}/static/javascript/redirect/redirect_edit.js",
             f"{dirname}/static/javascript/redirect/redirect_home.js",
             f"{dirname}/static/javascript/redirect/redirect_pub.js",
             f"{dirname}/static/javascript/redirect/redirect_pub_search.js",
                      f"{dirname}/static/javascript/redirect/redirect_reviews.js",
                      f"{dirname}/static/javascript/redirect/redirect_station.js",
                      f"{dirname}/static/javascript/redirect/redirect_stations.js",
                      f"{dirname}/static/javascript/redirect/redirect_timeout.js",
                      f"{dirname}/static/javascript/redirect/redirect_website.js",
                      f"{dirname}/static/javascript/redirect/update_station.js"],
            output='js_redirect.js',
            filters='jsmin')
assets.register('js_redirect.js', js_redirect)
js_redirect.build()

# css = Bundle(['/static/css/filter/diary_filter.css',
#               '/static/css/filter/direction_filter.css',
#               '/static/css/filter/events_filter.css'],
#              output='gen/main.css', filters='cssmin')


# # # # # assets.config['sass_bin'] = '/usr/local/bin/sass'


# assets.register('main.css', css)