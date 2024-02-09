function get_filter_values() {

    filter_list = []
    direction_list = ['dl']
    for (i=0; i<directions_list.length; i++) {
        if (document.getElementById(directions_list[i][0] + "_filter").checked == true) {
            direction_list.push(directions_list[i][0])
//            console.log(directions_list[i][0] + " : is clicked")
        } else {
//            console.log(directions_list[i][0] + " : is NOT clicked")
        }
    }
    console.log(direction_list)
    filter_list.push(direction_list)
    //console.log(filter_list)

    station_list = ['sl']
    for (i=0; i<stations_directions_list.length; i++) {
//        console.log(stations_directions_list[i][0])
        if (document.getElementById(stations_directions_list[i][0] + "_filter").checked == true) {
            station_list.push(stations_directions_list[i][0])
//            console.log(stations_directions_list[i][0] + " : is clicked")
        } else {
//            console.log(stations_directions_list[i][0] + " : is NOT clicked")
        }
    }
    //console.log(station_list)
    filter_list.push(station_list)
    //console.log(filter_list)

    feature_list = ['fl']
//    for (i=0; i<model_formats['icon_list'].length; i++) {
//        if (document.getElementById(model_formats['icon_list'][i] + "_filter").checked == true) {
    for (const [key, value] of Object.entries(review)) {
        if (value.filter == 'yes') {
            if (document.getElementById(value.name + "_filter").checked == true) {
                feature_list.push(value.name)
            }
        }
    }
//    console.log(feature_list)
    filter_list.push(feature_list)
//    console.log(filter_list)

    return filter_list
}
