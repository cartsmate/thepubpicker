function populate_photo() {
    console.log('POPULATE_PHOTO')
    for (i = 0; i < photos_list.length; i++) {
        var elem = 'photo_identity_' + i
        texty = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + photos_list[i] + '&key=' + env_vars['places_key']
        console.log(texty)
        document.getElementById(elem).src = texty
        }
}
