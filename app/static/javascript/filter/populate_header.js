function populate_header() {
    console.log('populate header')
    document.getElementById('pub_length').textContent = "Pubs founds: " + filtered_pubs.length
    if (filtered_pubs.length > 100) {
        document.getElementById('pub_limit').textContent = "map limited to 100 pubs"
        document.getElementById('pub_limit').style.color = "red"
        document.getElementById('pub_limit').style.fontSize = "12px"
        document.getElementById('pub_limit').style.fontWeight = "bold"
    } else {
        document.getElementById('pub_limit').textContent = ""
    }
}
