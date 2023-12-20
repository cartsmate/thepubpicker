function populate_photo() {
    console.log('POPULATE_PHOTO')
    for (i = 0; i < photos.length; i++) {
        var elem = 'photo_identity_' + i
        document.getElementById(elem).src = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photo_reference=' + photos[i]['photo_identity'] + '&key=AIzaSyCbb6tdoROEQuBKLZXybG5cNIB4UTc6A20'
        }
}
