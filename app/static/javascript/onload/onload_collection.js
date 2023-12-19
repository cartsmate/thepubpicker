function onload_collection() {
    console.log('ONLOAD COLLECTION')
    console.log('feature')
    console.log(feature)
    console.log('station')
    console.log(station)

    //************
    // PRE POPULATE A FILTER WITH FEATURE
    //************

    populate_all_filters(pub)
    pre_populate(feature, station)
    pub_filtered = filter_all_data()
    populate_all_filters_collection(pub_filtered)

    //map_load_collection()
    list_setup(pub_filtered)
    //populate_review(pub_filtered)

    populate_header(pub_filtered.length)

}
