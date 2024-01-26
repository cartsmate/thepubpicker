//const delay = ms => new Promise(res => setTimeout(res, ms));
function update_results_search(central_obj) {
    console.log('update result search')
    for (i=0; i < filtered_pubs.length; i++) {
        lat_diff = Math.abs(filtered_pubs[i]['detail_latitude'] - central_obj.lat)
        lng_diff = Math.abs(filtered_pubs[i]['detail_longitude'] - central_obj.lng)
        tot_diff = lat_diff + lng_diff
        filtered_pubs[i]['distance'] = tot_diff
    }
    update_results_final()
}
function update_results_final() {
    filtered_pubs = filtered_pubs.sort((a, b) => {
        if (a.distance < b.distance) {
            return -1;
        }
    });
    map.setCenter({lat:filtered_pubs[0]['detail_latitude'], lng:filtered_pubs[0]['detail_longitude']});
    display_results('block')
}
function update_results(central_obj) {
    console.log('update result')

    filtered_pubs = filter_all_data()
    populate_all_filters(filtered_pubs)

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
    update_results_final()

}
function display_results(display) {
    document.getElementById('template_map').style.display = display
    document.getElementById('template_list').style.display = display
    document.getElementById('template_header').style.display = display
}
function on_click_feature() {
    console.log('USER INPUT - on click feature')
    for (const [key, value] of Object.entries(review)) {
        if (value.quick_filter == 'yes') {
            if (document.getElementById(value.name + "_filter").checked == true) {
                document.getElementById(value.name + "_word").style.color = "white"
                current_carousel = document.getElementById(value.name + "_carousel")
                current_carousel.classList.remove('carousel_off')
                current_carousel.classList.add('carousel_on')
/*

                console.log(carousel_order)
                for (var i = 0; i < carousel_order.length; i++) {
                    console.log(carousel_order[i])
                    console.log(value.name)
                    if (carousel_order[i]['quick_filter_name'] == value.name) {
                        var clicked_position = carousel_order[i]['quick_filter_degree']
                        var current_position = carousel_position
                        console.log('clicked feature: ' + clicked_position)
                        console.log('carousel_position: ' + carousel_position)
                        var moves = clicked_position - carousel_position
                        if (moves > 0) {
                            for (i=0; i < Math.abs(moves); i++) {
//                                await delay(1000);
                                click_left()
                            }

                        } else {
                            for (i=0; i < Math.abs(moves); i++) {
//                                await delay(1000);
                                click_right()
                            }
                        }
                        console.log('new_carousel_position: ' + carousel_position)
                        break;
                    }
                }
                */
            } else {
                document.getElementById(value.name + "_word").style.color = "black"
                current_carousel = document.getElementById(value.name + "_carousel")
                current_carousel.classList.remove('carousel_on')
                current_carousel.classList.add('carousel_off')
            }
        }
    }
    update_results()
}
function on_click_station() {
    console.log('USER INPUT - on click station')
//    filtered_pubs = filter_all_data(pub)
//    populate_all_filters(filtered_pubs)
    update_results('block')
}

function on_click_direction() {
    console.log('USER INPUT - on click direction COLLECTION')

//    filtered_pubs = filter_all_data(pub)
//    populate_all_filters(filtered_pubs)
    update_results('block')

}
