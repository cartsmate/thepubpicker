function list_columns_diary() {
    console.log('list columns diary')

    pub_attributes = []
    visible = {}
    for (var key in pub[0]) {
        pub_attributes.push(key)
        visible[key] = false
    }

    diary_headers = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
    for (i=0; i<diary_headers.length; i++) {
        if (document.getElementById(diary_headers[i] + "_filter").checked) {
//            console.log('ticked')
//            console.log(diary_headers[i])
            visible[diary_headers[i]] = true
        } else {
//            console.log('UN - ticked')
//            console.log(diary_headers[i])
        }
    }


    visible['rank'] = true
    visible['detail_name'] = true

    const isIndex = (element) => element == 'rank';

    order = pub_attributes.findIndex(isIndex);
    asc_desc = 'desc'

    return [visible, order, asc_desc]
}


//    console.log('count')
//    console.log(count)

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
    } elif (station != 'all' && day != 'all') {
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

    for (let i = 0; i < diary_headers.length; i++) {
        visible[diary_headers[i]] = 'false'
        }
    */