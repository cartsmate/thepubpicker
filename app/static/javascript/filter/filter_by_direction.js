function filter_by_direction(direction) {
    filtered_data = all_data
    console.log('filtered_data')
    console.log(filtered_data)
    console.log('direction')
    console.log(direction)
    var filtered_data = filtered_data.filter(function(pub) {
        return pub.station_identity == direction
        });
    return filtered_data
}
