from app.models.a_position.ordering import Ordering


class Position:
    def __init__(self, ordering=Ordering()):
        self.ordering = ordering
