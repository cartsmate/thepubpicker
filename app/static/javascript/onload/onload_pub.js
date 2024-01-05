function onload_pub() {
    map_load_pub()
    populate_summary(pub[0]['pub_identity'])
    populate_pub()
    console.log('filters')
    console.log(filters)
    populate_search_back(filters)
}
