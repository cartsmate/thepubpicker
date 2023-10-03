function filter_reset() {
    console.log('FILTER_RESET')
    for (i=0; i<directions_list.length; i++) {
        var filtered_data = all_data.filter(function(pub) {
            return pub.direction_identity == directions_list[i][0]
        })
        document.getElementById(directions_list[i][0] + "_filter").style.display = 'block'
        document.getElementById(directions_list[i][0] + "_filter").checked = false
        document.getElementById(directions_list[i][0] + "_id").style.display = 'block'
        document.getElementById(directions_list[i][0] + "_id").innerHTML = directions_list[i][1] + " (" + filtered_data.length + ")"
    }

    for (i=0; i<stations_directions_list.length; i++) {
        var filtered_data = all_data.filter(function(pub) {
            return pub.station_identity == stations_directions_list[i][0]
        })
        document.getElementById(stations_directions_list[i][0] + "_filter").style.display = 'block'
        document.getElementById(stations_directions_list[i][0] + "_filter").checked = false
        document.getElementById(stations_directions_list[i][0] + "_id").style.display = 'block'
        document.getElementById(stations_directions_list[i][0] + "_id").innerHTML = stations_directions_list[i][1] + " (" + filtered_data.length + ")"
    }

    for (i=0; i<total_list_obj['icon_list'].length; i++) {
        var filtered_data = all_data.filter(function(pub) {
            return pub[total_list_obj['icon_list'][i]] == 'true'
        })
        document.getElementById(total_list_obj['icon_list'][i] + "_filter").style.display = 'block'
        document.getElementById(total_list_obj['icon_list'][i] + "_filter").checked = false
        document.getElementById(total_list_obj['icon_list'][i] + "_id").style.display = 'block'
        document.getElementById(total_list_obj['icon_list'][i] + "_id").innerHTML = total_list_obj['icon_list'][i] + " (" + filtered_data.length + ")"
    }
    document.getElementById('button_count').innerHTML = all_data.length
}
