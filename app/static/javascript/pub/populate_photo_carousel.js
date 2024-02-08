function populate_photo_carousel() {
    for (i = 0; i < photos_list.length; i++) {
        api_call_text = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + photos_list[i] + '&key=' + env_vars['places_key']
        document.getElementById("photo_" + i).src = api_call_text
    }
}
