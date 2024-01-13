function populate_direction(show_pub){
    console.log('POPULATE_DIRECTION')
    //console.log(pub)

    for (i=0; i < direction_list.length; i++) {

        document.getElementById(direction_list[i]).value = show_pub[0][direction_list[i]];
    }
}
