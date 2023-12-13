function populate_station(pub_filtered) {
    console.log('populate station')
//    console.log('pub filtered: ' + pub_filtered.length)
//    console.log('pub count: ' + pub.length)
    //pub = pub_filtered
    document.getElementById('button_stat').innerHTML = '<a>by station (' + pub_filtered.length + ')</a>'
    var select= document.getElementById("station");
    var option = document.createElement("option");
    filter_clear('checks_station')
    document.getElementById('content_stat').classList.remove("station-box");
    var station_options = 0
    for (i=0; i<stations_directions_list.length; i++) {
        var filtered_data = pub_filtered.filter(function(x) {
            return x.station_identity == stations_directions_list[i][0]
        })
        if (filtered_data.length > -1) {
            record = document.createElement("div")
            record.className = 'row'
            checks_area = document.getElementById('checks_station')
            checks_area.appendChild(record)

            label = document.createElement("div")
            label.style.width = "200px"
            label.id = stations_directions_list[i][0] + "_id"
            label.innerHTML = "<a style='font-size: 12px; padding: 0px; margin: 0px;'>" + stations_directions_list[i][1] + " (" + filtered_data.length + ")" + "</a>"
            record.appendChild(label)

            input = document.createElement("input")
            input.type = "checkbox"
            input.id = stations_directions_list[i][0] + "_filter"
            input.onclick = function() { on_click_station() }
            if (filtered_data.length > 0) {
                label.style.display = "block"
                station_options++
            } else {
                label.style.display = "none"
            }
            label.appendChild(input)
        }
    }
    if (station_options.length > 6) {
        document.getElementById('content_stat').classList.add("station-box");
    }
}

//function f_b_d(xx) {
//    console.log('inside f_b_d')
//    console.log('i got it right: ' + xx)
//    }

function on_click_station() {
    console.log('ON CLICK STATION')
    pub_filtered = filter_all_data(pub)
    list_setup(pub_filtered)
    populate_feature(pub_filtered)
    populate_review(pub_filtered)
    populate_header(pub_filtered.length)
//    document.getElementById('pub_length').innerHTML = "<a>" + "Number of pubs: " + pub_filtered.length + "</a>"

//    for (i=0; i<total_list_obj['icon_list'].length; i++) {
//        var filtered_data = data.filter(function(pub) {
//            return pub[total_list_obj['icon_list'][i]] == 'true'
//        })
//        document.getElementById(total_list_obj['icon_list'][i] + "_id").innerHTML = total_list_obj['icon_list'][i] + " (" + filtered_data.length + ")"
//    }
//    on_click()
}
/*
function eventFunc() {
    page_layout('home')
    data = filter_all_data(all_data)
    //populate_direction(data)
    //populate_station(data)
    //populate_feature(data)
    table_setup(data)

    }
*/