function populate_all_filters_events(pub_filtered) {
    console.log('-- populate_all_filters: ' + pub_filtered.length)
    populate_direction_events(pub_filtered)
    populate_station_events(pub_filtered)
    populate_feature_events(pub_filtered)
}
