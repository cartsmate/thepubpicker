function filter_reset() {
    console.log('FILTER_RESET')
    //console.log('pub count: ' + pub.length)
    all_data = pub
    document.getElementById('template_map').style.display = "none"
    document.getElementById('template_list').style.display = "none"
    document.getElementById('template_header').style.display = "none"

    populate_direction(pub)

    populate_station(pub)

    for (const [key, value] of Object.entries(review)) {
        console.log('-- reset features')
        if (value.menu_filter) {
            var filtered_data = all_data.filter(function(pub) {
                return pub[value.name] == '1'
            })
            //console.log(value.name)
            document.getElementById(value.name + "_filter").style.display = 'block'
            document.getElementById(value.name + "_filter").checked = false
            document.getElementById(value.name + "_id").style.display = 'block'
            document.getElementById(value.name + "_id").innerHTML = value.name + " (" + filtered_data.length + ")"
            if (value.quick_filter) {
                //console.log('quick filter')
                //document.getElementById(value.name + "_word").style.color = "black"
                //document.getElementById(model_formats['icon_list'][i] + "_carousel").style.backgroundColor = "white"
                if (document.getElementById(value.name + "_carousel").classList.contains('carousel_on')) {
                    //console.log('carousel on')
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

    hide_filters()
}
