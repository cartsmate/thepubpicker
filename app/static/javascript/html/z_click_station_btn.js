function click_station_btn() {
    console.log("CLICK_STATION_BTN")

    id = document.getElementById('station_identity').value

    //new_direction_array = stations_directions_list.filter(item => item[0] == id)

    //document.getElementById("direction").value = new_direction_array[0][2]

    //document.getElementById("search-input-navbar").value = ''


    filtered_data = filter_by_station(filtered_data)
    console.log('filtered_data: ' + filtered_data)
    update_data(filtered_data)
    update_icons(filtered_data)

    page_layout('home')


}
