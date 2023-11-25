function redirect_pub(id) {
    console.log("redirect_pub")
    //console.log('id: ' + id)
    //form_type = 'read'
    //page_layout('read')


    var base_url = window.location.hostname
    if (env_vars['env'] == 'qual') {
        var url = "http://" + base_url + ":5000/pub/"
    } else {
        var url = "http://" + base_url + "/pub/"
    }
    const myUrlWithParams = new URL(url);
    myUrlWithParams.searchParams.append('id', id);
    window.location.replace(myUrlWithParams.href);
}
