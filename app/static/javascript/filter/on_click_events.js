//const delay = ms => new Promise(res => setTimeout(res, ms));
function map_center_from_searchbox_events() {
    console.log('map_center_from_searchbox')
    for (i=0; i < filtered_pubs.length; i++) {
        lat_diff = Math.abs(filtered_pubs[i]['detail_latitude'] - central_obj.lat())
        lng_diff = Math.abs(filtered_pubs[i]['detail_longitude'] - central_obj.lng())
        tot_diff = lat_diff + lng_diff
        filtered_pubs[i]['distance'] = tot_diff
    }
    filtered_pubs = filtered_pubs.sort((a, b) => {
        if (a.distance < b.distance) {
            return -1;
        }
    });
    return filtered_pubs
}
function map_center_from_pubs_events() {
    console.log('map_center_from_pubs')
    var total_lat = 0
    var avg_lat = 0
    var total_lng = 0
    var avg_lng = 0
    for (i=0; i<filtered_pubs.length; i++) {
        total_lat += filtered_pubs[i]['detail_latitude']
        total_lng += filtered_pubs[i]['detail_longitude']
    }
    avg_lat = total_lat/filtered_pubs.length
    avg_lng = total_lng/filtered_pubs.length
    for (i=0; i < filtered_pubs.length; i++) {
        lat_diff = Math.abs(filtered_pubs[i]['detail_latitude'] - avg_lat)
        lng_diff = Math.abs(filtered_pubs[i]['detail_longitude'] - avg_lng)
        tot_diff = lat_diff + lng_diff
        filtered_pubs[i]['distance'] = tot_diff
    }
    filtered_pubs = filtered_pubs.sort((a, b) => {
        if (a.distance < b.distance) {
            return -1;
        }
    });
    return filtered_pubs
}
function center_map_events() {
    console.log('center_map events')
    console.log('filtered_pubs: ' + filtered_pubs.lengtb)
    if (search_string == '') {
        filtered_pubs = map_center_from_pubs_events()
        map.setCenter({lat:filtered_pubs[0]['detail_latitude'], lng:filtered_pubs[0]['detail_longitude']});
    } else {
        filtered_pubs = map_center_from_searchbox()
    }

    var central_map = map.getCenter();
    console.log(central_map.lat(), central_map.lng())
    map.panTo(central_map);
    finalise_results_events()
}
function finalise_results_events() {
    console.log('finalise_results_events')
    console.log('search_string: ' + search_string)
    console.log('filtered_pubs: ' + filtered_pubs.length)
    console.log(document.getElementById('quiz_event').checked)
    if (document.getElementById('quiz_event').checked == true) {
        console.log('Quiz checked')
        populate_header()
        display_results_events('block')
    } else if ((search_string == '') && (filtered_pubs.length == event.length)) {
        console.log('No search string - No filters')
        display_results('none')
    } else if ((search_string != '') && (filtered_pubs.length == event.length)) {
        console.log('Search string filled - No filters')
        filtered_pubs = filtered_pubs.slice(0,99)
        populate_header()
        display_results_events('block')
    } else {
        console.log('Search string filled - Some filters')
        populate_header()
        display_results_events('block')
    }

}
function display_results_events(display) {
    console.log('display_results: ' + display)
    document.getElementById('template_map').style.display = display
    document.getElementById('template_list').style.display = display
    document.getElementById('template_header').style.display = display
}
function on_click_feature_events() {
    console.log('USER INPUT - on click feature')
    for (const [key, value] of Object.entries(review)) {
        if (value.event_filter == 'yes') {
            if (document.getElementById(value.name + "_filter").checked == true) {
                document.getElementById(value.name + "_word").style.color = "white"
                current_carousel = document.getElementById(value.name + "_carousel")
                current_carousel.classList.remove('carousel_off')
                current_carousel.classList.add('carousel_on')
            } else {
                document.getElementById(value.name + "_word").style.color = "black"
                current_carousel = document.getElementById(value.name + "_carousel")
                current_carousel.classList.remove('carousel_on')
                current_carousel.classList.add('carousel_off')
            }
        }
    }
    update_filters_events()
    center_map_events()

}
function on_click_station_events() {
    console.log('USER INPUT - on click station')
    update_filters_events()
    center_map_events()
}

function on_click_direction_events() {
    console.log('USER INPUT - on click direction COLLECTION')
    update_filters_events()
    center_map_events()

}
function update_filters_events() {
    console.log('update_filters events')
    filtered_pubs = filter_all_data_events(event)
    console.log('pre-filter: ' + filtered_pubs.length)
    console.log('post-filter: ' + filtered_pubs.length)
    console.log('filtered_pubs: ' + filtered_pubs.length)
    populate_all_filters_events(filtered_pubs)
}
