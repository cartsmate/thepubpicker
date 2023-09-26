function filter_by_station(filtered_data) {
    console.log('FILTER_BY_STATION')
    console.log('station value: ' + document.getElementById('station').value)
    if (document.getElementById('station').value != 'all') {
        console.log('NOT ALL STATION: ' + document.getElementById('station').value)
        var filtered_data = filtered_data.filter(function(pub) {
            return pub.station_identity == document.getElementById('station').value
            });
        //pre_header = station_name + " Pubs"
    } else if (document.getElementById("direction").value != 'all') {
        console.log('NOT ALL DIRECTION: ' + document.getElementById('direction').value)
        var filtered_data =  filtered_data.filter(function(pub) {
            return pub.direction_identity == document.getElementById('direction').value
            });
        //pre_header = direction_name + " Pubs"
    } else {
        console.log('NO STATION & NO DIRECTION & NO SEARCH')
    }
    console.log('filtered_data: ' + filtered_data.length)
    return filtered_data
}
