function populate_summary() {
    console.log('populate_summary')
    console.log(pub_1)
//    let summary_pub = pub.filter((x) => {
//        return x.pub_identity == id
//    });
    //text_ref = summary_pub[0]['detail_name'].toString().substring(0,22)  + " | " + summary_pub[0]['station_name'].toString().substring(0,18)
    text_ref = pub_1[0]['detail_name'].toString().substring(0,22)  + " | " + pub_1[0]['station_name'].toString().substring(0,18)
    document.getElementById('summary_name').innerHTML = "<a style='text-decoration: none; justify-content: center; font-size: 14px; font-weight: bold;'>" + text_ref + "</a>"
    document.getElementById('summary_extra').innerHTML = "<a>" + pub_1['extra'] + "</a>"
}

function populate_title(show_pub) {
    console.log('populate_title')
    /*
    let summary_pub = pub.filter((x) => {
        return x.pub_identity == id
    });
    */
    text_ref = show_pub[0]['detail_name'].toString().substring(0,24)
    console.log('name of pub: ' + text_ref)
    document.getElementById('pub_header').textContent = text_ref
    document.getElementById('summary_extra').innerHTML = "<a>" + show_pub[0]['extra'] + "</a>"
}
