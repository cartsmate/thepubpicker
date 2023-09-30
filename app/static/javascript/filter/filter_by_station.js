function filter_by_station(data) {
    console.log('FILTER_BY_STATION')
    ticked_list = []
    //var filtered_data = {{ all_data | tojson }}
    console.log('received data')
    console.log(data.length)
    for (i=0; i<stations_directions_list.length; i++) {
        if (typeof document.getElementById(directions_list[i]) === 'undefined') {
            console.log('ujndefinted here')
        } else {
            if (document.getElementById(directions_list[i]) !== null) {
                if (document.getElementById(stations_directions_list[i][0]).checked) {
                    console.log('checked at: ' + stations_directions_list[i][1])
                    ticked_list.push(stations_directions_list[i][0])
                }
            }
        }
    }

    ticked_data = []
    if (ticked_list.length>0) {
        for (j=0; j<ticked_list.length; j++) {
            //filtered_data = {{ all_data | tojson }}
            var filtered_data = data.filter(function(item) {
                return item.station_identity == ticked_list[j]
            })
            ticked_data = ticked_data.concat(filtered_data)
        }
    } else {
        ticked_data = data
    }
    console.log('sent data')
    console.log(ticked_data.length)
    return ticked_data
}
