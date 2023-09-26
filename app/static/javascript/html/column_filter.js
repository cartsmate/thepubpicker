function column_filter() {
    console.log('COLUMN_FILTER')
    console.log('visible')
    console.log(visible)
    diary_headers = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
    //station = document.getElementById('station').value
    station = 'all'
    //day = document.getElementById('day').value
    day = 'all'
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
    } else if (station != 'all' && day != 'all') {
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
        for (let i = 0; i < diary_headers.length; i++) {
            visible[diary_headers[i]] = 'false'
            }
        visible['station_name'] = 'true'
        visible['rank'] = 'true'
        visible['pub_name'] = 'true'
        visible['distance'] = 'false'
        const isIndex = (element) => element == 'rank';
        order = headers.findIndex(isIndex);
        asc_desc = 'desc'
        //filter_table(headers, visible, order)
    }
    //visible['pub_identity'] = true
    console.log('visible')
    console.log(visible)
    console.log('order')
    console.log(order)
    return [visible, order, asc_desc]
}
