function list_addjson(visible) {
    console.log('list_addjson')
    json_list = []
    i=0
    for (const [key, value] of Object.entries(pub_obj)) {
        for (const [k, v] of Object.entries(value)) {
            if (v.table_visible == 'true') {
                json_list.push({target: i, visible: visible[v.name], })
                i++
            }
        }
    }
    return json_list
}
