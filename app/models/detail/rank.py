
class Rank:
    def __init__(self, name='rank', alias="Rank", alias2="", required=False, form_visible=False,
                 table_visible=True, value=0, control='input', rank=4, datatype='float', places_field='rating'):
        self.name = name
        self.alias = alias
        self.alias2 = alias2
        self.required = required
        self.form_visible = form_visible
        self.table_visible = table_visible
        self.value = value
        self.control = control
        self.rank = rank
        self.datatype = datatype
        self.places_field = places_field
