function clear_filter(selectElement) {

    var e = document.getElementById(selectElement);
    var child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}
