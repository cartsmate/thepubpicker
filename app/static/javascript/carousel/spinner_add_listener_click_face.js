function spinner_add_listener_click_face() {
    console.log('spinner add listener FACE CLICK added')
    for (const [key, value] of Object.entries(review)) {
        if (value.quick_filter) {

            var marker = value.name
            //console.log('spinner click listener added for : ' + marker)
            document.getElementById(value.name + "_carousel").addEventListener('click', (function (marker) {
                return function () {
                    console.log('carousel spinner listener triggered')
                    //console.log(marker)
                    if (document.getElementById(marker + '_carousel').style.opacity == '1') {
                        console.log('opacity=1')
                        if (document.getElementById(marker + "_filter").checked == true){
                            console.log('already TRUE - blank out')
                            document.getElementById(marker + "_filter").checked = false;
                            //document.getElementById(marker + "_word").style.color = "black"
                            current_carousel = document.getElementById(marker + "_carousel")
                            current_carousel.classList.remove('carousel_on')
                            current_carousel.classList.add('carousel_off')

                        } else {
                            console.log(marker + ': was blank - make HIGHLIGHT')
                            for (const [key, value] of Object.entries(review)) {
                                if (value.quick_filter) {
                                    document.getElementById(value.name + "_filter").checked = false;
                                    //document.getElementById(value.name + "_word").style.color = "black"
                                    temp_carousel = document.getElementById(value.name + "_carousel")
                                    temp_carousel.classList.remove('carousel_on')
                                    temp_carousel.classList.add('carousel_off')
                                }
                            }
                            //console.log(marker + ' : true')
                            document.getElementById(marker + "_filter").checked = true;
                            //document.getElementById(marker + "_word").style.color = "white"
                            current_carousel = document.getElementById(marker + "_carousel")
                            current_carousel.classList.remove('carousel_off')
                            current_carousel.classList.add('carousel_on')
                        }
                        //filtered_pubs = update_filters()
                        //filter_all_data()
                        center_map()


                    } else {
                        console.log('opacity=0')
                    }
                }
            })(marker))
        }
    }
}
