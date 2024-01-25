//function populate_header(sum_of_pubs) {
function populate_header() {
    console.log('populate header')
    document.getElementById('pub_length').innerHTML = "<a style='text-align: center; color: white; font-size: 12px; font-weight: bold'>" + "Pubs founds: " + filtered_pubs.length + "</a>"
//    document.getElementById('pub_length').style.font-size = "12px;"
    }
