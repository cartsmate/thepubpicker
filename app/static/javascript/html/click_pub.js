function click_pub(id) {
    console.log("CLICK_PUB")
    //console.log('id: ' + id)
    //form_type = 'read'
    //page_layout('read')


    filter_reset()
    document.getElementById('collapsible_filters').click()
    document.getElementById('all_filters').style.display = "none"

    filtered_data = populate_pub(id)
    pubs_selection = filtered_data
    //update_data(filtered_data)
    //console.log(filtered_data)
    //console.log('filtered_data')
    //console.log(filtered_data)
    //console.log(filtered_data[0]['station_identity'])
    populate_form(filtered_data);
    populate_diary(filtered_data);
    update_icons(filtered_data)
    add_markers(map, filtered_data);
    //map_visible(map, filtered_data);

    //document.getElementById('x_pub_identity').value = id
    document.getElementById('search_header').innerHTML = filtered_data[0].pub_name
    //document.getElementById('list_header').style.display = 'block'

    //document.getElementById('list_features').style.display = 'none'

    for (let i = 0; i < total_list_obj['icon_list'].length; i++) {
        document.getElementById(total_list_obj['icon_list'][i]).setAttribute("onclick", "return false;")
    }
    for (let i = 0; i < total_list_obj['fields_list'].length; i++) {
        if (!total_list_obj['icon_list'].includes(total_list_obj['fields_list'][i])) {
            if (total_list_obj['form_visible_list'].includes(total_list_obj['fields_list'][i])) {
                document.getElementById(total_list_obj['fields_list'][i]).setAttribute("readonly", "true")
            }
        }
    }
    diary_headers = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
    for (let i = 0; i < diary_headers.length; i++) {
        document.getElementById(diary_headers[i]).setAttribute('readonly', 'true')
    }
    //document.getElementById("station").value = filtered_data[0]['station_identity']
    //document.getElementById("x_station_name").value = filtered_data[0]['station_name']
    //document.getElementById("station_2").value = document.getElementById("x_station").value;


    var base_url = window.location.hostname
    if (config2['env'] == 'qual') {
        var url = "http://" + base_url + ":5000/pub/"
    } else {
        var url = "http://" + base_url + "/pub/"
    }
    const myUrlWithParams = new URL(url);
    myUrlWithParams.searchParams.append('pub', id);
    window.location.replace(myUrlWithParams.href);
}
