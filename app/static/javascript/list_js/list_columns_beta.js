function list_columns_beta() {
    console.log('-- list_columns_beta')

    visible = {}
    for (const [key, value] of Object.entries(pub_obj)) {
//        console.log('key, value')
//        console.log(key, value)
        for (const [k, v] of Object.entries(value)) {
//            console.log('k, v')
//            console.log(k, v)
            if (v.table_visible) {
                //console.log('visible')
                //console.log(v)
                visible[v.name] = false
            }
        }
    }

    visible['ordering'] = true
    visible['detail_name'] = true

//    if (document.getElementById('monday_filter').checked || document.getElementById('tuesday_filter').checked ||
//        document.getElementById('wednesday_filter').checked || document.getElementById('thursday_filter').checked ||
//        document.getElementById('friday_filter').checked || document.getElementById('saturday_filter').checked ||
//        document.getElementById('sunday_filter').checked) {

    visible['rank'] = true
    visible['station_name'] = true

    console.log('filter_selection')
    console.log(filter_selection)
    if (filter_selection['event'] == 'on') {
        console.log('diary on')
        visible['rank'] = false
        visible['event_day'] = true
        }
    if (filter_selection['station'] == 'on') {
        console.log('station on')
        visible['station_name'] = false
        }
    if (filter_selection['diary'] == 'on') {
        console.log('diary on')
        visible['event_day'] = false
        visible['event_type'] = true
        if (filter_selection['station'] == 'on') {
            visible['rank'] = true
        } else {
            visible['rank'] = false
        }
    }
    if (filter_selection['event'] == 'on') {
        console.log('diary on')
        if (filter_selection['diary'] == 'on') {
            visible['event_day'] = false
            visible['rank'] = true
        } else {
            visible['rank'] = false
            visible['event_day'] = true
        }
        visible['event_type'] = false
        visible['station_name'] = true
        }
        /*
    } else if (filter_selection['diary'] == 'on') {
        visible['event_event'] = true
        visible['event_detail'] = true {

    */
    console.log(visible)
    asc_desc = 'asc'
    order = 0
    return [visible, order, asc_desc]
}
