function filter_by_station_events(data) {
    console.log('---- station: ' + data.length)
    //console.log('data in: ' + data.length)
    ticked_list = []

    for (i=0; i<stations_directions_list.length; i++) {
//        console.log('out: ' + stations_directions_list[i][0])
        if (document.getElementById(stations_directions_list[i][0] + "_filter").checked) {
            //console.log('in: ' + stations_directions_list[i])
            ticked_list.push(stations_directions_list[i][0])
        }
    }

    ticked_data = []
    if (ticked_list.length>0) {
        for (j=0; j<ticked_list.length; j++) {
            var filtered_data = data.filter(function(item) {
                return item.station_identity == ticked_list[j]
            })
            ticked_data = ticked_data.concat(filtered_data)
        }
    } else {
        ticked_data = data
    }
    //console.log(ticked_data)
    return ticked_data
}