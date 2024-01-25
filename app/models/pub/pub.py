from app.models.detail.detail import Detail
from app.models.review.review import Review
from app.models.diary.diary import Diary
from app.models.station.station import Station
from app.models.direction.direction import Direction


class Pub:

    def __init__(self, detail=Detail(), review=Review(), diary=Diary(), station=Station(), direction=Direction()):
        self.detail = detail
        self.review = review
        self.diary = diary
        self.station = station
        self.direction = direction
