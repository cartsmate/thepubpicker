from flask import render_template, request
from app.models.pub.pub import Pub
from app.models.review.review import Review
from app.models.area.area import Area
from app.models.station.station import Station
from app.models.direction.direction import Direction
from app.models.diary.week import Week


class Objects:

    def go_get_model_dict(self):
        inst_pub = Pub()
        inst_review = Review()
        inst_pub.__dict__.update(inst_review.__dict__)
        inst_area = Area()
        inst_pub.__dict__.update(inst_area.__dict__)
        inst_station = Station()
        inst_pub.__dict__.update(inst_station.__dict__)
        inst_direction = Direction()
        inst_pub.__dict__.update(inst_direction.__dict__)
        inst_pub_review = inst_pub
        return inst_pub_review

    def go_get_visible(self):
        visible = {}
        inst_pub_review = self.go_get_model_dict()

        for k, v in inst_pub_review.__dict__.items():
            if (k == 'station_name') and (request.args.get('station') != 'all'):
                visible[k] = 'false'
            else:
                visible[k] = v.table_visible

        diary_week = Week().__dict__.items()
        for k, v in diary_week:
            visible[k] = 'false'

        return visible

    def go_get_alias(self):
        alias = {}
        inst_pub_review = self.go_get_model_dict()

        for k, v in inst_pub_review.__dict__.items():
            alias[k] = v.alias

        diary_week = Week().__dict__.items()
        for k, v in diary_week:
            alias[k] = k
        alias['distance'] = 'distance'
        return alias
