function populate_review(pub){
    console.log('POPULATE REVIEW')
    for (const [key, value] of Object.entries(review)) {
        if (value.menu_filter) {
                if (pub[0][value.name] == '1') {
                    //console.log('inside TRUE')
                    //document.getElementById(value.name + '_check').checked = true;
                    document.getElementById(value.name + '_carousel').style.opacity = "1.0";
                    //document.getElementById(value.name + '_caption').style.color = "white";
                    current_carousel = document.getElementById(value.name + "_carousel")
                    current_carousel.classList.add('carousel_on')
                } else {
                    //console.log('inside FALSE')
                    //document.getElementById(value.name + '_check').checked = false;
                    document.getElementById(value.name + '_carousel').style.opacity = "0.5";
                    //document.getElementById(value.name + '_caption').style.color = "black";
                    current_carousel = document.getElementById(value.name + "_carousel")
                    current_carousel.classList.add('carousel_off')
                    //current_carousel.style.display = 'none'
                }
//        } else {
//            document.getElementById(value.name + '_check').value = pub[0][value.name]
        }
    }
}
