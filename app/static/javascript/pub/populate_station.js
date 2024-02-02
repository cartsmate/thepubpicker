function populate_station(){
    console.log('POPULATE_STATION')
    for (const [key, value] of Object.entries(station)) {
//    for (i=0; i < station_list.length; i++) {
//        document.getElementById(station_list[i]).value = pub[0][station_list[i]];
        document.getElementById(value.name).value = pub_1[0][value.name];
    }
}
