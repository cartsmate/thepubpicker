function spinner_classes() {
    console.log('spinner classes')
    for (i=0; i<model_formats['icon_list'].length; i++) {
        if (model_formats['icon_list'][i] != 'nofeature') {
            console.log(model_formats['icon_list'][i])
            div_x = document.getElementById(model_formats['icon_list'][i] + "_carousel")
            var calc_deg = (30 * i).toString();
            div_x.style.transform = "rotateY(" + calc_deg + "deg) translateZ(var(--translateZ))";
        }
    }

}
