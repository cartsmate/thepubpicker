function dropdown_click_station(id) {
    console.log("DROPDOWN_CLICK_STATION")

    //document.getElementById('pub_read').style.display = 'none'
    //id = document.getElementById('x_pub_identity').value
    /*
    document.getElementById('x_station').value = id
    console.log('id')
    console.log(id)
    document.getElementById('x_brunch').value = 'false'
    document.getElementById('x_dart').value = 'false'
    document.getElementById('x_entertain').value = 'false'
    document.getElementById('x_favourite').value = 'false'
    document.getElementById('x_garden').value = 'false'
    document.getElementById('x_history').value = 'false'
    document.getElementById('x_late').value = 'false'
    document.getElementById('x_music').value = 'false'
    document.getElementById('x_pool').value = 'false'
    document.getElementById('x_quiz').value = 'false'
    document.getElementById('x_roast').value = 'false'
    document.getElementById('x_sport').value = 'false'
    */
    new_direction_array = stations_directions_list.filter(item => item[0] == id)
    //document.getElementById("x_station_name").value = new_direction_array[0][1]
    //document.getElementById("x_direction").value = new_direction_array[0][2]
    //document.getElementById("x_direction_name").value = new_direction_array[0][3]

    //document.getElementById("x_search").value = ''
    //document.getElementById("search-output-navbar").value = ''

    var desiredValue = new_direction_array[0][1]
    var el = document.getElementById("station");
    for(var i=0; i<el.options.length; i++) {
      if ( el.options[i].text == desiredValue ) {
        el.selectedIndex = i;
        break;
      }
    }

    var desiredValue = new_direction_array[0][3]
    var el = document.getElementById("direction");
    for(var i=0; i<el.options.length; i++) {
      if ( el.options[i].text == desiredValue ) {
        el.selectedIndex = i;
        break;
      }
    }

    filtered_data = populate_test()
    update_data(filtered_data)
    update_icons(filtered_data)

    //page_layout('list')
}
