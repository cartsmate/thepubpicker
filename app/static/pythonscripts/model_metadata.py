import json

from app.models.diary.diary import Diary
from app.models.pub.pub import Pub
from app.models.review.review import Review


class ModelMetadata:
    @staticmethod
    def get_model_metadata():
        review_json = json.loads(json.dumps(Review().__dict__, default=lambda o: o.__dict__))
        diary_json = json.loads(json.dumps(Diary().__dict__, default=lambda o: o.__dict__))
        pub_obj_json = json.loads(json.dumps(Pub().__dict__, default=lambda o: o.__dict__))
        models_json = {'review_json': review_json,
                       'diary_json': diary_json,
                       'pub_obj_json': pub_obj_json}
        return models_json
