function finalise_results() {
    console.log('finalise_results')
    console.log('search_string: ' + search_string)
    console.log('filtered_pubs: ' + filtered_pubs.length)
    if ((search_string == '') && (filtered_pubs.length == pub_all.length)) {
        console.log('No search string - No filters')
        display_results('none')
    } else if ((search_string != '') && (filtered_pubs.length == pub_all.length)) {
        console.log('Search string filled - No filters')
        filtered_pubs = filtered_pubs.slice(0,99)
        populate_header()
        display_results('block')
    } else {
        console.log('Search string filled - Some filters')
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
    center_map()
}
function on_click_station() {
    console.log('USER INPUT - on click station')
    center_map()
}

function on_click_direction() {
    console.log('USER INPUT - on click direction COLLECTION')
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
    center_map()
}
