function populate_form(pubs_selection){
    console.log('POPULATE_FORM')
    //console.log(pubs_selection)
    for (i = 0; i < total_list_obj['fields_list'].length; i++) {
        //console.log('fields_list[i]')
        //console.log(fields_list[i])
        //console.log(check_list)
        if (total_list_obj['dropdown_list'].includes(total_list_obj['fields_list'][i])) {
            //console.log('dropdown')
            var dropdown_str = String(pubs_selection[0][total_list_obj['fields_list'][i]['0']]).toUpperCase() + String(pubs_selection[0][total_list_obj['fields_list'][i]]).substring(1)
            document.getElementById(total_list_obj['fields_list'][i]).value = dropdown_str
        } else if (total_list_obj['check_list'].includes(total_list_obj['fields_list'][i])) {
            //console.log('checklist')
            if (pubs_selection[0][total_list_obj['fields_list'][i]] == 'true') {
                //console.log('true')
                document.getElementById(total_list_obj['fields_list'][i]).checked = 'true';
                document.getElementById(total_list_obj['fields_list'][i]).style.hidden = "none";
                var feature_img = total_list_obj['fields_list'][i] + "_img"
                var feature_col = total_list_obj['fields_list'][i] + "_col"
                var feature_caption = total_list_obj['fields_list'][i] + "_caption"
                document.getElementById(feature_col).style.background = "#0275D8";
                document.getElementById(feature_caption).style.color = "white";
            } else {
                //console.log('false')
            }
        } else if (total_list_obj['star_list'].includes(total_list_obj['fields_list'][i])) {
            shadeStars(total_list_obj['fields_list'][i], pubs_selection[0][total_list_obj['fields_list'][i]], 'populate')
        } else {
            document.getElementById(total_list_obj['fields_list'][i]).value = pubs_selection[0][total_list_obj['fields_list'][i]];
        }
    }
}
