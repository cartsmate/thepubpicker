function update_results() {
    console.log('update result')
    pub_filtered = filter_all_data(pub)
    if (pub_filtered.length < pub.length) {
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
