function redirect_collection_id(back, back_id) {
    console.log("redirect_collection_id")

    var base_url = window.location.hostname
    if (env_vars['env'] == 'qual') {
        var url = "http://" + base_url + ":5000/collection/"
    } else {
        var url = "http://" + base_url + "/collection/"
    }
    const myUrlWithParams = new URL(url);
    myUrlWithParams.searchParams.append('back', back);
    myUrlWithParams.searchParams.append('back_id', back_id);

    window.location.replace(myUrlWithParams.href);
}
