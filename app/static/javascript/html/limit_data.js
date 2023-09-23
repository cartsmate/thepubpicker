function limit_data(data) {
    console.log('LIMIT_DATA')
    if (document.getElementById('search').value != '') {
        data = data.slice(0,10)
    } else {
        data = data
        //.slice(0,20)
    }
    return data
}
