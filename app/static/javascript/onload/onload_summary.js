function onload_summary() {
    console.log('onload summary')

    populate_summary(daily_id)
    populate_autocomplete()
    map_load_summary()
    add_listeners()

}
