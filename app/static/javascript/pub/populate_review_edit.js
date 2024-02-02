function populate_review_edit(pub){
    console.log('POPULATE REVIEW edit')
    for (const [key, value] of Object.entries(review)) {
        if (value.menu_filter) {
            if (pub[0][value.name] == '1' ) {
                console.log('inside TRUE')
                document.getElementById(value.name + '_check').checked = true;

                document.getElementById(value.name + '_col').style.opacity = "1.0";
                current_carousel = document.getElementById(value.name + "_carousel")
                current_carousel.classList.add('carousel_on')
            } else {
                console.log('inside FALSE')
                document.getElementById(value.name + '_check').checked = false;

                document.getElementById(value.name + '_col').style.opacity = "0.5";
                current_carousel = document.getElementById(value.name + "_carousel")
                current_carousel.classList.add('carousel_off')
            }
        } else {
            console.log('value.name')
            console.log(value.name)
            console.log('pub[0][value.name]')
            console.log(pub[0][value.name])
            document.getElementById(value.name + '_check').value = pub[0][value.name]
        }
    }
}
