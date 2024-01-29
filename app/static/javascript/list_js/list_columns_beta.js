function list_columns_beta() {
    console.log('-- list_columns_beta')

    visible = {}
    for (const [key, value] of Object.entries(pub_obj)) {
//        console.log('key, value')
//        console.log(key, value)
        for (const [k, v] of Object.entries(value)) {
//            console.log('k, v')
//            console.log(k, v)
            if (v.table_visible == 'true') {
                console.log('visible')
                console.log(v)
                visible[v.name] = false
            }
        }
    }

    visible['ordering'] = true
    visible['detail_name'] = true

    if (document.getElementById('quiz_filter').checked || document.getElementById('brunch_filter').checked || document.getElementById('music_filter').checked || document.getElementById('entertain_filter').checked) {
        visible['event_day'] = true
        visible['event_detail'] = true
    } else {
        visible['station_name'] = true
        visible['rank'] = true
    }

    console.log(visible)
    asc_desc = 'asc'
    order = 0
    return [visible, order, asc_desc]
}
