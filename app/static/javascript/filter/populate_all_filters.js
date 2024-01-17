function populate_all_filters(pub_filtered, theme) {
    console.log('POPULATE ALL FILTERS')
    //console.log('data in: ' + pub_filtered.length)
    populate_direction(pub_filtered)
    populate_station(pub_filtered)
    populate_feature(pub_filtered, theme)

    //populate_diary(pub_filtered)
    //populate_diary2(pub_filtered)
}
