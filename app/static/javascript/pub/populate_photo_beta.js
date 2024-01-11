function populate_photo_beta() {
    console.log('POPULATE_PHOTO beta')
    for (i = 0; i < photos_list.length; i++) {
        var elem = 'photo_' + i
        console.log(photos_list[i])
        console.log(env_vars['places_key'])
        texty = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + photos_list[i] + '&key=' + env_vars['places_key']
        console.log(texty)
        document.getElementById(elem).src = texty
        }
}
