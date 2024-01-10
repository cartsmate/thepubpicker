function redirect_new() {
    console.log("redirect_new")

    var base_url = window.location.hostname
    if (env_vars['env'] == 'qual') {
        var url = "http://" + base_url + ":5000/new/"
    } else {
        var url = "http://" + base_url + "/new/"
    }
    const myUrlWithParams = new URL(url);
    window.location.replace(myUrlWithParams.href);
}

function redirect_summarys(test) {
    console.log("redirect_summary")
    console.log('test')
    console.log(test)

}
