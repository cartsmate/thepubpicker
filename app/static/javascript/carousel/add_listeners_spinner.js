function add_listeners_spinner() {
    console.log('ADD LISTENERS spinner')
    model_format = model_formats['icon_list']
    for (field in model_format) {
        var marker = model_format[field]
        if (marker != 'nofeature') {
            var marker_id = model_format[field] + "_carousel"
            document.getElementById(marker_id).addEventListener('click', (function (marker) {
                return function () {
                    console.log('carousel spinner listener triggered')
                    if (document.getElementById(marker + "_filter").checked == true){
                        console.log('already TRUE - blank out')
                        for (i=0; i<model_formats['icon_list'].length; i++) {
                            if (model_formats['icon_list'][i] != 'nofeature') {
                                document.getElementById(model_formats['icon_list'][i] + "_filter").checked = false;
                                document.getElementById(model_formats['icon_list'][i] + "_word").style.color = "black"
                                //document.getElementById(model_formats['icon_list'][i] + "_carousel").style.backgroundColor = "white"
                                current_carousel = document.getElementById(marker + "_carousel")
                                current_carousel.classList.remove('carousel_on')
                                current_carousel.classList.add('carousel_off')
                            }
                        }
                        update_results()
                    } else {
                        console.log(marker)
                        console.log(marker + ': was blank - make HIGHLIGHT')
                        for (i=0; i<model_formats['icon_list'].length; i++) {
                        //console.log(model_formats['icon_list'][i])
                            if (model_formats['icon_list'][i] != 'nofeature') {
                                //console.log(model_formats['icon_list'][i])
                                document.getElementById(model_formats['icon_list'][i] + "_filter").checked = false;
                                document.getElementById(model_formats['icon_list'][i] + "_word").style.color = "black"
                                //document.getElementById(model_formats['icon_list'][i] + "_carousel").style.backgroundColor = "white"
                                current_carousel = document.getElementById(model_formats['icon_list'][i] + "_carousel")
                                current_carousel.classList.remove('carousel_on')
                                current_carousel.classList.add('carousel_off')
                            }
                        }
                        document.getElementById(marker + "_filter").checked = true;
                        document.getElementById(marker + "_word").style.color = "white"
                        current_carousel = document.getElementById(marker + "_carousel")
                        current_carousel.classList.remove('carousel_off')
                        current_carousel.classList.add('carousel_on')
                        update_results()
                    }
                }
            })(marker))
        }
    }
}
