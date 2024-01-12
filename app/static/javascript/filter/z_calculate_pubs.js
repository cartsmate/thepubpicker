function calculate_pubs(data) {
    console.log('CALCULATE PUBS')
    console.log('received data')
    console.log(data)
    data_by_direction = filter_by_direction(data)
    data_by_station = filter_by_station(data_by_direction)
    return data_by_station
}
