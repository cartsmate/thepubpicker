function filter_all_data() {
    console.log('-- filter by all data')
    var filter_count = 0
    data = pub
    console.log('unfiltered data: ' + data.length)
    data_by_direction = filter_by_direction(data)
    if (data_by_direction.length < pub.length) { filter_count ++}
    data_by_station = filter_by_station(data_by_direction)
    if (data_by_station.length < data_by_direction.length) { filter_count ++}
    data_by_feature = filter_by_feature(data_by_station)
    if (data_by_feature.length < data_by_station.length) { filter_count ++}
    data_by_event = filter_by_event(data_by_feature)
    if (data_by_event.length < data_by_feature.length) { filter_count ++}
    data_by_diary = filter_by_diary(data_by_event)
    if (data_by_diary.length < data_by_event.length) { filter_count ++}

    if (filter_count > 0) {
        document.getElementById('active_filter_count').textContent = filter_count
        document.getElementById('active_filter_count').style.display = "block"
        //document.getElementById('active_filter_count').style.display = "inline-block"
        document.getElementById("filter_overlay_btn").classList.remove('filters_off')
        document.getElementById("filter_overlay_btn").classList.add('filters_on')
        document.getElementById("filter_overlay_span").classList.remove('filters_span_off')
        document.getElementById("filter_overlay_span").classList.add('filters_span_on')
        document.getElementById("collapsible_filters").style.width = "95px";
    } else {
        document.getElementById('active_filter_count').style.display = "none"
        document.getElementById("filter_overlay_btn").classList.remove('filters_on')
        document.getElementById("filter_overlay_btn").classList.add('filters_off')
        document.getElementById("filter_overlay_span").classList.remove('filters_span_on')
        document.getElementById("filter_overlay_span").classList.add('filters_span_off')
        //document.getElementById("collapsible_filters").style.width = "55px";
    }
    console.log('---- pub selection: ' + data_by_feature.length)
    return data_by_diary
}
