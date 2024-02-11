function populate_event(pub_filtered) {
    console.log('---- populate_event, in: ' + pub_filtered.length)
    filter_clear('checks_event')

    for (const [key, value] of Object.entries(review)) {
        if (value.event_filter) {

            var filtered_data = pub_filtered.filter(function(x) {
                return x['event_type'] == value.name
            })
            //console.log(filtered_data.length)
//            filtered_data = pub_filtered
            record = document.createElement("div")
            record.className = 'row'
            checks_feature = document.getElementById("checks_event")

            label = document.createElement("div")
            label.id = value.name + "_id"
            label.className = 'check_label'
            label.textContent = value.alias2 + " (" + filtered_data.length + ") "
            record.appendChild(label)
            checks_feature.appendChild(record)

            input = document.createElement("input")
            input.type = "checkbox"
            //input.class = "radio"
            //input.value = value.name
            //input.name = "fooay[1][]"

            input.id = value.name + "_filter"
            if (filtered_data.length > 0 ) {
                input.onclick = function() { on_click_event() }
            } else {
//                document.getElementById(value.name + "_filter").disabled = true
                input.onclick = function() { return false }
            }


            if (filtered_data.length > 0) {
                label.style.display = "block"
            } else {
                label.style.display = "none"
            }
            if (filtered_data.length == pub_filtered.length) {
                input.checked = true
            }
            label.appendChild(input)

            if (value.quick_filter == 'yes') {
                if (filtered_data.length > 0) {
                    label.style.display = "block"
                    document.getElementById(value.name + '_carousel').style.opacity = '1.0'
                    document.getElementById(value.name + '_icon').style.opacity = '1.0'
                    document.getElementById(value.name + '_word').style.opacity = '1.0'
//                    input.onclick = function() { on_click_event() }

                } else {
                    label.style.display = "none"
                    document.getElementById(value.name + '_carousel').style.opacity = '0.25'
                    document.getElementById(value.name + '_icon').style.opacity = '0.25'
                    document.getElementById(value.name + '_word').style.opacity = '0.25'
//                    input.onclick = function() { return false }
                }
            }

        }
    }


    // the selector will match all input controls of type :checkbox
    // and attach a click event handler
    $("input:checkbox").on('click', function() {
        // in the handler, 'this' refers to the box clicked on
        var $box = $(this);
        if ($box.is(":checked")) {
            //console.log('INSIDE is CHECKED')
            //console.log($box.attr("name"))
            //console.log($box.attr("value"))
//            list_setup_event($box.attr("value"))
//            document.getElementById('template_list').display = "block"
            // the name of the box is retrieved using the .attr() method
            // as it is assumed and expected to be immutable
            var group = "input:checkbox[name='" + $box.attr("name") + "']";
            // the checked state of the group/box on the other hand will change
            // and the current value is retrieved using .prop() method
            $(group).prop("checked", false);
            $box.prop("checked", true);
            //on_click_event()
        } else {
            //console.log('INSIDE is UNchecked')
            $box.prop("checked", false);
            //list_setup_event('none')
        }
    });

}
