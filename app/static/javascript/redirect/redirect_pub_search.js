function redirect_pub_search(id) {
    console.log("redirect_pub_search")

    filters = get_filter_values()

    var base_url = window.location.hostname
    if (env_vars['env'] == 'qual') {
        var url = "http://" + base_url + ":5000/pub/"
    } else {
        var url = "http://" + base_url + "/pub/"
    }
    const myUrlWithParams = new URL(url);
    myUrlWithParams.searchParams.append('id', id);
    myUrlWithParams.searchParams.append('filters', filters);
    window.location.replace(myUrlWithParams.href);

}
