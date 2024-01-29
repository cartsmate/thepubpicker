function populate_review(pub){
    console.log('POPULATE REVIEW')
    for (const [key, value] of Object.entries(review)) {
//    for (i=0; i < review_list.length; i++) {
//        if (review_list[i] != "pub_identity") {
        if (value.menu_filter == 'yes') {
//            if (model_formats['icon_list'].includes (review_list[i])) {
//                if ((pub[0][review_list[i]] == 'true') || (pub[0][review_list[i]] == true)) {
                if ((pub[0][value.name] == 'true') || (pub[0][value.name] == true) || (pub[0][value.name] == '1' || (pub[0][value.name] == 1))) {
                    console.log('inside TRUE')
                    document.getElementById(value.name + '_check').checked = true;
                    document.getElementById(value.name + '_col').style.opacity = "1.0";
                    document.getElementById(value.name + '_caption').style.color = "white";
                    current_carousel = document.getElementById(value.name + "_face")
                    current_carousel.classList.add('carousel_on')
                } else {
                    console.log('inside FALSE')
                    document.getElementById(value.name + '_check').checked = false;
                    document.getElementById(value.name + '_col').style.opacity = "0.5";
                    document.getElementById(value.name + '_caption').style.color = "black";
                    current_carousel = document.getElementById(value.name + "_face")
                    current_carousel.classList.add('carousel_off')
                    current_carousel.style.display = 'none'
                }
        } else {
            document.getElementById(value.name + '_check').value = pub[0][value.name]
        }
    }
}
