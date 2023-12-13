function onload_collection() {
    console.log('ONLOAD COLLECTION')
    console.log('feature')
    console.log(feature)
    console.log('station')
    console.log(station)
    console.log('alias')
    console.log(alias)
    //console.log(pub)
    //console.log(env_vars)
    //console.log('review_list')
    //console.log(review_list)

    //************
    // PRE POPULATE A FILTER WITH FEATURE
    //************

    if (feature != 'none' && feature != null) {
        console.log('feature: ' + feature)
        populate_all_filters(pub)
        document.getElementById(feature + "_filter").checked = true
        pub_filtered = filter_by_feature(pub)
    } else if (station != 'none' && station != null) {
        console.log('station: ' + station)
        populate_all_filters(pub)
        document.getElementById(station + "_filter").checked = true
        pub_filtered = filter_by_station(pub)
    } else {
        pub_filtered = pub
    }

    map_load()
    list_setup(pub_filtered)
    populate_review(pub_filtered)
    populate_all_filters(pub_filtered)
    populate_header(pub_filtered.length)
//    populate_header()
//    sss()
//    document.getElementById('pub_length').innerHTML = "<a>" + "Number of pubs: " + pub_filtered.length + "</a>"
}
