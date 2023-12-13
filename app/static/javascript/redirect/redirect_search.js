function redirect_search() {
    console.log("redirect_search")

    var base_url = window.location.hostname
    if (env_vars['env'] == 'qual') {
        var url = "http://" + base_url + ":5000/search/"
    } else {
        var url = "http://" + base_url + "/search/"
    }
    const myUrlWithParams = new URL(url);
    window.location.replace(myUrlWithParams.href);
}
