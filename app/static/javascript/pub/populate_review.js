function populate_review(){
    console.log('POPULATE REVIEW')
    console.log('pub')
    console.log(pub)
    for (i=0; i < review_list.length; i++) {
        if (review_list[i] != "pub_identity") {
            console.log(review_list[i])
            console.log(model_formats)
            //console.log('{{model_formats}}')
            //console.log('{{model_formats['icons_list']}}')
            if (model_formats['icon_list'].includes (review_list[i])) {
                //document.getElementById(review_list[i]).value = pub[0][review_list[i]];
                console.log(review_list[i])
                console.log(pub[0][review_list[i]])
                if ((pub[0][review_list[i]] == 'true') || (pub[0][review_list[i]] == true)) {
                    console.log('inside TRUE')
                    document.getElementById(review_list[i] + '_check').checked = true;
                    document.getElementById(review_list[i] + '_col').style.opacity = "1.0";
                    document.getElementById(review_list[i] + '_col').style.background = "coral";
                    document.getElementById(review_list[i] + '_caption').style.color = "white";
                } else {
                    console.log('inside FALSE')
                    document.getElementById(review_list[i] + '_check').checked = false;
                    document.getElementById(review_list[i] + '_col').style.opacity = "0.5";
                    document.getElementById(review_list[i] + '_col').style.background = "white";
                    document.getElementById(review_list[i] + '_caption').style.color = "black";
                }
            } else {
                document.getElementById(review_list[i] + '_check').value = pub[0][review_list[i]]
            }
        }
    }
}
//    SKIP THIS SECTION
/*
    for (i = 0; i < review_list.length; i++) {

        if (model_formats['check_list'].includes(review_list[i])) {
            var counter = 0
            for (let j = 0; j < pub_filtered.length; j++) {
                if (pub_filtered[j][review_list[i]] == 'true') {
                    counter++
                }
            }
            var feature_img = review_list[i] + "_img"
            var feature_col = review_list[i] + "_col"
            var feature_caption = review_list[i] + "_caption"
            if (counter == pub_filtered.length) {
//            all pubs have this attribute
                document.getElementById(review_list[i]).checked = 'true';
//                document.getElementById(review_list[i]).style.hidden = "none";
                document.getElementById(feature_col).style.background = "#0275D8";
                document.getElementById(feature_col).style.border = "thin solid #0275D8";
                document.getElementById(feature_caption).style.color = "white";
            } else if (counter > 0) {
//            some pubs have this attribute
                document.getElementById(review_list[i]).checked = 'false';
                document.getElementById(feature_col).style.background = "white";
                document.getElementById(feature_col).style.border = "thin solid #0275D8";
                document.getElementById(feature_caption).style.color = "black";
            } else {
//            no pubs have this attribute
                document.getElementById(review_list[i]).checked = 'false';
                document.getElementById(feature_col).style.background = "white";
                document.getElementById(feature_col).style.border = "thick solid white";
                document.getElementById(feature_caption).style.color = "black";
            }
        }
    }

}
*/
