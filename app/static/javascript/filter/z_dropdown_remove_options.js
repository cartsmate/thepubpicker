function remove_options(selectElement) {
    console.log('REMOVE_OPTIONS')
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
        selectElement.remove(i);
    }
}