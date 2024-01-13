function filter_all_data() {
    console.log('FILTER_ALL_DATA')
    var filter_count = 0

    data_by_direction = filter_by_direction(pub)
    if (data_by_direction.length < pub.length) { filter_count ++}
    data_by_station = filter_by_station(data_by_direction)
    if (data_by_station.length < data_by_direction.length) { filter_count ++}
    data_by_feature = filter_by_feature(data_by_station)
    if (data_by_feature.length < data_by_station.length) { filter_count ++}
    console.log(filter_count)
    if (filter_count > 0) {
        document.getElementById('active_filter_count').textContent = filter_count
        document.getElementById('active_filter_count').style.display = "inline-block"
    } else {
        document.getElementById('active_filter_count').style.display = "none"
    }

    return data_by_feature
}
