function filter_all_data_events(data) {
    console.log('-- filter by all data')
    var filter_count = 0

    data_by_direction = filter_by_direction_events(data)
    if (data_by_direction.length < event.length) { filter_count ++}
    data_by_station = filter_by_station_events(data_by_direction)
    if (data_by_station.length < data_by_direction.length) { filter_count ++}
    data_by_feature = filter_by_feature_events(data_by_station)
    if (data_by_feature.length < data_by_station.length) { filter_count ++}
    data_by_event = filter_by_event(data_by_feature)

    if (filter_count > 0) {
        document.getElementById('active_filter_count').textContent = filter_count
        document.getElementById('active_filter_count').style.display = "block"
        //document.getElementById('active_filter_count').style.display = "inline-block"
        document.getElementById("filter_overlay_btn").classList.remove('filters_off')
        document.getElementById("filter_overlay_btn").classList.add('filters_on')
        document.getElementById("filter_overlay_span").classList.remove('filters_span_off')
        document.getElementById("filter_overlay_span").classList.add('filters_span_on')
    } else {
        document.getElementById('active_filter_count').style.display = "none"
        document.getElementById("filter_overlay_btn").classList.remove('filters_on')
        document.getElementById("filter_overlay_btn").classList.add('filters_off')
        document.getElementById("filter_overlay_span").classList.remove('filters_span_on')
        document.getElementById("filter_overlay_span").classList.add('filters_span_off')
    }
    console.log('---- pub selection: ' + data_by_feature.length)
    return data_by_feature
}
