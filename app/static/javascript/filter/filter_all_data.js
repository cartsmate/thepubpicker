function filter_all_data(data) {
    console.log('FILTER_ALL_DATA')
    console.log('received data')
    console.log(data.length)
    data_by_direction = filter_by_direction(data)
    data_by_station = filter_by_station(data_by_direction)
    data_by_feature = filter_by_feature(data_by_station)
    return data_by_feature
}
