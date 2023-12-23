function populate_direction(){
    console.log('POPULATE_DIRECTION')
    //console.log(pub)

    for (i=0; i < direction_list.length; i++) {

        document.getElementById(direction_list[i]).value = pub[0][direction_list[i]];
    }
}
