function update_header() {
    console.log('UPDATE_HEADER')

    direction = document.getElementById('direction').value
    var directionSelect = document.getElementById("direction");
    var direction_name = directionSelect.options[directionSelect.selectedIndex].text;
    //direction_name = document.getElementById('direction').text
    //console.log('direction_name: ' + direction_name)
    //direction_name = document.getElementById('x_direction_name').value

    station = document.getElementById('station').value
    var stationSelect = document.getElementById("station");
    var station_name = stationSelect.options[stationSelect.selectedIndex].text;
    //station_name = document.getElementById('x_station_name').value

    day = document.getElementById('day').value

    search = document.getElementById('search-input-navbar').value
    header = "Pubs"

    if (search != '') {
        header = header + " nearest " + search
    } else if (station != 'all') {
        header = station_name + " " + header
    } else if (direction != 'all') {
        header = direction_name + " " + header
    }
    if (day != 'all') {
        header = header + " on " + day
    }
    console.log(header)
    return header
}
