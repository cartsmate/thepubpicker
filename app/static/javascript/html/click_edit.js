function click_edit() {
    console.log("CLICK_EDIT")

    id = document.getElementById('pub_identity').value
    console.log('id: ' + id)

    //form_type = 'edit'
    //document.getElementById('form_type').value = form_type
    page_layout('edit')

    for (let i = 0; i < total_list_obj['icon_list'].length; i++) {
        document.getElementById(total_list_obj['icon_list'][i]).setAttribute("onclick", "feature_click('" + total_list_obj['icon_list'][i] + "')")
    }
    for (let i = 0; i < total_list_obj['fields_list'].length; i++) {
        if (!total_list_obj['icon_list'].includes(total_list_obj['fields_list'][i])) {
            if (total_list_obj['form_visible_list'].includes(total_list_obj['fields_list'][i])) {
                //document.getElementById(fields_list[i]).setAttribute("readonly", "false")
                document.getElementById(total_list_obj['fields_list'][i]).removeAttribute("readonly");
            }
        }
    }
    for (let i = 0; i < diary_headers.length; i++) {
        //document.getElementById(diary_headers[i]).setAttribute('readonly', 'false')
        document.getElementById(diary_headers[i]).removeAttribute("readonly");
    }

    document.forms["pub_form"].action="/pub/?pub_id=" + id
    //{{pubs_selection[0]['pub_identity']}}"

    document.getElementById('submit').setAttribute("style","display:block;");
    document.getElementById('submit_message').setAttribute("style","display:none;");
    document.getElementById('submit_link').setAttribute("style","color:#d9534f;");
    /*
    document.getElementById('list_header').style.display = "block"
    document.getElementById('list_page1').style.display = "block"
    document.getElementById('list_page2').style.display = "none"
    document.getElementById('pub_read').style.display = "block"
    console.log(form_type)
    //document.getElementById('station_button').removeClass = 'hide_button'
    //document.getElementById('station_button').addClass = 'show_button'
    document.getElementById('station_button').classList.remove("hide_button");
    document.getElementById('station_button').classList.add("show_button");

    document.getElementById('edit_button').classList.remove("hide_button");
    document.getElementById('edit_button').classList.add("show_button");

    document.getElementById('upload_button').classList.remove("hide_button");
    document.getElementById('upload_button').classList.add("show_button");

    document.getElementById('delete_button').classList.remove("hide_button");
    document.getElementById('delete_button').classList.add("show_button");

    filtered_data = populate_pub(all_data, id)

    console.log(filtered_data)
    populate_form(filtered_data);
    populate_diary(filtered_data);
    update_features_icons(filtered_data)
    map_visible(filtered_data);

    document.getElementById('search_header').innerHTML = filtered_data[0].pub_name
    document.getElementById('list_header').style.display = 'block'
    */
}
