function onload_search() {
    console.log('ONLOAD SEARCH')
    console.log('feature')
    console.log(feature)
    //console.log(pub)
    //console.log(env_vars)
    //console.log('review_list')
    //console.log(review_list)

    //************
    // PRE POPULATE A FILTER WITH FEATURE
    //************

    if (feature != 'none' && feature != null) {
        populate_all_filters(pub)
        document.getElementById(feature + "_filter").checked = true
        pub_filtered = filter_by_feature(pub)
    } else if (station != 'none' && station != null) {
        populate_all_filters(pub)
        document.getElementById(station_identity + "_filter").checked = true
        pub_filtered = filter_by_station(pub)
    } else {
        pub_filtered = pub
    }

    list_setup_search(pub_filtered)
//    populate_review(pub_filtered)
//    populate_all_filters(pub_filtered)
//    populate_header(pub_filtered.length)
//    populate_header()
//    sss()
//    document.getElementById('pub_length').innerHTML = "<a>" + "Number of pubs: " + pub_filtered.length + "</a>"
}
