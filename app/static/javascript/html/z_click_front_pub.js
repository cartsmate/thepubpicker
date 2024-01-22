function click_front_pub(id) {
    console.log("CLICK_FRONT_PUB")
    //console.log('id: ' + id)
    //form_type = 'read'
    //page_layout('read')


    var base_url = window.location.hostname
    if (config2['env'] == 'qual') {
        var url = "http://" + base_url + ":5000/pub/"
    } else {
        var url = "http://" + base_url + "/pub/"
    }
    const myUrlWithParams = new URL(url);
    myUrlWithParams.searchParams.append('id', id);
    window.location.replace(myUrlWithParams.href);
}
