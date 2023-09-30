function filter_direction_change(all_data) {
    console.log('FILTER_DIRECTION_CHANGE')


    for (i=0; i<direction_list.length; i++) {
        if (document.getElementById(direction_list[i]).checked) {
            filteredArray = stations_directions_list.filter(item => item[2] == direction_list[i]);
        }
    }
    filteredArray = stations_directions_list.filter(item => item[2] == value);

    for (i=0; i<stations_directions_list.length; i++) {
        var filtered_data = all_data.filter(function(pub) {
            return pub.station_identity == stations_directions_list[i][0]
        })

        record = document.createElement("div")
        record.className = 'row'
        checks_area = document.getElementById('checks_station')
        checks_area.appendChild(record)

        label = document.createElement("div")
        label.style.width = "150px"
        label.innerHTML = stations_directions_list[i][1] + "( " + filtered_data.length + " )"
        record.appendChild(label)

        input = document.createElement("input")
        input.type = "checkbox"
        input.id = stations_directions_list[i][0]
        input.onclick = "station_direction_changed()"
        record.appendChild(input)
    }
}
