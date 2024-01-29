function filter_reset() {
    console.log('FILTER_RESET')
    //console.log('pub count: ' + pub.length)
    all_data = pub
    document.getElementById('template_map').style.display = "none"
    document.getElementById('template_list').style.display = "none"
    document.getElementById('template_header').style.display = "none"
//    col_map
    for (i=0; i<directions_list.length; i++) {
        var filtered_data = all_data.filter(function(pub) {
            return pub.direction_identity == directions_list[i][0]
        })
        document.getElementById(directions_list[i][0] + "_filter").style.display = 'block'
        document.getElementById(directions_list[i][0] + "_filter").checked = false
        document.getElementById(directions_list[i][0] + "_id").style.display = 'block'
        document.getElementById(directions_list[i][0] + "_id").innerHTML = directions_list[i][1] + " (" + filtered_data.length + ")"
    }

    for (i=0; i<stations_directions_list.length; i++) {
        var filtered_data = all_data.filter(function(pub) {
            return pub.station_identity == stations_directions_list[i][0]
        })
        document.getElementById(stations_directions_list[i][0] + "_filter").style.display = 'block'
        document.getElementById(stations_directions_list[i][0] + "_filter").checked = false
        document.getElementById(stations_directions_list[i][0] + "_id").style.display = 'block'
        document.getElementById(stations_directions_list[i][0] + "_id").innerHTML = stations_directions_list[i][1] + " (" + filtered_data.length + ")"
    }

//    for (i=0; i<model_formats['icon_list'].length; i++) {
    for (const [key, value] of Object.entries(review)) {
        if (value.menu_filter == 'yes') {
            var filtered_data = all_data.filter(function(pub) {
                return pub[value.name] == 'true'
            })
            console.log(value.name)
            document.getElementById(value.name + "_filter").style.display = 'block'
            document.getElementById(value.name + "_filter").checked = false
            document.getElementById(value.name + "_id").style.display = 'block'
            document.getElementById(value.name + "_id").innerHTML = value.name + " (" + filtered_data.length + ")"
            if (value.quick_filter == 'yes') {
                console.log('quick filter')
                document.getElementById(value.name + "_word").style.color = "black"
                //document.getElementById(model_formats['icon_list'][i] + "_carousel").style.backgroundColor = "white"
                if (document.getElementById(value.name + "_carousel").classList.contains('carousel_on')) {
                    console.log('carousel on')
                    document.getElementById(value.name + "_carousel").classList.remove('carousel_on')
                    document.getElementById(value.name + "_carousel").classList.add('carousel_off')
                }

            }
//            var filtered_data = all_data.filter(function(pub) {
//              return pub[model_formats['icon_list'][i]] == 'true'
//            })
//            console.log(model_formats['icon_list'][i])
//            document.getElementById(model_formats['icon_list'][i] + "_filter").style.display = 'block'
//            document.getElementById(model_formats['icon_list'][i] + "_filter").checked = false
//            document.getElementById(model_formats['icon_list'][i] + "_id").style.display = 'block'
//            document.getElementById(model_formats['icon_list'][i] + "_id").innerHTML = model_formats['icon_list'][i] + " (" + filtered_data.length + ")"
//            if (model_formats['icon_list'][i] != 'nofeature') {
//                document.getElementById(model_formats['icon_list'][i] + "_word").style.color = "black"
//                //document.getElementById(model_formats['icon_list'][i] + "_carousel").style.backgroundColor = "white"
//                document.getElementById(model_formats['icon_list'][i] + "_carousel").classList.remove('carousel_on')
//                document.getElementById(model_formats['icon_list'][i] + "_carousel").classList.add('carousel_off')
//
//            }

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

    off()
}
