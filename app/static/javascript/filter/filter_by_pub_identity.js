function filter_by_pub_identity(data) {
    console.log('---- filter_by_pub_identity:in: ' + data.length)
    //console.log('data in: ' + data.length)
    ticked_list = []
    for (i=0; i<pub_all.length; i++) {
        if (document.getElementById(pub_all[i]['pub_identity'] + "_filter").checked) {
            ticked_list.push(pub_all[i]['pub_identity'])
        }
    }
    console.log('ticked_list')
    console.log(ticked_list)
    console.log(ticked_list.length)

    output_pubs = data
    if (ticked_list.length>0) {
        console.log('ticked_list.length > 0')
        output_pubs = data.filter(({ pub_identity }) => ticked_list.includes(pub_identity));
//    } else {
//        console.log('ticked_list.length !> 0')
//
    }
    /*
    ticked_data = []
    if (ticked_list.length>0) {
        for (j=0; j<ticked_list.length; j++) {
            var filtered_data = data.filter(function(item) {
                return item.pub_identity == ticked_list[j]
            })
            ticked_data = ticked_data.concat(filtered_data)
        }
    } else {
        ticked_data = data
    }
    //console.log(ticked_data)
    */
    console.log('---- pub_identity-out: ' + output_pubs.length)
    return output_pubs
}
