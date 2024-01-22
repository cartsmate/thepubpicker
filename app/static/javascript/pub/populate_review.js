function populate_review(pub, theme){
    console.log('POPULATE REVIEW')
    for (i=0; i < review_list.length; i++) {
        if (review_list[i] != "pub_identity") {
            if (model_formats['icon_list'].includes (review_list[i])) {
                if ((pub[0][review_list[i]] == 'true') || (pub[0][review_list[i]] == true)) {
                    console.log('inside TRUE')
                    document.getElementById(review_list[i] + '_check').checked = true;
                    document.getElementById(review_list[i] + '_col').style.opacity = "1.0";
                    document.getElementById(review_list[i] + '_caption').style.color = "white";
                    current_carousel = document.getElementById(review_list[i] + "_face")
                    current_carousel.classList.add('carousel_on')
                } else {
                    console.log('inside FALSE')
                    document.getElementById(review_list[i] + '_check').checked = false;
                    document.getElementById(review_list[i] + '_col').style.opacity = "0.5";
                    document.getElementById(review_list[i] + '_caption').style.color = "black";
                    current_carousel = document.getElementById(review_list[i] + "_face")
                    current_carousel.classList.add('carousel_off')
                }
            } else {
                document.getElementById(review_list[i] + '_check').value = pub[0][review_list[i]]
            }
        }
    }
}
