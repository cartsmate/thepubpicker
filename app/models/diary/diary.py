import json
from app.models.diary.monday import Monday
from app.models.diary.tuesday import Tuesday
from app.models.diary.wednesday import Wednesday
from app.models.diary.thursday import Thursday
from app.models.diary.friday import Friday
from app.models.diary.saturday import Saturday
from app.models.diary.sunday import Sunday
from app.models.detail.pub_identity import PubIdentity


class Diary:

    def __init__(self, pub_identity=PubIdentity(), monday=Monday(), tuesday=Tuesday(), wednesday=Wednesday(),
                 thursday=Thursday(), friday=Friday(), saturday=Saturday(), sunday=Sunday()):
        self.pub_identity = pub_identity
        self.monday = monday
        self.tuesday = tuesday
        self.wednesday = wednesday
        self.thursday = thursday
        self.friday = friday
        self.saturday = saturday
        self.sunday = sunday
