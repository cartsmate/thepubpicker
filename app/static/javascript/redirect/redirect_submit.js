function redirect_submit(id) {
    console.log("redirect_submit")

    var base_url = window.location.hostname
    if (env_vars['env'] == 'qual') {
        var url = "http://" + base_url + ":5000/submit/"
    } else {
        var url = "http://" + base_url + "/submit/"
    }
    const myUrlWithParams = new URL(url);
    myUrlWithParams.searchParams.append('id', id);
    window.location.replace(myUrlWithParams.href);
}
