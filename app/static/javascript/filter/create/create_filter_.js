function create_filter_(pub_filtered) {
    console.log('-- populate_all_filters: ' + pub_filtered.length)
    create_filter_direction(pub_filtered)
    create_filter_station(pub_filtered)
    create_filter_feature(pub_filtered)
    create_filter_diary(pub_filtered)
    create_filter_event(pub_filtered)
    create_filter_pub_identity(pub_filtered)
}
