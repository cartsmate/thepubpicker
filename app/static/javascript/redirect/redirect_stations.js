function redirect_stations(back) {
    console.log("redirect stations")

    var base_url = window.location.hostname
    if (env_vars['env'] == 'qual') {
        var url = "http://" + base_url + ":5000/collection/"
    } else {
        var url = "http://" + base_url + "/collection/"
    }
    const myUrlWithParams = new URL(url);
    myUrlWithParams.searchParams.append('station_id', pub[0]['station_identity']);
    myUrlWithParams.searchParams.append('back', back);
    window.location.replace(myUrlWithParams.href);
}
