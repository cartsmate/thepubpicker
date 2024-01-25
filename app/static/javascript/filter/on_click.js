function update_results() {
    console.log('update result')
        filtered_pubs = filter_all_data()
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
    map.setCenter({lat:avg_lat, lng:avg_lng});

    display_results('block')

}
function display_results(display) {
    document.getElementById('template_map').style.display = display
    document.getElementById('template_list').style.display = display
    document.getElementById('template_header').style.display = display
}
function on_click_feature() {
    console.log('USER INPUT - on click feature')
//    for (i=0; i < model_formats['icon_list'].length; i++) {
//        if (model_formats['icon_list'][i] != 'nofeature') {
    filtered_pubs = filter_all_data(pub)
    populate_all_filters(filtered_pubs)
    for (const [key, value] of Object.entries(review)) {
        if (value.quick_filter == 'yes') {
            if (document.getElementById(value.name + "_filter").checked == true) {
                document.getElementById(value.name + "_word").style.color = "white"
//                document.getElementById(value.name + "_carousel").style.backgroundColor = '#808000'
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
                        if (clicked_position != carousel_position) {
//                        while (clicked_position != carousel_position) {
                            let stepCount = 360 / 7;
                            let count = 0;
                            let x = count += (stepCount * moves)
                            if(x <= 0){
                                x *= -1; //turn to positive number again
                                document.querySelector('._carousel').style.transform = `rotateY(${x}deg)`;
                                carousel_position = carousel_position - moves
                            } else if( x >= 0){
                                document.querySelector('._carousel').style.transform = `rotateY(-${x}deg)`;
                                carousel_position = carousel_position + moves
                            }

//                            if (carousel_position < 0) { carousel_position = 6 }
                            console.log('new_carousel_position: ' + carousel_position)
                        }
                        break;
                        }
                }
                */
            } else {
                document.getElementById(value.name + "_word").style.color = "black"
//                document.getElementById(value.name + "_carousel").style.backgroundColor = "white"
                current_carousel = document.getElementById(value.name + "_carousel")
                current_carousel.classList.remove('carousel_on')
                current_carousel.classList.add('carousel_off')

            }

    }
    update_results()
}
function on_click_station() {
    console.log('USER INPUT - on click station')
    filtered_pubs = filter_all_data(pub)
    populate_all_filters(filtered_pubs)
    display_results('block')
}

function on_click_direction() {
    console.log('USER INPUT - on click direction COLLECTION')

    filtered_pubs = filter_all_data(pub)
    populate_all_filters(filtered_pubs)
    display_results('block')

}
