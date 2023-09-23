function featureHome(zoom) {
    console.log("featureList")
    var base_url = window.location.hostname
    if (config2['env'] == 'prod') {
        var url = "http://" + base_url + "/pub/list/"
    } else {
        var url = "http://" + base_url + ":5000/pub/list/"
    }
    const myUrlWithParams = new URL(url);
    myUrlWithParams.searchParams.append('direction', document.getElementById('direction').value);
    myUrlWithParams.searchParams.append('station', document.getElementById('station').value);
    myUrlWithParams.searchParams.append('zoom', zoom);
    for (var i = 0; i < icon_list.length; i++) {
        console.log(icon_list[i])
        console.log(document.getElementById(icon_list[i]).checked)
        myUrlWithParams.searchParams.append(icon_list[i], document.getElementById(icon_list[i]).checked);
    }
    window.location.replace(myUrlWithParams.href);
}
