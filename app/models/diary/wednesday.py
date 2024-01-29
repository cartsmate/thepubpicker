from app.models.event.event import Event


class Wednesday:
    def __init__(self, name='wednesday', alias="Wednesday", alias2="", required='false', form_visible='true',
                 table_visible='true', value=Event(), control='false', rank=0):
        self.name = name
        self.alias = alias
        self.alias2 = alias2
        self.required = required
        self.form_visible = form_visible
        self.table_visible = table_visible
        self.value = value
        self.control = control
        self.rank = rank
