from app.models.daily_event.event_identity import EventIdentity
from app.models.daily_event.event_type import EventType
from app.models.daily_event.event_day import EventDay
from app.models.daily_event.event_detail import EventDetail
from app.models.detail.pub_identity import PubIdentity


class DailyEvent:

    filename = 'daily_event'

    def __init__(self, pub_identity=PubIdentity(), event_identity=EventIdentity(), event_day=EventDay(),
                 event_detail=EventDetail(), event_type=EventType()):
        self.pub_identity = pub_identity
        self.event_identity = event_identity
        self.event_day = event_day
        self.event_detail = event_detail
        self.event_type = event_type
