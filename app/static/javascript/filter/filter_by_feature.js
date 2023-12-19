function filter_by_feature(filtered_data) {
    console.log('FILTER BY FEATURE')
    console.log('received data')
    console.log(filtered_data)
/*
    ticked_list = []

    for (i=0; i<filtered_data.length; i++) {
//        console.log('out: ' + stations_directions_list[i][0])
        if (document.getElementById(model_formats['icon_list'][i] + "_filter").checked) {
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

    */
    for (i=0; i<model_formats['icon_list'].length; i++) {
        console.log(model_formats['icon_list'][i])
        if (document.getElementById(model_formats['icon_list'][i] + "_filter").checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return pub[model_formats['icon_list'][i]] == 'true'
                })
        } else {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub[model_formats['icon_list'][i]] == 'true' || pub[model_formats['icon_list'][i]] == 'false' || pub[model_formats['icon_list'][i]] == '')
                });
        }
    }
    console.log('sent data')
    console.log(filtered_data)

    return filtered_data

}
