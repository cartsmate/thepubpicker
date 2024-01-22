function setup_filters_populate() {
    console.log('populate filters')
    populate_all_filters(pub)
    pre_populate(filters)
    pub_filtered = filter_all_data()
    console.log('-- pub filtered selection: ' + pub_filtered.length)
    populate_all_filters(pub_filtered)
    return pub_filtered
}
