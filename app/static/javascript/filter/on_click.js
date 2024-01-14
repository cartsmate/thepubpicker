function on_click_feature() {
    console.log('USER INPUT - on click feature')
    pub_filtered = filter_all_data(pub)
    list_setup_beta(pub_filtered)
    populate_feature(pub_filtered)
    populate_header(pub_filtered.length)
    map_load_collection()
    //map_load_search(pub_filtered)
    document.getElementById('template_map').style.display = "block"
    document.getElementById('template_list').style.display = "block"
    document.getElementById('template_header').style.display = "block"

}
function on_click_station() {
    console.log('USER INPUT - on click station')
    pub_filtered = filter_all_data(pub)
    list_setup_beta(pub_filtered)
    populate_feature(pub_filtered)
    populate_header(pub_filtered.length)
    map_load_collection()
    //map_load_search(pub_filtered)
    document.getElementById('template_map').style.display = "block"
    document.getElementById('template_list').style.display = "block"
    document.getElementById('template_header').style.display = "block"
}

function on_click_direction() {
    console.log('USER INPUT - on click direction COLLECTION')

    pub_filtered = filter_all_data(pub)
    console.log(pub_filtered.length)
    list_setup_beta(pub_filtered)

    populate_station(pub_filtered)
    populate_feature(pub_filtered)

    populate_header(pub_filtered.length)

    map_load_collection()
    //map_load_search(pub_filtered)
    document.getElementById('template_map').style.display = "block"
    document.getElementById('template_list').style.display = "block"
    document.getElementById('template_header').style.display = "block"

}

//
//function on_click() {
//    console.log('ON_CLICK')
//    page_layout('home')
//    data = filter_all_data(all_data)
//    //populate_direction(data)
//    //populate_station(data)
//    //populate_feature(data)
//    console.log('data')
//    console.log(data)
//
//    for (i=0; i<total_list_obj['icon_list'].length; i++) {
//        var filtered_data = data.filter(function(pub) {
//            return pub[total_list_obj['icon_list'][i]] == 'true'
//        })
//        document.getElementById(total_list_obj['icon_list'][i] + "_id").innerHTML = total_list_obj['icon_list'][i] + " (" + filtered_data.length + ")"
//    }
//
//    document.getElementById('button_count').innerHTML = data.length
//    table_setup(data)
//    if (data.length > 0 && data.length <= 50) {
//        console.log('<= 50 pubs to show')
//        add_markers(map, data)
//    } else {
//        console.log('> 50 pubs')
//        //console.log('all directions')
//        json_array = calculate_directions_count(data)
//        add_markers_2(map, json_array)
//    //} else {
//    //    console.log('one direction')
//    //    json_array_stations = calculate_stations_count(filtered_data)
//    //    add_markers_3(map, json_array_stations)
//    }
//
//}
