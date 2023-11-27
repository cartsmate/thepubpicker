function redirect_collection() {
    console.log("redirect_collection")

    var base_url = window.location.hostname
    if (env_vars['env'] == 'qual') {
        var url = "http://" + base_url + ":5000/collection/"
    } else {
        var url = "http://" + base_url + "/collection/"
    }
    const myUrlWithParams = new URL(url);
    window.location.replace(myUrlWithParams.href);
}
