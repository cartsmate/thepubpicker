function toggle_diary() {
    // the selector will match all input controls of type :checkbox
    // and attach a click event handler
    $("input:checkbox").on('click', function() {
        // in the handler, 'this' refers to the box clicked on
        var $box = $(this);
        if ($box.is(":checked")) {
            console.log('INSIDE is CHECKED')
            console.log($box.attr("name"))
            console.log($box.attr("value"))
            list_setup_diary($box.attr("value"))
            // the name of the box is retrieved using the .attr() method
            // as it is assumed and expected to be immutable
            var group = "input:checkbox[name='" + $box.attr("name") + "']";
            // the checked state of the group/box on the other hand will change
            // and the current value is retrieved using .prop() method
            $(group).prop("checked", false);
            $box.prop("checked", true);
        } else {
            console.log('INSIDE is UNchecked')
            $box.prop("checked", false);
            list_setup_diary('none')
        }
    });

    var button_diary = document.getElementById('button_diary2')
    var content_direction = document.getElementById('content_direction')
    var content_station = document.getElementById('content_station')
    //var content_diary = document.getElementById('content_diary')
    var content_diary = document.getElementById('content_diary2')
    var content_feature = document.getElementById('content_feature')

    button_diary.addEventListener("click", function() {
        if (content_diary.style.display === "none") {
            content_diary.style.display = "flex";
            content_direction.style.display = "none"
            content_station.style.display = "none"
            content_feature.style.display = "none"
            //content_diary.style.display = "none"
        } else {
            content_diary.style.display = "none"
        }
    })
}
