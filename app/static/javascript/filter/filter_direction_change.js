function filter_direction_change() {
    console.log('filter direction change')

    all_data = pub
    filter_clear('checks_station')

    filteredArray = []
    for (i=0; i<directions_list.length; i++) {
        if (document.getElementById(directions_list[i][0] + '_filter').checked) {
            filteredArray = stations_directions_list.filter(item => item[2] == directions_list[i][0]);
        }
        filteredArray.push(filteredArray)
    }
    console.log('filteredArray')
    console.log(filteredArray.length)
    console.log(filteredArray)

    newlist = []
    for (a=0; a<filteredArray.length; a++){
        newlist.push(filteredArray[a][0])
    }
    console.log(newlist)

//    filteredArray = stations_directions_list.filter(item => item[2] == value);

    for (i=0; i<stations_directions_list.length; i++) {
        //console.log('newlist: ' + newlist)
        filtered_data = []
        if (newlist.includes(stations_directions_list[i][0])) {
            //console.log('station: ' + stations_directions_list[i][0])
            var filtered_data = pub.filter(function(x) {
                return x.station_identity == stations_directions_list[i][0]
            })
//        } else {
//            filtered_data.length = 0
        }
        //console.log(filtered_data)
//        console.log('i: ' + i)
//        var filtered_data = pub['station_identity'].filter(item => filteredArray[0].includes(item))

//        var filtered_data = pub.filter(function(x) {
////            return x.station_identity == filteredArray[i][0]
//            return x.station_identity == filteredArray[i][0]
//        })

        record = document.createElement("div")
        record.className = 'row'
        checks_area = document.getElementById('checks_station')
        checks_area.appendChild(record)

        label = document.createElement("div")
        label.style.width = "150px"
        label.innerHTML = "<a style='font-size: 12px; padding: 0px; margin: 0px;'>" + stations_directions_list[i][1] + "( " + filtered_data.length + " )" + "</a>"
        record.appendChild(label)

        input = document.createElement("input")
        input.type = "checkbox"
//        input.id = stations_directions_list[i][0]
        input.id = stations_directions_list[i][0] + "_filter"
        input.onclick = function() { on_click_station() }
        //input.onclick = "station_direction_changed()"
        if (filtered_data.length > 0) {
            label.style.display = "block"
            input.style.display = "block"
//            station_options++
        } else {
            label.style.display = "none"
            input.style.display = "none"
        }
        record.appendChild(input)
    }
}
