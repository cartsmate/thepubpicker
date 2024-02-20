function filter_by_station(filtered_data) {

    ticked_list = []
    for (i=0; i<stations_directions_list.length; i++) {
        if (document.getElementById(stations_directions_list[i][0] + "_filter").checked) {
            ticked_list.push(stations_directions_list[i][0])
        }
    }

    ticked_data = []
    if (ticked_list.length>0) {
        for (j=0; j<ticked_list.length; j++) {
            var filtered_data = filtered_data.filter(function(item) {
                return item.station_identity == ticked_list[j]
            })
            ticked_data = ticked_data.concat(filtered_data)
        }
    } else {
        ticked_data = filtered_data
    }
    //console.log(ticked_data)
    console.log('---- station OUT: ' + ticked_data.length)
    return ticked_data
}
