function filter_by_direction(data_in) {
    //console.log('---- direction-in: ' + data.length)

    ticked_list = []
    for (i=0; i<directions_list.length; i++) {
        if (document.getElementById(directions_list[i][0] + "_filter") !== null) {
            if (document.getElementById(directions_list[i][0] + "_filter").checked) {
                ticked_list.push(directions_list[i][0])
            }
        }
    }

    ticked_data = []
    if (ticked_list.length > 0) {
        for (j=0; j<ticked_list.length; j++) {
            var filtered_data = data_in.filter(function(item) {
                return item.direction_identity == ticked_list[j]
            })
            ticked_data = ticked_data.concat(filtered_data)
        }
    } else {
        ticked_data = data_in
    }
    console.log('---- direction OUT: ' + ticked_data.length)
    return ticked_data
}
