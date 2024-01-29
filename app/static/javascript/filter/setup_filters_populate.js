function setup_filters_populate(data) {
    console.log('setup_filters_populate')
    populate_all_filters(data)
    pre_populate(filters)
    pub_filtered = filter_all_data(data)
    console.log('-- pub filtered selection: ' + pub_filtered.length)
    populate_all_filters(pub_filtered)
    return pub_filtered
}
