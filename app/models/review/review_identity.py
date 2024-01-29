class ReviewIdentity:
    def __init__(self, name='review_identity', alias="Review Identity", alias2="", required='false',
                 form_visible='false', table_visible='false', value=0, control='none', icon='none', data_type='str',
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
