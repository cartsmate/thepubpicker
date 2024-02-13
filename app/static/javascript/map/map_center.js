function center_map() {
    console.log('center_map')

    filtered_pubs = filter_all_data()
    populate_all_filters(filtered_pubs)

    if (window.navigator.onLine == true) {
        if (search_string == '') {
            filtered_pubs = map_center_from_pubs(filtered_pubs)
            map.setCenter({lat:filtered_pubs[0]['detail_latitude'], lng:filtered_pubs[0]['detail_longitude']});
        } else {
            filtered_pubs = map_center_from_searchbox(filtered_pubs)
        }

        if (document.getElementById('sunday_filter').checked == false && document.getElementById('saturday_filter').checked == false
            && document.getElementById('friday_filter').checked == false && document.getElementById('thursday_filter').checked == false
            && document.getElementById('wednesday_filter').checked == false && document.getElementById('tuesday_filter').checked == false
            && document.getElementById('monday_filter').checked == false) {

            unique_data = get_unique_list(filtered_pubs)

            /*
            unique_data = filtered_pubs.filter(function (a) {
                var key = a.pub_identity
                if (!this[key]) {
                    this[key] = true;
                    return true;
                }
            }, Object.create(null));
            */

        } else {
            console.log('DAY selected')
            unique_data = filtered_pubs
        }
        var central_map = map.getCenter();
        map.panTo(central_map);
    } else {
        list_setup_beta(filtered_pubs)
    }
    finalise_results(filtered_pubs)
}

function map_center_from_searchbox(filtered_pubs) {
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
function map_center_from_pubs(filtered_pubs) {
    console.log('map_center_from_pubs')
    //console.log('filtered_pubs: ' + filtered_pubs.length)
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
    console.log(avg_lat)
    console.log(avg_lng)
    console.log('PRE-DISTANCE CALC: filtered_pubs')
    console.log(filtered_pubs)
    for (i=0; i < filtered_pubs.length; i++) {
        lat_diff = Math.abs(filtered_pubs[i]['detail_latitude'] - avg_lat)
        lng_diff = Math.abs(filtered_pubs[i]['detail_longitude'] - avg_lng)
        tot_diff = lat_diff + lng_diff
        filtered_pubs[i]['distance'] = tot_diff
    }
    console.log('PRE-filtered_pubs')
    console.log(filtered_pubs)
    filtered_pubs = filtered_pubs.sort((a, b) => {
        if (a.distance < b.distance) {
            return -1;
        }
    });
    console.log('POST-filtered_pubs')
    console.log(filtered_pubs)
    return filtered_pubs
}
