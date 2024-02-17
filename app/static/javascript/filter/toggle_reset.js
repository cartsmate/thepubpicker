function toggle_reset() {
    var button_reset = document.getElementById('button_reset')

    button_reset.addEventListener("click", function() {

        filter_reset()
        console.log('USER INPUT: reset click')
        console.log('pub length: ' + pub_all.length)
        create_filter_(pub_all)
        document.getElementById('template_map').style.display = 'none'
        document.getElementById('template_list').style.display = 'none'
        document.getElementById('template_header').style.display = 'none'

    })
}
