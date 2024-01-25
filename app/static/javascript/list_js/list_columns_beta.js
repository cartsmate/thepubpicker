function list_columns_beta() {
    console.log('list columns BETA')

    visible = {}
    for (const [key, value] of Object.entries(pub_obj)) {
        for (const [k, v] of Object.entries(value)) {
            if (v.table_visible == 'true') {
                visible[v.name] = false
            }
        }
    }
    visible['station_name'] = true
    visible['rank'] = true
    visible['detail_name'] = true

    asc_desc = 'desc'
    order = 1
    return [visible, order, asc_desc]
}
