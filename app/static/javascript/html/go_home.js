function go_home() {
    console.log("go_home")

    var base_url = window.location.hostname
    if (config2['env'] == 'prod') {
        var url = "http://" + base_url + "/"
    } else {
        var url = "http://" + base_url + ":5000/"
    }
    const myUrlWithParams = new URL(url);

    window.location.replace(myUrlWithParams.href);
}
