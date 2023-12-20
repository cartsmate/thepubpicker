function populate_detail(){
    console.log('POPULATE_DETAIL')
    //console.log(pub)
    for (i = 0; i < model_formats['fields_list'].length; i++) {
        //console.log('fields_list[i]')
        //console.log(fields_list[i])
        //console.log(check_list)
        if (model_formats['dropdown_list'].includes(model_formats['fields_list'][i])) {
            //console.log('dropdown')
            var dropdown_str = String(pub[0][model_formats['fields_list'][i]['0']]).toUpperCase() + String(pub[0][model_formats['fields_list'][i]]).substring(1)
            document.getElementById(model_formats['fields_list'][i]).value = dropdown_str
        } else if (model_formats['check_list'].includes(model_formats['fields_list'][i])) {
            //console.log('checklist')
            if (pub[0][model_formats['fields_list'][i]] == 'true') {
                //console.log('true')
                document.getElementById(model_formats['fields_list'][i]).checked = 'true';
                document.getElementById(model_formats['fields_list'][i]).style.hidden = "none";
                var feature_img = model_formats['fields_list'][i] + "_img"
                var feature_col = model_formats['fields_list'][i] + "_col"
                var feature_caption = model_formats['fields_list'][i] + "_caption"
                document.getElementById(feature_col).style.background = "#0275D8";
                document.getElementById(feature_caption).style.color = "white";
            } else {
                //console.log('false')
            }
        } else if (model_formats['star_list'].includes(model_formats['fields_list'][i])) {
            //populate_stars(model_formats['fields_list'][i], pub[0][model_formats['fields_list'][i]], 'populate')
        } else {
            console.log(model_formats['fields_list'][i])
            console.log(pub[0][model_formats['fields_list'][i]])
            document.getElementById(model_formats['fields_list'][i]).value = pub[0][model_formats['fields_list'][i]];
        }
    }
}
