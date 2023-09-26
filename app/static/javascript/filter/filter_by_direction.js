function filter_by_direction(all_data) {
    ticked_list = []
    //var filtered_data = {{ all_data | tojson }}
    //console.log('filtered_data')
    //console.log(filtered_data.length)
    for (i=0; i<directions_list.length; i++) {
        if (document.getElementById(directions_list[i][0]).checked) {
            console.log('checked at: ' + directions_list[i][1])
            ticked_list.push(directions_list[i][0])
        }
    }

    ticked_data = []
    for (j=0; j<ticked_list.length; j++) {
        //filtered_data = {{ all_data | tojson }}
        var filtered_data = all_data.filter(function(item) {
            return item.direction_identity == ticked_list[j]
        })
        ticked_data = ticked_data.concat(filtered_data)
        console.log('ticked_data_length: ' + ticked_data.length)
    }
    return ticked_data
}
