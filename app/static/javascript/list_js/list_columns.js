function list_columns() {
    console.log('-- list_columns')

    visible = {}
    for (const [key, value] of Object.entries(pub_obj)) {
        for (const [k, v] of Object.entries(value)) {
            if (v.table_visible) {
                visible[v.name] = false
            }
        }
    }

    visible['ordering'] = true
    visible['detail_name'] = true

    var e = filter_selection['event']
    var s = filter_selection['station']
    var d = filter_selection['diary']

    if ((e=='on') && (s=='on') && (d=='on')) {
        visible['station_name'] = false
        visible['event_day'] = false
        visible['event_type'] = false
        visible['event_detail'] = true
        visible['ranking'] = true
    }
    if ((e=='on') && (s=='on') && (d=='off')) {
        visible['station_name'] = false
        visible['event_day'] = false
        visible['event_type'] = false
        visible['event_detail'] = true
        visible['ranking'] = true
    }
    if ((e=='on') && (s=='off') && (d=='on')) {
        visible['station_name'] = true
        visible['event_day'] = false
        visible['event_type'] = false
        visible['event_detail'] = true
        visible['ranking'] = false
    }
    if ((e=='off') && (s=='on') && (d=='on')) {
        visible['station_name'] = false
        visible['event_day'] = false
        visible['event_type'] = false
        visible['event_detail'] = false
        visible['ranking'] = true
    }
    if ((e=='on') && (s=='off') && (d=='off')) {
        visible['station_name'] = true
        visible['event_day'] = false
        visible['event_type'] = false
        visible['event_detail'] = false
        visible['ranking'] = true
    }
    if ((e=='off') && (s=='on') && (d=='off')) {
        visible['station_name'] = false
        visible['event_day'] = false
        visible['event_type'] = false
        visible['event_detail'] = false
        visible['ranking'] = true
    }
    if ((e=='off') && (s=='off') && (d=='on')) {
        visible['station_name'] = true
        visible['event_day'] = false
        visible['event_type'] = false
        visible['event_detail'] = false
        visible['ranking'] = true
    }
    if ((e=='off') && (s=='off') && (d=='off')) {
        visible['station_name'] = true
        visible['event_day'] = false
        visible['event_type'] = false
        visible['event_detail'] = false
        visible['ranking'] = true
    }
    asc_desc = 'asc'
    order = 0
//    console.log('visible')
//    console.log(visible)
    return [visible, order, asc_desc]
}
