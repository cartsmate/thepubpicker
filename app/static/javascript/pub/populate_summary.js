function populate_summary() {
    console.log('populate_summary')
    let summary_pub = pub.filter((x) => {
        return x.pub_identity == daily_id
    });
    document.getElementById('summary_name').innerHTML = "<a>" + summary_pub[0]['detail_name'] + "</a>"
    document.getElementById('summary_extra').innerHTML = "<a>" + summary_pub[0]['extra'] + "</a>"
}
