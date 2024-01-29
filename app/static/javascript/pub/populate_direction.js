function populate_direction(show_pub){
    console.log('POPULATE_DIRECTION')
    //console.log(pub)

    for (const [key, value] of Object.entries(direction)) {
//    for (i=0; i < direction_list.length; i++) {

        document.getElementById(value.name).value = show_pub[0][value.name];
    }
}
