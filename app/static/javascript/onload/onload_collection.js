function onload_collection() {
    console.log('ONLOAD COLLECTION')

    //************
    // PRE POPULATE A FILTER WITH FEATURE
    //************

    console.log('1')
    populate_all_filters(pub)
    console.log('2')
    pre_populate(feature, station)
    console.log('3')
    pub_filtered = filter_all_data()
//    console.log('4')
//    console.log('filtered data out: ' + pub_filtered.length)
    console.log('5')
    //populate_all_filters_collection(pub_filtered)
    populate_all_filters(pub_filtered)
//    console.log('6')
    list_setup(pub_filtered)
//    console.log('7')
    populate_header(pub_filtered.length)
//    console.log('8')
    map_load_collection(pub_filtered)
//    console.log('9')
}
