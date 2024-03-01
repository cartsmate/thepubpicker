function filter_by_pub_identity(data_in) {
    console.log('filter by pub identity: ' + data_in.length)
    ticked_list = []
//    for (i=0; i<pub_all.length; i++) {
    for (i=0; i<pub_all.length; i++) {
        if (document.getElementById(pub_all[i]['pub_identity'] + "_filter").checked) {
            ticked_list.push(pub_all[i]['pub_identity'])
        }
    }

    output_pubs = data_in
    if (ticked_list.length>0) {
//        console.log('ticked_list.length > 0')
        output_pubs = data_in.filter(({ pub_identity }) => ticked_list.includes(pub_identity));
    }

    console.log('---- pub identity OUT: ' + output_pubs.length)
    return output_pubs
}
