function onload_pub() {
    map_load_pub()
    populate_title(pub[0]['pub_identity'])
    populate_pub(pub)
    console.log('filters')
    console.log(filters)
    populate_search_back(filters)
    populate_photo_beta()
}
