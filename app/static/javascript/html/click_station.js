function click_station(id) {
    console.log("CLICK_STATION")
    console.log('station id: ' + id)
    console.log(stations_directions_list)
    new_direction_array = stations_directions_list.filter(item => item[0] == id)
    console.log(new_direction_array)
    console.log('station name: ' + new_direction_array[0][1])
    console.log('direction: ' + new_direction_array[0][2])
    document.getElementById(id + "_filter").checked = true
    on_click()
}
