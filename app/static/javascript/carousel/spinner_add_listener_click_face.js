function spinner_add_listener_click_face() {
    console.log('spinner_add_listener_click_face')
    for (const [key, value] of Object.entries(review)) {
        if (value.quick_filter) {
            var marker = value.name
            document.getElementById(value.name + "_carousel").addEventListener('click', (function (marker) {
                return function () {
                    if (document.getElementById(marker + '_carousel').style.opacity == '1') {
                        if (document.getElementById(marker + "_filter").checked == true){
                            update_carousel(marker, false)
                        } else {
                            for (const [key, value] of Object.entries(review)) {
                                if (value.quick_filter) {
                                    update_carousel(value.name, false)
                                }
                            }
                            update_carousel(marker, true)
                        }
                        center_map()
                    } else {
                        console.log('opacity=0')
                    }
                }
            })(marker))
        }
    }
}

function update_carousel(feature, status) {
    document.getElementById(feature + "_filter").checked = status;
    current_carousel = document.getElementById(feature + "_carousel")
    if (status) {
        current_carousel.classList.remove('carousel_off')
        current_carousel.classList.add('carousel_on')
    } else {
        current_carousel.classList.remove('carousel_on')
        current_carousel.classList.add('carousel_off')
    }

}
