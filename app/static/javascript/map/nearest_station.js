function nearest_station(place, lat_lng_obj) {
    console.log('nearest_station')

    records = []
    for (let i = 0; i < stations.length; i++) {
        lat_diff = Math.abs(stations[i]['station_latitude'] - lat_lng_obj.lat)
        lng_diff = Math.abs(stations[i]['station_longitude'] - lat_lng_obj.lng)
        tot_diff = lat_diff + lng_diff
        var record = { name: stations[i]['station_name'], id: stations[i]['station_identity'], distance: tot_diff}
        records.push(record);
    }
    records = records.sort((a, b) => {
        if (a.distance < b.distance) {
            return -1;
        }
    });
    document.getElementById("station_name").value = records[0]['name']
    document.getElementById("station_identity").value = records[0]['id']

}
