function populate_review(pub, page){
    console.log('POPULATE REVIEW')
    for (const [key, value] of Object.entries(review)) {
        if (value.menu_filter) {
            if (pub[0][value.name] == '1') {
                if (page == 'edit') {
                    document.getElementById(value.name + '_check').checked = true;
                }
                document.getElementById(value.name + '_carousel').style.opacity = "1.0";
                current_carousel = document.getElementById(value.name + "_carousel")
                current_carousel.classList.add('carousel_on')
            } else {
                if (page == 'edit') {
                    document.getElementById(value.name + '_check').checked = false;
                }
                document.getElementById(value.name + '_carousel').style.opacity = "0.5";
                current_carousel = document.getElementById(value.name + "_carousel")
                current_carousel.classList.add('carousel_off')
                if (page == 'pub') {
                    current_carousel.style.display = 'none'
                }
            }
        } else {
            document.getElementById(value.name + '_check').value = pub[0][value.name]
        }
    }
}
