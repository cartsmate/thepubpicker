

class Comedy:
    def __init__(self, name="comedy", alias="Comedy", alias1=".", alias2="Comedy", required=True,
                 form_visible=False, table_visible='false', value='0', control="check", icon="comedy.png",
                 data_type='str', menu_filter=True, quick_filter=False, event_filter=True, datatype='str'):
        self.name = name
        self.alias = alias
        self.alias1 = alias1
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
