function toggle_diary() {
    var button_reset = document.getElementById('button_reset')

    button_reset.addEventListener("click", function() {

        filter_reset()
        console.log('USER INPUT: reset click')
        console.log('pub length: ' + pub.length)
        //pub_filtered = pub
        //list_setup_beta(pub_filtered)
        //populate_review(pub_filtered)
        populate_all_filters(pub)
        //populate_header(pub_filtered.length)
        //map_load_collection(pub_filtered)
        document.getElementById('template_map').style.display = 'none'
        document.getElementById('template_list').style.display = 'none'
        document.getElementById('template_header').style.display = 'none'

    })
}
