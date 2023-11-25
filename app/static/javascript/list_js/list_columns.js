function list_columns() {
    console.log('COLUMN_FILTER')
    //console.log('visible')
    //console.log(visible)
    var headers = []
    for (var key in pub[0]) {
        headers.push(key)
    }

    diary_headers = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
    //station = document.getElementById('station').value
    station = 'all'
    //day = document.getElementById('day').value
    day = 'all'
    /*
    if (document.getElementById('search-input-navbar').value != '') {
        console.log('search selected')
        for (let i = 0; i < diary_headers.length; i++) {
            visible[diary_headers[i]] = 'false'
            }
        visible['station_name'] = 'true'
        visible['rank'] = 'true'
        visible['pub_name'] = 'true'
        visible['distance'] = 'false'
        const isIndex = (element) => element == 'distance'
        order = headers.findIndex(isIndex);
        asc_desc = 'asc'
    } else
    */
    if (station != 'all' && day != 'all') {
        console.log('station and day selected')
        for (let i = 0; i < diary_headers.length; i++) {
            visible[diary_headers[i]] = 'false'
            }
        visible[day] = 'true'
        visible['station_name'] = 'false'
        visible['rank'] = 'true'
        visible['pub_name'] = 'true'
        visible['distance'] = 'false'
        const isIndex = (element) => element == day
        order = headers.findIndex(isIndex);
        asc_desc = 'desc'
        //filter_table(headers, visible, order)
    } else if (station != 'all') {
        console.log('station only selected')
        for (let i = 0; i < diary_headers.length; i++) {
            visible[diary_headers[i]] = 'false'
            }
        visible['station_name'] = 'false'
        visible['rank'] = 'true'
        visible['pub_name'] = 'true'
        visible['distance'] = 'false'
        const isIndex = (element) => element == 'rank';
        order = headers.findIndex(isIndex);
        asc_desc = 'desc'
        //filter_table(headers, visible, order)
    } else if (day != 'all') {
        console.log('day only selected')
        for (let i = 0; i < diary_headers.length; i++) {
            visible[diary_headers[i]] = 'false'
            }
        visible[day] = 'true'
        visible['station_name'] = 'true'
        visible['rank'] = 'false'
        visible['pub_name'] = 'true'
        visible['distance'] = 'false'
        const isIndex = (element) => element == day;
        order = headers.findIndex(isIndex);
        asc_desc = 'desc'
        //filter_table(headers, visible, order)
    } else {
        console.log('default table')
        //for (var key of Object.keys(visible)) {
        //    console.log(key + " -> " + visible[key])
        //}

        for (let i = 0; i < diary_headers.length; i++) {
            visible[diary_headers[i]] = 'false'
            }
        visible['station_name'] = 'true'
        visible['rank'] = 'true'
        visible['pub_name'] = 'true'
        //visible['distance'] = 'false'

        const isIndex = (element) => element == 'rank';
        order = headers.findIndex(isIndex);
        asc_desc = 'desc'
        //filter_table(headers, visible, order)
    }
    //visible['pub_identity'] = true
    //console.log('visible')
    //console.log(visible)
    //console.log('order')
    //console.log(order)
    return [visible, order, asc_desc]
}
