function update_station(station_identity) {
    document.getElementById(station_identity + "_filter").checked = true
    pub_filtered = filter_all_data(pub)
    list_setup_beta(pub_filtered)
    populate_feature(pub_filtered)
    populate_header(pub_filtered.length)
    map_load_collection()
}
