function filter_by_feature_menu() {
    console.log('USER INPUT: click on feature to FILTER icons')
    update_filters()
}
function filter_by_feature_icon(check_item) {
    console.log('USER INPUT: click on feature to FILTER icons')
    update_feature_menu(check_item)
    update_filters()
}
function update_feature_menu(check_item) {
    console.log('USER INPUT: click on feature to SELECT ICON and FILTER')
    console.log(check_item)
    set_feature_icon_colour(check_item)
    var checkBox = document.getElementById(check_item);
    if (checkBox.checked == true) {
        console.log('true')
        document.getElementById(check_item + "_filter").checked = true
    } else {
        console.log('false')
        document.getElementById(check_item + "_filter").checked = false
    }
}
function update_filters() {
    console.log('update filters')
    pub_filtered = filter_all_data()
    populate_all_filters_collection(pub_filtered)
    list_setup(pub_filtered)
    populate_review(pub_filtered)
    populate_header(pub_filtered.length)
    map_load_collection(pub_filtered)
}
function set_feature_icon_colour(check_item) {
    console.log('set feature icon colour')
    var checkBox = document.getElementById(check_item + "_check");
    var image = document.getElementById(check_item + "_img");
    var caption = document.getElementById(check_item + "_caption");
    var checkCol = document.getElementById(check_item + "_col");
    if (checkBox.checked == true) {
        console.log('checkbox is true')
        image.style.opacity = "1.0"
        caption.style.opacity = "1.0"
        caption.style.color = "white"
        checkCol.style.background = "coral"
        checkCol.style.border = "thin solid coral";
        checkBox.value = true
    } else {
        console.log('checkbox is false')
        image.style.opacity = "0.5"
        caption.style.opacity = "0.5"
        caption.style.color = "black"
        checkCol.style.background = "white"
        checkCol.style.border = "thin solid coral";
        checkBox.value = false
    }
}