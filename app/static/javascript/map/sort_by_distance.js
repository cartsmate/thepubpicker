
function sort_by_distance(data, map) {
    console.log('sort by distance')
    console.log('data in: ' + data.length)
    console.log(data)
    //latlng_center = map.getCenter();
    //lat_center = latlng_center.lat();
    //lng_center = latlng_center.lng();

    for (var i = 0; i < data.length; i++) {
        records = []
        latlng_center = map.getCenter();
        lat_diff = Math.abs(data[i]['detail_latitude'] - latlng_center.lat())
        lng_diff = Math.abs(data[i]['detail_longitude'] - latlng_center.lng())
        tot_diff = lat_diff + lng_diff
        data[i]['distance'] = tot_diff
        //data.map(obj => ({ ...obj, distance: tot_diff}))

        //var record = { name: data[i]['detail_name'], id: data[i]['pub_identity'], distance: tot_diff}
        //records.push(record);
    }
    data = data.sort((a, b) => {
        if (a.distance < b.distance) {
            return -1;
        }
    });
    console.log('data out sorted: ' + data.length)
    console.log(data)
    return data
    //Results.map(obj => ({ ...obj, Active: 'false' }))

}
