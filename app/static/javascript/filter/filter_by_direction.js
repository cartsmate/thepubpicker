function filter_by_direction(data) {
    console.log('FILTER_BY_DIRECTION')
    ticked_list = []
    //var filtered_data = {{ all_data | tojson }}
    console.log('received data')
    console.log(data.length)
    for (i=0; i<directions_list.length; i++) {
        //console.log('inside loop: ' + directions_list[i][1])
        if (document.getElementById(directions_list[i][0]) !== null) {
            //console.log('not null: ' + directions_list[i])
            if (document.getElementById(directions_list[i][0]).checked) {
                //console.log('checked at: ' + directions_list[i][1])
                ticked_list.push(directions_list[i][0])
            } else {
                //console.log('not checked at: ' + directions_list[i][1])
            }
        } else {
            //console.log('null: ' + directions_list[i])
        }
    }

    ticked_data = []
    if (ticked_list.length > 0) {
        for (j=0; j<ticked_list.length; j++) {
            //filtered_data = {{ all_data | tojson }}
            var filtered_data = data.filter(function(item) {
                return item.direction_identity == ticked_list[j]
            })
            ticked_data = ticked_data.concat(filtered_data)
        }
    } else {
        ticked_data = data
    }
    console.log('sent data')
    console.log(ticked_data.length)
    return ticked_data
}
