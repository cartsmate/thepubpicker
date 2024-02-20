function create_filter_(data_in) {
    console.log('-- create_filter_: ' + data_in.length)
    create_filter_direction(data_in)
    create_filter_station(data_in)
    create_filter_feature(data_in)
    create_filter_diary(data_in)
    create_filter_event(data_in)
    create_filter_pub_identity(data_in)
}
