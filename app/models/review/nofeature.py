

class NoFeature:
    def __init__(self, name="nofeature", alias="None", alias2="None", required='true', form_visible='false',
                 table_visible='false', value='1', control="check", icon="nofeature.png", data_type='str',
                 menu_filter='no', quick_filter='no', event_filter='no'):
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
