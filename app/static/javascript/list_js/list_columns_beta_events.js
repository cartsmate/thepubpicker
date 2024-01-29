function list_columns_beta_events() {
    console.log('-- list_columns_beta events')

    visible = {}
//    for (const [key, value] of Object.entries(pub_obj)) {
    console.log(event)
//    for (const [key, value] of Object.entries(event)) {
//        console.log(key)
//        }
    Object.keys(event[0]).forEach(function(key) {
      console.log('Key : ' + key + ', Value : ' + event[0][key])
      visible[key] = true
    })
//        for (const [k, v] of Object.entries(value)) {
//            console.log(v)
//            //if (v.table_visible == 'true') {
//            //    visible[v.name] = false
//            //}
//        }
//    }
//    visible['ordering'] = true
//    visible['event_type'] = true
//    visible['event_day'] = true
//    visible['event_detail'] = true
//    visible['detail_name'] = true

    asc_desc = 'asc'
    order = 0
    return [visible, order, asc_desc]
}
