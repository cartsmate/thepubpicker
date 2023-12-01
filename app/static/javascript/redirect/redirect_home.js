function redirect_home() {
    console.log("redirect_home")

    var base_url = window.location.hostname
    if (env_vars['env'] == 'qual') {
        var url = "http://" + base_url + ":5000/"
    } else {
        var url = "http://" + base_url + "/"
    }
    const myUrlWithParams = new URL(url);
    window.location.replace(myUrlWithParams.href);
}
