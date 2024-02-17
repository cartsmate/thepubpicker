function setup_filters_populate(data) {
    console.log('setup_filters_populate')
    create_filter_(data)
    console.log('filters: ' + filters)
//    if (filters != 'None' && filters == '') {
    pre_populate(filters)
//        }
    pub_filtered = filter_by_(data)
    create_filter_(pub_filtered)
    return pub_filtered
}
