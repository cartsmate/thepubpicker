function list_addjson(visible) {
    console.log('-- list_addjson')
    json_list = []
    //json_list.push({target: 0, visible: true, searchable: false, orderable: false})
    i=0
    for (const [key, value] of Object.entries(pub_obj)) {
        //console.log("key: " + key, "value: " + value)
        for (const [k, v] of Object.entries(value)) {
//            console.log("k: " + k, "v: " + v)
            if (v.table_visible) {
                //console.log(v.name)
                //console.log(visible[v.name])

                if (visible[v.name] == true) {
//                    console.log('this is visible')
//                    console.log(v.name)
                }
                json_list.push({"targets": i, "visible": visible[v.name], })
                i++
            }
        }
    }
//    console.log(json_list)
//    return false
    return json_list
}
