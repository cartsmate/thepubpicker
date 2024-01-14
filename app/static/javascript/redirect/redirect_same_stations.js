function redirect_same_stations(back) {
    console.log("redirect same stations")
    var same_station = document.getElementById('station_identity').value
    document.getElementById(station_identity + "_filter").checked = true
    pub_filtered = filter_all_data(pub)
    list_setup_beta(pub_filtered)
    populate_feature(pub_filtered)
    populate_header(pub_filtered.length)
    map_load_collection()
}
