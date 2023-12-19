function filter_all_data() {
    console.log('FILTER_ALL_DATA')
    data_by_direction = filter_by_direction(pub)
    data_by_station = filter_by_station(data_by_direction)
    data_by_feature = filter_by_feature(data_by_station)
    return data_by_feature
}
