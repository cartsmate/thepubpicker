function populate_summary(id) {
    console.log('populate_summary')
    let summary_pub = pub.filter((x) => {
        return x.pub_identity == id
    });
    text_ref = summary_pub[0]['detail_name'].toString().substring(0,24)
    document.getElementById('summary_name').innerHTML = "<a style='font-family: Verdana, sans-serif; text-align: center; text-decoration: none; font-size: 12px; font-weight: bold; color: white;'>" + text_ref + "</a>"
    document.getElementById('summary_extra').innerHTML = "<a>" + summary_pub[0]['extra'] + "</a>"
}
