from app.models.a_position.position import Position
from app.models.detail.detail import Detail
from app.models.review.review import Review
from app.models.diary.diary import Diary
from app.models.station.station import Station
from app.models.direction.direction import Direction


class Pub:

    def __init__(self, a_position=Position(), detail=Detail(), review=Review(), diary=Diary(), station=Station(),
                 direction=Direction()):
        self.a_position = a_position
        self.detail = detail
        self.review = review
        self.diary = diary
        self.station = station
        self.direction = direction
