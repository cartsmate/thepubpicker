function populate_all_filters(pub_filtered) {
    console.log('-- populate_all_filters: ' + pub_filtered.length)
    populate_direction(pub_filtered)
    populate_station(pub_filtered)
    populate_feature(pub_filtered)
    populate_event(pub_filtered)
}
