function redirect_edit(id, back) {
    console.log("redirect_edit")

    var base_url = window.location.hostname
    if (env_vars['env'] == 'qual') {
        var url = "http://" + base_url + ":5000/edit/"
    } else {
        var url = "http://" + base_url + "/edit/"
    }
    const myUrlWithParams = new URL(url);
    myUrlWithParams.searchParams.append('id', id);
    myUrlWithParams.searchParams.append('back', back);
    window.location.replace(myUrlWithParams.href);
}
