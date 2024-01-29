function populate_detail(show_pub){
    console.log('POPULATE_DETAIL')
    //console.log(pub)
    for (const [key, value] of Object.entries(detail)) {
        if (value.name == 'website') {
//    for (i=0; i < detail_list.length; i++) {
//        if (detail_list[i] == 'website') {
                web_item = document.getElementById(value.name)
//                web_item = document.getElementById(detail_list[i])
                web_item.classList.add('pointer')
                web_item.style.color = "#0d6efd"
                web_item.value = show_pub[0][value.name]
//                web_item.value = show_pub[0][detail_list[i]]
                web_item.onclick = function() { redirect_website(show_pub[0]['website']); };
            } else {
//                document.getElementById(detail_list[i]).value = show_pub[0][detail_list[i]]
                document.getElementById(value.name).value = show_pub[0][value.name]
            }
    }
}
