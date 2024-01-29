

class Brunch:
    def __init__(self, name="brunch", alias="Bottomless", alias1="Brunch", alias2="Bottomless Brunch",
                 required='false', form_visible='false', table_visible='false', value='0', control="check",
                 icon="brunch.png", data_type='str', menu_filter='yes', quick_filter='no', event_filter='yes'):
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
