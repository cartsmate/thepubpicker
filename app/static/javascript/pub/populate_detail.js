function populate_detail(show_pub){
    console.log('POPULATE_DETAIL')
    //console.log(pub)

    for (i=0; i < detail_list.length; i++) {
        document.getElementById(detail_list[i]).value = show_pub[0][detail_list[i]]
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
