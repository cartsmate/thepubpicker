import json

from app.models.daily_event.daily_event import DailyEvent
from app.models.detail.detail import Detail
from app.models.direction.direction import Direction
from app.models.diary.diary import Diary
from app.models.pub.pub import Pub
from app.models.review.review import Review
from app.models.station.station import Station


class ModelMetadata:
    @staticmethod
    def get_model_metadata():
        detail_json = json.loads(json.dumps(Detail().__dict__, default=lambda o: o.__dict__))
        direction_json = json.loads(json.dumps(Direction().__dict__, default=lambda o: o.__dict__))
        diary_json = json.loads(json.dumps(Diary().__dict__, default=lambda o: o.__dict__))
        event_json = json.loads(json.dumps(DailyEvent().__dict__, default=lambda o: o.__dict__))
        review_json = json.loads(json.dumps(Review().__dict__, default=lambda o: o.__dict__))
        pub_obj_json = json.loads(json.dumps(Pub().__dict__, default=lambda o: o.__dict__))
        station_json = json.loads(json.dumps(Station().__dict__, default=lambda o: o.__dict__))

        models_json = {'detail_json': detail_json,
                       'diary_json': diary_json,
                       'direction_json': direction_json,
                       'event_json': event_json,
                       'pub_obj_json': pub_obj_json,
                       'review_json': review_json,
                       'station_json': station_json}
        return models_json
