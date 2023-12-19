function filter_clear(selectElement) {
    //console.log('filter clear')
//    console.log('pub count: ' + pub.length)
    var e = document.getElementById(selectElement);

        //e.firstElementChild can be used.
    var child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }

    //var i, L = selectElement.length - 1;
    //for(i = L; i >= 0; i--) {
    //    selectElement.removeChild(i);
    //}
}
