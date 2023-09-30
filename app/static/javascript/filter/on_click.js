function eventFunc() {
    page_layout('home')
    data = filter_all_data(all_data)
    //populate_direction(data)
    //populate_station(data)
    //populate_feature(data)
    table_setup(data)
    if (data.length > 0 && data.length <= 50) {
        console.log('<= 50 pubs to show')
        add_markers(map, data)
    } else {
        console.log('> 50 pubs')
        //console.log('all directions')
        json_array = calculate_directions_count(data)
        add_markers_2(map, json_array)
    //} else {
    //    console.log('one direction')
    //    json_array_stations = calculate_stations_count(filtered_data)
    //    add_markers_3(map, json_array_stations)
    }
}
