function populate_event(show_events){
    console.log('POPULATE_EVENT')
    for (const [key, value] of Object.entries(event)) {
//    for (event in events) {
        console.log(value.name)
        console.log(show_events[0][value.name])
        inbox_item = document.getElementById(value.name)
        inbox_item.value = show_events[0][value.name]
    }
}
