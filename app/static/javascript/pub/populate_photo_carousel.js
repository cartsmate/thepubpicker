function populate_photo_carousel() {
    console.log('populate photo carousel')
    //api_call_text = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + photos_list[0] + '&key=' + env_vars['places_key']
    //document.getElementById('photo_0').src = api_call_text
    console.log('images')
    console.log(images)

    //for (i = 0; i < photos_list.length; i++) {
    for (i = 0; i < images.length; i++) {
        /*
        var div_element = document.createElement("div")
        div_element.classList.add("carousel-item");

        var img_element = document.createElement("img")
        img_element.id = "photo_" + i
        img_element.style.height = "200px"
        img_element.style.width = "300px"
        img_element.classList.add("d-block")
        img_element.classList.add("w-100")
        */
        console.log('photo: ' + i)
        document.getElementById("photo_" + i).alt = photos_list[i]
        document.getElementById("photo_caption_" + i).color = "white"
        document.getElementById("photo_caption_" + i).textContent = i
        api_call_text = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + photos_list[i] + '&key=' + env_vars['places_key']
        document.getElementById("photo_" + i).src = api_call_text
        //document.getElementById("photo_" + i).src = images[i]

        //div_element.appendChild(img_element)

        //var carousel_inner = document.getElementById('carousel_photo_inner')
        //carousel_inner.appendChild(div_element)
    }
}
