function finalise_results() {
    console.log('finalise_results')
    if ((search_string == '') && (filtered_pubs.length == pub_all.length)) {
        display_results('none')
    } else if ((search_string != '') && (filtered_pubs.length == pub_all.length)) {
        filtered_pubs = filtered_pubs.slice(0,99)
        populate_header()
        display_results('block')
    } else {
        populate_header()
        display_results('block')
    }

}
function display_results(display) {
    console.log('display_results: ' + display)
    document.getElementById('template_map').style.display = display
    document.getElementById('template_list').style.display = display
    document.getElementById('template_header').style.display = display
}
function update_filters() {
    filtered_pubs = filter_by_()
    var unique_filter = get_unique_list(filtered_pubs)
    console.log('unique_filter: ' + unique_filter.length)
    return filtered_pubs
}
function on_click_event() {
    console.log('USER INPUT - on click event')
    for (const [key, value] of Object.entries(review)) {
        if (value.quick_filter) {
            if (document.getElementById(value.name + "_filter").checked == true) {
                current_carousel = document.getElementById(value.name + "_carousel")
                current_carousel.classList.remove('carousel_off')
                current_carousel.classList.add('carousel_on')
            } else {
                current_carousel = document.getElementById(value.name + "_carousel")
                current_carousel.classList.remove('carousel_on')
                current_carousel.classList.add('carousel_off')
            }
        }
    }
//    filtered_pubs = update_filters()
//    center_map(filtered_pubs)
    center_map()
}
function on_click_feature() {
    console.log('USER INPUT - on click feature')
    for (const [key, value] of Object.entries(review)) {
        if (value.quick_filter) {
            if (document.getElementById(value.name + "_filter").checked) {
                current_carousel = document.getElementById(value.name + "_carousel")
                current_carousel.classList.remove('carousel_off')
                current_carousel.classList.add('carousel_on')
            } else {
                current_carousel = document.getElementById(value.name + "_carousel")
                current_carousel.classList.remove('carousel_on')
                current_carousel.classList.add('carousel_off')
            }
        }
    }
//    filtered_pubs = update_filters()
//    center_map(filtered_pubs)
    center_map()
}
function on_click_station() {
    console.log('USER INPUT - on click station')
//    filtered_pubs = update_filters()
//    center_map(filtered_pubs)
    center_map()
}

function on_click_direction(clicked_value) {
    console.log('USER INPUT - on click direction')
//    filtered_pubs = update_filters()
//    center_map(filtered_pubs)
    center_map()
}

function on_click_days(clicked_day) {
    console.log('USER INPUT - on_click_days')
    var words = clicked_day + "_filter"
    console.log(words)
    if (document.getElementById(clicked_day + "_filter").checked) {
        document.getElementById(clicked_day + "_filter").checked = false
        document.getElementById(clicked_day + "_face").style.background = "#f5f5f5"
        document.getElementById(clicked_day + "_caption").style.color = "black"
    } else {
        document.getElementById(clicked_day + "_filter").checked = true
        document.getElementById(clicked_day + "_face").style.background = "#808000"
        document.getElementById(clicked_day + "_caption").style.color = "white"
    }
//    filtered_pubs = update_filters()
//    center_map(filtered_pubs)
    center_map()
}
