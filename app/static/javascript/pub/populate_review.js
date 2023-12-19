function populate_review(pub_filtered){
    console.log('populate review')
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
    */
}
