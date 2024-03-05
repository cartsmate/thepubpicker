function spinner_set_css_classes_flat() {
    console.log('spinner_set_css_classes: ' + number_of_review_attributes)

    var style = document.createElement('style');
    for (const [key, value] of Object.entries(review)) {
        if (value.quick_filter == 'yes') {
            var css = '{{value.name}}_carousel:hover{ background-color: #808000 }';
            style.appendChild(document.createTextNode(css));
            document.getElementsByTagName('head')[0].appendChild(style);
        }
    }
}
