import json
from app.models.detail.detail import Detail
from app.models.review.review import Review
from app.models.station.station import Station
from app.models.direction.direction import Direction
from app.models.diary.diary import Diary
from app.models.daily_event.daily_event import DailyEvent


pub_obj = {'detail': {},
           'review': {},
           'station': {},
           'direction': {},
           'diary': {}
           }
for value in Detail().__dict__.values():
    pub_obj['detail'].update({value.name: ""})
for value in Review().__dict__.values():
    pub_obj['review'].update({value.name: ""})
for value in Station().__dict__.values():
    pub_obj['station'].update({value.name: ""})
for value in Direction().__dict__.values():
    pub_obj['direction'].update({value.name: ""})
for value in Diary().__dict__.values():
    pub_obj['diary'].update({value.name: ""})
    if value.name != 'pub_identity':
        nested_obj = {value.name: {}}
        for d_event in DailyEvent().__dict__.values():
            nested_obj[value.name].update({d_event.name: ""})
        pub_obj['diary'].update(nested_obj)

pub_json = json.dumps(pub_obj)

print(json.dumps(pub_obj, indent=4))

