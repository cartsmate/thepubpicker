function populate_station(pub_filtered) {
    console.log('populate station')
    console.log('data in: ' + pub_filtered.length)
//    console.log('pub count: ' + pub.length)
    //pub = pub_filtered
    document.getElementById('button_station').innerHTML = '<a>by station (' + pub_filtered.length + ')</a>'
    var select= document.getElementById("station");
    var option = document.createElement("option");
    filter_clear('checks_station')
    document.getElementById('content_station').classList.remove("station-box");
    var station_options = 0
    for (i=0; i<stations_directions_list.length; i++) {
        var filtered_data = pub_filtered.filter(function(x) {
            return x.station_identity == stations_directions_list[i][0]
        })
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
    if (station_options.length > 6) {
        document.getElementById('content_station').classList.add("station-box");
    }
}

function on_click_station() {
    console.log('USER INPUT - on click station')
    pub_filtered = filter_all_data(pub)
    list_setup(pub_filtered)
    populate_feature(pub_filtered)
    populate_header(pub_filtered.length)
}
