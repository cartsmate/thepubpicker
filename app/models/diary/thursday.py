from app.models.event.event_identity import EventIdentity


class Thursday:
    def __init__(self, name='thursday', alias="Thursday", alias2="", required='false', form_visible=True,
                 table_visible=True, value=EventIdentity(), control="input", rank=0, menu_filter=True, datatype='str'):
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
        self.datatype = datatype
