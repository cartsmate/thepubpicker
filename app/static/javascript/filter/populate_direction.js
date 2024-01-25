function populate_direction(pub_filtered) {
    console.log('---- direction: ' + pub_filtered.length)

    //document.getElementById('button_direction').innerHTML = '<a>by area (' + pub_filtered.length + ')</a>'
    var select= document.getElementById("direction");
    var option = document.createElement("option");
    filter_clear('checks_direction')

    for (i=0; i<directions_list.length; i++) (function(i, pub_filtered){
        var filtered_data = pub_filtered.filter(function(x) {
            return x.direction_identity == directions_list[i][0]
        })
        record = document.createElement("div")
        record.className = "row"
        checks_direction = document.getElementById('checks_direction')

        label = document.createElement("div")
        label.style.width = "230px"
        label.style.font = "8px"
        label.id = directions_list[i][0] + "_id"
        label.innerHTML = "<a style='font-size: 12px; padding: 0px; margin: 0px;'>" + directions_list[i][1] + " (" + filtered_data.length + ") " + "</a>"
        record.appendChild(label)
        checks_direction.appendChild(record)

        input = document.createElement("input")
        input.type = "checkbox"
        input.id = directions_list[i][0] + "_filter"
        input.onclick = function() { on_click_direction() }

        if (filtered_data.length > 0) {
            label.style.display = "block"
        } else {
            label.style.display = "none"
        }
        if (filtered_data.length == pub_filtered.length) {
            input.checked = true
        }

        label.appendChild(input)
    })(i, pub_filtered)
}

//function on_click_direction() {
//    console.log('USER INPUT - on click direction COLLECTION')
//
//    pub_filtered = filter_all_data(pub)
//    console.log(pub_filtered.length)
//    list_setup(pub_filtered)
//
//    populate_station(pub_filtered)
//    populate_feature(pub_filtered)
//
//    populate_header(pub_filtered.length)
//
//    map_load_collection(pub_filtered)
//
//}
