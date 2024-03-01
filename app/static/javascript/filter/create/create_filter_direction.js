function create_filter_direction(pub_filtered) {
    console.log('---- create_filter_direction: ' + pub_filtered.length)

    var select= document.getElementById("direction");
    var option = document.createElement("option");

    clear_filter('checks_direction')

    for (i=0; i<directions_list.length; i++) (function(i, pub_filtered){
        var filtered_data = pub_filtered.filter(function(x) {
            return x.direction_identity == directions_list[i][0]
        })
        var unique_filter = get_unique_list(filtered_data)

        record = document.createElement("div")
        record.className = "row"
        checks_direction = document.getElementById('checks_direction')

        label = document.createElement("div")
        label.style.width = "230px"
        label.style.font = "8px"
        label.id = directions_list[i][0] + "_id"
        label.innerHTML = "<div style='font-size: 12px; padding: 0px; margin: 0px;'>" + directions_list[i][1] + " (" + unique_filter.length + ") " + "</div>"
        record.appendChild(label)
        checks_direction.appendChild(record)

        input = document.createElement("input")
        input.type = "checkbox"
        input.id = directions_list[i][0] + "_filter"
        input.onclick = function() { on_click_direction(this.value) }

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
