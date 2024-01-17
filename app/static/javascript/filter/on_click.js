function update_results() {
    console.log('update result')
    place_text = document.getElementById('search-input-navbar').value
    console.log('place_text')
    console.log(place_text)
    console.log('bounds')
    console.log(bounds)
    pub_filtered = filter_all_data(pub)

    if (pub_filtered.length < pub.length || place_text != '') {
        if (place_text != '') {
            console.log('here')
            console.log(map.getCenter())
            //map.setCenter({lat:52, lng:-0.1});
        } else {
            console.log('here')
            console.log(map.getCenter())
            var lat_sum =0
            var lng_sum =0
            for (i=0; i<pub_filtered.length; i++) {
                lat_sum += pub_filtered[0]['detail_latitude']
                lng_sum += pub_filtered[0]['detail_longitude']
            }
            //const lat_sum_x = pub_filtered[0]['detail_latitude'].reduce((a, b) => a + b, 0);
            const lat_avg = (lat_sum / pub_filtered.length)
            const lng_avg = (lng_sum / pub_filtered.length)
            console.log('lat_avg: ' + lat_avg)
            console.log('lng_avg: ' + lng_avg)
            map.setCenter({lat:lat_avg, lng:lng_avg});
        }
        populate_all_filters(pub_filtered)
        pubs_sorted = sort_by_distance(pub_filtered, map)
        list_setup_beta(pubs_sorted)
        populate_header(pub_filtered.length)
        map_repopulate(pub_filtered)
        display_results('block')
    } else {
        display_results('none')
    }
}
function display_results(display) {
        document.getElementById('template_map').style.display = display
        document.getElementById('template_list').style.display = display
        document.getElementById('template_header').style.display = display
}
function on_click_feature(theme) {
    console.log('USER INPUT - on click feature')
    for (i=0; i < model_formats['icon_list'].length; i++) {
        if (model_formats['icon_list'][i] != 'nofeature') {
            if (document.getElementById(model_formats['icon_list'][i] + "_filter").checked == true) {
                document.getElementById(model_formats['icon_list'][i] + "_word").style.color = "white"
                document.getElementById(model_formats['icon_list'][i] + "_carousel").style.backgroundColor = theme
            } else {
                document.getElementById(model_formats['icon_list'][i] + "_word").style.color = "black"
                document.getElementById(model_formats['icon_list'][i] + "_carousel").style.backgroundColor = "white"
            }
        }
    }
    update_results()
}
function on_click_station() {
    console.log('USER INPUT - on click station')

    pub_filtered = filter_all_data(pub)
    list_setup_beta(pub_filtered)
    populate_direction(pub_filtered)

    //populate_station(pub_filtered)

    populate_feature(pub_filtered)
    populate_header(pub_filtered.length)
    map_repopulate(pub_filtered)
    if (pub_filtered.length < pub.length) {
        display_results('block')
    } else {
        display_results('none')
    }
}

function on_click_direction() {
    console.log('USER INPUT - on click direction COLLECTION')
    //update_results()

    pub_filtered = filter_all_data(pub)
    if (pub_filtered.length < pub.length) {
        //populate_all_filters(pub_filtered, theme)


        //        populate_direction(pub_filtered)
        populate_station(pub_filtered)
        populate_feature(pub_filtered)

        populate_header(pub_filtered.length)
        map_repopulate(pub_filtered)
        list_setup_beta(pub_filtered)
        display_results('block')
    } else {
        display_results('none')
    }

}
