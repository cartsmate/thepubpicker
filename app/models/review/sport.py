

class Sport:
    def __init__(self, name='sport', alias="Sports", alias1="TV", alias2="Sports TV", required='true',
                 form_visible='false', table_visible='false', value='0', control="check", icon="sport.png",
                 data_type='str', filter='yes', quick_filter='yes'):
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
        self.filter = filter
        self.quick_filter = quick_filter
