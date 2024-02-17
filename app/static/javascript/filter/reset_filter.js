function filter_reset() {
    console.log('FILTER_RESET: ' + pub_all.length)

    all_data = pub_all
    document.getElementById('template_map').style.display = "none"
    document.getElementById('template_list').style.display = "none"
    document.getElementById('template_header').style.display = "none"

    create_filter_direction(pub_all)

    create_filter_station(pub_all)

    for (const [key, value] of Object.entries(review)) {
        console.log('-- reset features')
        if (value.menu_filter) {
            var filtered_data = all_data.filter(function(x) {
                return x[value.name] == '1'
            })
            //console.log(value.name)
            document.getElementById(value.name + "_filter").style.display = 'block'
            document.getElementById(value.name + "_filter").checked = false
            document.getElementById(value.name + "_id").style.display = 'block'
            document.getElementById(value.name + "_id").innerHTML = value.name + " (" + filtered_data.length + ")"
            if (value.quick_filter) {
                if (document.getElementById(value.name + "_carousel").classList.contains('carousel_on')) {
                    document.getElementById(value.name + "_carousel").classList.remove('carousel_on')
                    document.getElementById(value.name + "_carousel").classList.add('carousel_off')
                }
            }
        }
    }
    //populate_diary(pub)

    for (const [key, value] of Object.entries(diary)) {
        console.log('--reset diary')
        if (value.menu_filter) {
            document.getElementById(value.name + "_filter").checked = false
        }
    }

    console.log('--reset pub identity')
    for (i=0; i<pub_all.length; i++) {
//        console.log(timeout_list[i])
        document.getElementById(pub_all[i]['pub_identity'] + "_filter").checked = false;
    }
    document.getElementById('search-input-navbar').value = ''
    document.getElementById('active_filter_count').value = '0'
    document.getElementById('active_filter_count').style.display = "none"

    if (document.getElementById("filter_overlay_btn").classList.contains('filters_on')) {
        document.getElementById("filter_overlay_btn").classList.remove('filters_on')
        document.getElementById("filter_overlay_btn").classList.add('filters_off')
    }
    if (document.getElementById("filter_overlay_span").classList.contains('filters_span_on')) {
        document.getElementById("filter_overlay_span").classList.remove('filters_span_on')
        document.getElementById("filter_overlay_span").classList.add('filters_span_off')
    }

    document.getElementById('button_direction').style.fontWeight = 'normal'
    document.getElementById('button_station').style.fontWeight = 'normal'
    document.getElementById('button_feature').style.fontWeight = 'normal'
    document.getElementById('button_event').style.fontWeight = 'normal'
    document.getElementById('button_diary').style.fontWeight = 'normal'

    hide_filters()
}
