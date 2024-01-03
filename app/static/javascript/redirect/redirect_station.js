function redirect_station(station_identity, back) {
    console.log("redirect station")

    var base_url = window.location.hostname
    if (env_vars['env'] == 'qual') {
        var url = "http://" + base_url + ":5000/collection/"
    } else {
        var url = "http://" + base_url + "/collection/"
    }
    const myUrlWithParams = new URL(url);
    myUrlWithParams.searchParams.append('station_id', station_identity);
    myUrlWithParams.searchParams.append('back', back);
    window.location.replace(myUrlWithParams.href);
}
