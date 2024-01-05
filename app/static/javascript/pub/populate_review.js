function populate_review(){
    console.log('POPULATE REVIEW')
    for (i=0; i < review_list.length; i++) {
        if (review_list[i] != "pub_identity") {
            if (model_formats['icon_list'].includes (review_list[i])) {
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
