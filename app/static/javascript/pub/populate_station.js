function populate_station(){
    console.log('POPULATE_STATION')
    //console.log(pub)

    for (i=0; i < station_list.length; i++) {

        document.getElementById(station_list[i]).value = pub[0][station_list[i]];
    }
}
