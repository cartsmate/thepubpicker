function populate_summary(id) {
    console.log('populate_summary')
    let summary_pub = pub.filter((x) => {
        return x.pub_identity == id
    });
    text_ref = summary_pub[0]['detail_name'].toString().substring(0,24)
    document.getElementById('summary_name').innerHTML = "<a style='text-decoration: none; justify-content: center; font-size: 14px; font-weight: bold;'>" + text_ref + "</a>"
    document.getElementById('summary_extra').innerHTML = "<a>" + summary_pub[0]['extra'] + "</a>"
}
