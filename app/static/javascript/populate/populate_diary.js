function populate_diary(show_pub){
    console.log('POPULATE_DIARY')
    for (const [key, value] of Object.entries(diary)) {
        inbox_item = document.getElementById(value.name)
        inbox_item.value = show_pub[0][value.name]
    }
}
