function redirect_summary() {
    console.log("redirect_summary")

    var base_url = window.location.hostname
    if (env_vars['env'] == 'qual') {
        var url = "http://" + base_url + ":5000/summary/"
    } else {
        var url = "http://" + base_url + "/summary/"
    }
    const myUrlWithParams = new URL(url);
    window.location.replace(myUrlWithParams.href);
}
