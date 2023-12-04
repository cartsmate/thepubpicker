from flask import render_template, request
from app.models.detail.detail import Detail
from app.models.review.review import Review
from app.models.station.station import Station
from app.models.direction.direction import Direction
from app.models.photo.photo import Photo
from app.models.diary.diary import Diary


class Objects:

    def go_get_model_dict(self):
        inst_pub = Detail()
        inst_review = Review()
        inst_pub.__dict__.update(inst_review.__dict__)

        inst_station = Station()
        inst_pub.__dict__.update(inst_station.__dict__)

        inst_direction = Direction()
        inst_pub.__dict__.update(inst_direction.__dict__)

        inst_photo = Photo()
        inst_pub.__dict__.update(inst_photo.__dict__)

        return inst_pub

    def go_get_visible(self):
        visible = {}
        inst_pub_review = self.go_get_model_dict()

        for k, v in inst_pub_review.__dict__.items():
            if (k == 'station_name') and (request.args.get('station') != 'all'):
                visible[k] = 'false'
            else:
                visible[k] = v.table_visible

        diary = Diary().__dict__.items()
        for k, v in diary:
            visible[k] = 'false'
        print('visible')
        print(visible)
        return visible

    def go_get_alias(self):
        alias = {}
        inst_pub_review = self.go_get_model_dict()

        for k, v in inst_pub_review.__dict__.items():
            alias[k] = v.alias

        diary = Diary().__dict__.items()
        for k, v in diary:
            alias[k] = k
        alias['distance'] = 'distance'
        return alias
