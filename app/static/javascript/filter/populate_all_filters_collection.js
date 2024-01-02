function populate_all_filters_collection(pub_filtered) {
    console.log('populate all filters collection')
    console.log('data in: ' + pub_filtered.length)
    populate_direction_collection(pub_filtered)
    populate_station_collection(pub_filtered)
    populate_feature_collection(pub_filtered)
    populate_diary_collection(pub_filtered)
    }