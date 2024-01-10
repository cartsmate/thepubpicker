function onload_summary() {
    console.log('onload summary')

    populate_summary(daily_id)
    document.getElementById('col_map').style.display = "block";
    //populate_photo()
    populate_autocomplete()
    map_load_summary()
    add_listeners_carousel_features()
    //onload_collection()

}
