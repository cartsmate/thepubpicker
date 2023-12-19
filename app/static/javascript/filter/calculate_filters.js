function calculate_filters(feature, station) {
    console.log('calculate filters')
    if (feature != 'none' && feature != null) {
        console.log('feature: ' + feature)
        //populate_all_filters(pub)
        document.getElementById(feature + "_filter").checked = true
        pub_filtered = filter_by_feature(pub)
    } else if (station != 'none' && station != null) {
        console.log('station: ' + station)
        //populate_all_filters(pub)
        document.getElementById(station + "_filter").checked = true
        pub_filtered = filter_by_station(pub)
    } else {
        pub_filtered = pub
    }
    return pub_filtered
}

function pre_populate(feature, station) {
    console.log('pre_populate')

    if (feature != 'none' && feature != null) {
        console.log('feature: ' + feature)
        //populate_all_filters(pub)
        document.getElementById(feature + "_filter").checked = true
    } else if (station != 'none' && station != null) {
        console.log('station: ' + station)
        //populate_all_filters(pub)
        document.getElementById(station + "_filter").checked = true
    }
}