function populate_feature(pub_filtered) {
    console.log('populate feature')
    console.log('data in: ' + pub_filtered.length)
    filter_clear('checks_feature')
    for (i=0; i<model_formats['icon_list'].length; i++) {
        var filtered_data = pub_filtered.filter(function(x) {
            return x[model_formats['icon_list'][i]] == '1'
        })
        record = document.createElement("div")
        record.className = 'row'
        checks_feature = document.getElementById("checks_feature")

        label = document.createElement("div")
        label.style.width = "230px"
        label.style.font = "8px"
        label.id = model_formats['icon_list'][i] + "_id"
        label.innerHTML = "<a style='font-size: 12px; padding: 0px; margin: 0px;'>" + model_formats['icon_list'][i] + " (" + filtered_data.length + ")" + "</a>"
        record.appendChild(label)
        checks_feature.appendChild(record)

        input = document.createElement("input")
        input.type = "checkbox"
        input.id = model_formats['icon_list'][i] + "_filter"
        input.onclick = function() { on_click_feature() }
        if (filtered_data.length > 0) {
            label.style.display = "block"
        } else {
            label.style.display = "none"
        }
        if (filtered_data.length == pub_filtered.length) {
            input.checked = true
        }
        label.appendChild(input)
    }
}

function on_click_feature() {
    console.log('USER INPUT - on click feature')
    pub_filtered = filter_all_data(pub)
    list_setup(pub_filtered)

    //populate_direction(pub_filtered)
    //populate_station(pub_filtered)

    populate_feature(pub_filtered)
    populate_header(pub_filtered.length)
    map_load_collection(pub_filtered)
}
