from app.static.pythonscripts.uuid_generater import UuidGenerator


class ReviewIdentity:
    def __init__(self, name='review_identity', alias="Review Identity", alias2="", required=False,
                 form_visible=False, table_visible=False, value=UuidGenerator().get_new_uuid(), control='none', icon='none',
                 data_type='str', menu_filter=False, quick_filter=False, event_filter=False, datatype='str'):
        self.name = name
        self.alias = alias
        self.alias2 = alias2
        self.required = required
        self.form_visible = form_visible
        self.table_visible = table_visible
        self.value = value
        self.control = control
        self.icon = icon
        self.data_type = data_type
        self.menu_filter = menu_filter
        self.quick_filter = quick_filter
        self.event_filter = event_filter
        self.datatype = datatype
