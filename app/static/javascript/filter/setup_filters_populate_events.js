function setup_filters_populate_events(data) {
    console.log('setup_filters_populate')
    populate_all_filters_events(data)
    pre_populate_events(filters)
    pub_filtered = filter_all_data_events(data)
    console.log('-- pub filtered selection: ' + pub_filtered.length)
    populate_all_filters_events(pub_filtered)
    return pub_filtered
}
