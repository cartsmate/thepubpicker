function feature_click(check_item) {
    console.log("FEATURE_CLICK")
    console.log(check_item)
    console.log(document.getElementById(check_item).value)
    //form_type = document.getElementById('form_type').value
    //auto_exec = document.getElementById('auto_exec').value

    //console.log(form_type)
    //console.log(auto_exec)
    //console.log('form_type: ' + form_type)
    //if (form_type != 'read') {
    var checkBox = document.getElementById(check_item);
    //console.log(checkBox)
    var image = document.getElementById(check_item + "_img");
    var caption = document.getElementById(check_item + "_caption");
    var checkCol = document.getElementById(check_item + "_col");
    if (checkBox.checked == true){
        //console.log(checkBox.checked)
        document.getElementById(check_item).value = checkBox.checked
        //window.location.replace("/pub/list/" + check_item + "/True");
        image.style.opacity = "1.0"
        caption.style.opacity = "1.0"
        caption.style.color = "white"
        checkCol.style.background = "#0275D8"
        checkCol.style.border = "thick solid #0275D8";
    } else {
        //console.log(checkBox.checked)
        document.getElementById(check_item).value = checkBox.checked
        image.style.opacity = "1.0"
        caption.style.opacity = "1.0"
        caption.style.color = "black"
        checkCol.style.background = "#CDCDCD"
        checkCol.style.border = "thick solid #CDCDCD";
    }
    if (document.getElementById('form_type').value == 'home') {
        console.log('form_type')
        console.log(document.getElementById('form_type').value)
        click_list()
    } else {
        console.log('form_type')
        console.log(document.getElementById('form_type').value)
    }


}
