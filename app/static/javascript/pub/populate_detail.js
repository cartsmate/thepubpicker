function populate_detail(show_pub){
    console.log('POPULATE_DETAIL')
    for (const [key, value] of Object.entries(detail)) {
        inbox_item = document.getElementById(value.name)
        inbox_item.value = show_pub[0][value.name]
        if (value.name == 'website') {
            inbox_item.classList.add('pointer')
            inbox_item.style.color = "#0d6efd"
//            inbox_item.value = show_pub[0][value.name]
            inbox_item.onclick = function() { redirect_website(show_pub[0]['website']); };
//        } else {
//            console.log(value.name)
//
//            console.log(show_pub[0][value.name])
//            document.getElementById(value.name).style.color = "black"
//            document.getElementById(value.name).textContent = show_pub[0][value.name]
        }
    }
}
