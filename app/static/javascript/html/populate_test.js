function get_going() {
    //data = populate_test()
    populate_form(all_data)
    console.log('google key')
    console.log(config2['google_key'])
    map_load(config2['google_key'])
}

function initMap() {
    console.log("INIT MAP");
    map = show_map(51.52, -0.127, document.getElementById('map'))
    var markersArray = []
    if (window.navigator.onLine == true) {
        document.getElementById('the_map').style.display = 'block'
        document.getElementById('map').style.display = 'block'
        var new_data = [{pub_name: "placeholder", pub_latitude: 51.52, pub_longitude: -0.127, colour: "#000000"}]
        add_markers(map, new_data)
        var defaultBounds = new google.maps.LatLngBounds(
          new google.maps.LatLng(51.68, 0.3),      // N, E
          new google.maps.LatLng(51.40, -0.549));  // S, W

        const input = document.getElementById("search-input-navbar");
        const searchBox = new google.maps.places.SearchBox(input, {
            bounds: defaultBounds
        });
        listen_search(map, searchBox);
    }
    runner(map)
    if (data.length > 0 && data.length <= 50) {
        console.log('<= 50 pubs to show')
        add_markers(map, data)
    } else {
        console.log('> 50 pubs')
        //console.log('all directions')
        json_array = calculate_directions_count(data)
        add_markers_2(map, json_array)
    //} else {
    //    console.log('one direction')
    //    json_array_stations = calculate_stations_count(data)
    //    add_markers_3(map, json_array_stations)
    }
}

function runner(map) {
    //page_layout('home')
    console.log('RUNNER')
    //document.getElementById('all_filters').style.display = "block"
    if ('{{pub_id}}' == '0') {
        //display_counter('{{counter}}');
        //data = get_flask_data({{all_data | tojson}})
        //console.log(data)
        //populate_all_filters(all_data)

        table_setup(data)
    } else {
        console.log('all_data')
        console.log(all_data)
        console.log('pub_id == ' + all_data[0]['pub_identity'])
        click_pub(all_data[0]['pub_identity'])
    }
}

function populate_test() {
    console.log('POPULATE_TEST')

    filtered_data = all_data

    filtered_data = filter_by_station(filtered_data)

    filtered_data = filter_by_feature(filtered_data)

    filtered_data = filter_sort(filtered_data)
//    if (document.getElementById('search-input-navbar').value != '') {
//        console.log('sort by distance')
//        let sortedDates = filtered_data.sort((p1, p2) => (p1.distance > p2.distance) ? 1 : (p1.distance < p2.distance) ? -1 : 0);
//        filtered_data = sortedDates
//    } else {
//        console.log('sort by rank')
//        filtered_data = filtered_data.sort((a, b) => {
//            if (a.rank < b.rank) {
//                return -1;
//                }
//            });
//    }
    console.log('filtered_data')
    console.log(filtered_data)
    return filtered_data
}

function compare(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}
