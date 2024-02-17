function filter_by_() {
    console.log('-- filter by all data: IN: ' + pub_all.length)
    var filter_count = 0
//    data = pub_all
    filter_selection['direction'] = 'off';
    filter_selection['station'] = 'off';
    filter_selection['feature'] = 'off';
    filter_selection['event'] = 'off';
    filter_selection['diary'] = 'off';
    document.getElementById('button_direction').style.fontWeight = 'normal'
    document.getElementById('button_station').style.fontWeight = 'normal'
    document.getElementById('button_feature').style.fontWeight = 'normal'
    document.getElementById('button_event').style.fontWeight = 'normal'
    document.getElementById('button_diary').style.fontWeight = 'normal'
    data_by_direction = filter_by_direction(pub_all)
    if (data_by_direction.length < pub_all.length) {
        filter_count ++
        filter_selection['direction'] = 'on';
        document.getElementById('button_direction').style.fontWeight = 'bold'
        }
    data_by_station = filter_by_station(data_by_direction)
    if (data_by_station.length < data_by_direction.length) {
        filter_count ++
        filter_selection['station'] = 'on';
        document.getElementById('button_station').style.fontWeight = 'bold'
        }
    data_by_feature = filter_by_feature(data_by_station)
    if (data_by_feature.length < data_by_station.length) {
        filter_count ++
        filter_selection['feature'] = 'on';
        document.getElementById('button_feature').style.fontWeight = 'bold'
        }
    data_by_event = filter_by_event(data_by_feature)
    if (data_by_event.length < data_by_feature.length) {
        filter_count ++
        filter_selection['event'] = 'on';
        document.getElementById('button_event').style.fontWeight = 'bold'
        }
    data_by_diary = filter_by_diary(data_by_event)
    if (data_by_diary.length < data_by_event.length) {
        filter_count ++
        filter_selection['diary'] = 'on';
        document.getElementById('button_diary').style.fontWeight = 'bold'
        }
    data_by_pub_identity = filter_by_pub_identity(data_by_diary)

    if (filter_count > 0) {
        document.getElementById('active_filter_count').textContent = filter_count
        document.getElementById('active_filter_count').style.display = "block"
        //document.getElementById('active_filter_count').style.display = "inline-block"
        document.getElementById("filter_overlay_btn").classList.remove('filters_off')
        document.getElementById("filter_overlay_btn").classList.add('filters_on')
        document.getElementById("filter_overlay_span").classList.remove('filters_span_off')
        document.getElementById("filter_overlay_span").classList.add('filters_span_on')
        document.getElementById("collapsible_filters_sm").style.width = "95px";
        document.getElementById("search-input-navbar").style.width = "250px";
    } else {
        document.getElementById('active_filter_count').style.display = "none"
        document.getElementById("filter_overlay_btn").classList.remove('filters_on')
        document.getElementById("filter_overlay_btn").classList.add('filters_off')
        document.getElementById("filter_overlay_span").classList.remove('filters_span_on')
        document.getElementById("filter_overlay_span").classList.add('filters_span_off')
        document.getElementById("collapsible_filters_sm").style.width = "60px";
        document.getElementById("search-input-navbar").style.width = "285px";
    }
    console.log('---- filter by all data: OUT: ' + data_by_pub_identity.length)
    filtered_pubs = data_by_pub_identity
    return filtered_pubs
}
