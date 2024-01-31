from app.models.event.event import Event


class Sunday:
    def __init__(self, name='sunday', alias="Sunday", alias2="", required='false', form_visible=True,
                 table_visible=True, value=Event(), control=False, rank=0, menu_filter=True):
        self.name = name
        self.alias = alias
        self.alias2 = alias2
        self.required = required
        self.form_visible = form_visible
        self.table_visible = table_visible
        self.value = value
        self.control = control
        self.rank = rank
        self.menu_filter = menu_filter
