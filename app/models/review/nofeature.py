

class NoFeature:
    def __init__(self, name="nofeature", alias="None", alias1='.', alias2="No Features", required=True,
                 form_visible=False, table_visible=False, value='1', control="check", icon="nofeature.png",
                 data_type='str', menu_filter=True, quick_filter=False, event_filter=False, datatype='str'):
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
