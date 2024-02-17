function create_filter_pub_identity(pub_filtered) {
    console.log('---- create_filter_pub_identity: ' + pub_filtered.length)

    clear_filter('checks_pub_identity')
    //for (i=0; i<pub_filtered.length; i++) {


    for (i=0; i<pub_all.length; i++) {

        var filtered_data = pub_filtered.filter(function(x) {
            return x['pub_identity'] == pub_all[i]['pub_identity']
        })

        record = document.createElement("div")
        record.className = 'row'
        checks_area = document.getElementById('checks_pub_identity')
        checks_area.appendChild(record)

        label = document.createElement("div")
        label.style.width = "230px"
        label.id = pub_all[i]['pub_identity'] + "_id"
        label.innerHTML = "<a style='font-size: 12px; padding: 0px; margin: 0px;'>" + pub_all[i]['pub_identity'] + " (" + filtered_data.length + ") " + "</a>"
        //label.innerHTML = "<a style='font-size: 12px; padding: 0px; margin: 0px;'>" + pub_filtered[i]['pub_identity'] + "</a>"
        record.appendChild(label)

        input = document.createElement("input")
        input.type = "checkbox"
        input.id = pub_all[i]['pub_identity'] + "_filter"
//        input.checked = true

        if (filtered_data.length > 0) {
            label.style.display = "block"
            input.checked = true
        } else {
            label.style.display = "none"
            input.checked = false
        }

//        if (filtered_data.length > 0) {
//            label.style.display = "block"
////            input.checked = true
//        }
        label.appendChild(input)
    }

}

//function on_click_station() {
//    console.log('USER INPUT - on click station')
//    pub_filtered = filter_all_data(pub)
//    list_setup(pub_filtered)
//    populate_feature(pub_filtered)
//    populate_header(pub_filtered.length)
//    map_load_collection(pub_filtered)
//
//}
