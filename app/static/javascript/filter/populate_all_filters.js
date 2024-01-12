function populate_all_filters(pub_filtered) {
    console.log('populate all filters')
    console.log('data in: ' + pub_filtered.length)
    populate_direction(pub_filtered)
    populate_station(pub_filtered)
    populate_feature(pub_filtered)
    //populate_diary(pub_filtered)
    //populate_diary2(pub_filtered)
}
