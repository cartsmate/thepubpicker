function redirect_add() {
    console.log("redirect_add")

    var base_url = window.location.hostname
    if (env_vars['env'] == 'qual') {
        var url = "http://" + base_url + ":5000/add/"
    } else {
        var url = "http://" + base_url + "/add/"
    }
    const myUrlWithParams = new URL(url);
    window.location.replace(myUrlWithParams.href);
}
