function update_station(station_identity) {
    document.getElementById(station_identity + "_filter").checked = true
//    pub_filtered = filter_all_data(pub)

    pub_filtered = filter_by_(pub_all)
    center_map()
//    list_setup(pub_filtered)
//    populate_feature(pub_filtered)
//    populate_header(pub_filtered.length)
//    map_load('home') //    map_load_collection()
}
