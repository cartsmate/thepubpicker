function populate_summary(show_pub) {
    console.log('populate_summary: show_pub: ' + show_pub.length)

    //text_ref = summary_pub[0]['detail_name'].toString().substring(0,22)  + " | " + summary_pub[0]['station_name'].toString().substring(0,18)
    text_ref = show_pub[0]['detail_name'].toString().substring(0,22)  + " | " + show_pub[0]['station_name'].toString().substring(0,18)
    document.getElementById('summary_name').innerHTML = "<div style='text-decoration: none; justify-content: center; font-size: 14px; font-weight: bold;'>" + text_ref + "</div>"
    populate_extra(show_pub)
}
function populate_extra(show_pub) {
    console.log('populate_extra')
    document.getElementById('summary_extra').innerHTML = "<div>" + show_pub[0]['extra'] + "</div>"
}
function populate_title(show_pub) {
    console.log('populate_title')
    text_ref = show_pub[0]['detail_name'].toString().substring(0,24)
    console.log('name of pub: ' + text_ref)
    document.getElementById('pub_header').textContent = text_ref
    //document.getElementById('summary_extra').innerHTML = "<a>" + show_pub[0]['extra'] + "</a>"
}
