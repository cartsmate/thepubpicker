function redirect_events() {
    console.log("redirect_events")

    var base_url = window.location.hostname
    if (env_vars['env'] == 'qual') {
        var url = "http://" + base_url + ":5000/events/"
    } else {
        var url = "http://" + base_url + "/events/"
    }
    const myUrlWithParams = new URL(url);
//    myUrlWithParams.searchParams.append('id', id);
    window.location.replace(myUrlWithParams.href);
}
