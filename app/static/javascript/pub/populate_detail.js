function populate_detail(show_pub){
    console.log('POPULATE_DETAIL')
    //console.log(pub)

    for (i=0; i < detail_list.length; i++) {
        if (detail_list[i] == 'website') {
                web_item = document.getElementById(detail_list[i])
                web_item.classList.add('pointer')
                web_item.style.color = "#0d6efd"
                web_item.value = show_pub[0][detail_list[i]]
                web_item.onclick = function() { redirect_website(show_pub[0]['website']); };
                //document.getElementById(detail_list[i]).value = show_pub[0][detail_list[i]]
            } else {
                document.getElementById(detail_list[i]).value = show_pub[0][detail_list[i]]
            }
        /*
        if (detail_list[i] == 'website') {
            if (name == 'readonly') {
                document.getElementById(detail_list[i]).innerHTML = "<a style='color:coral; font-size:12px;' href='" + show_pub[0][detail_list[i]] + "' target='_blank' rel='noopener noreferrer'>Link to pub website</a>"
            }
            else {
                document.getElementById(detail_list[i]).value = show_pub[0][detail_list[i]]
            }
        } else {
            document.getElementById(detail_list[i]).value = show_pub[0][detail_list[i]]
        }
        */
    }
}
