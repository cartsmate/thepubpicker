//function addJson(headers, visible) {
function list_addjson_search(visible) {
    json_list = []
//    console.log('visible')
//    console.log(visible)
    x=0
    pub_attributes=[]
    for (var key in pub[0]) {
        pub_attributes.push(key)
        x++
    }
//    console.log('x: ' + x)
    //pub[0].forEach((key, index) => {
        //console.log(index, club);
    //});
    //for (const [index, key] of pub[0].entries()) {
        //console.log(index, club);
    //}

    for (i=0; i<pub_attributes.length; i++) {
        //console.log(key + " -> " + visible[key])

        json_list.push({target: i, visible: visible[pub_attributes[i]], searchable: true, })
//        i++
        //json_list.push({target: i, visible: visible[key], searchable: true, })
    }
//    console.log('json_list')
//    console.log(json_list)
    return json_list
}
