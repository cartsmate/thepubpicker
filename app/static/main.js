function display_counter(counter){document.getElementById("digit_100000").textContent=counter.substring(0,1)
document.getElementById("digit_10000").textContent=counter.substring(1,2)
document.getElementById("digit_1000").textContent=counter.substring(2,3)
document.getElementById("digit_100").textContent=counter.substring(3,4)
document.getElementById("digit_10").textContent=counter.substring(4,5)
document.getElementById("digit_1").textContent=counter.substring(5,6)
console.log('display counter: '+counter)}
function get_no_reviews(){var rev_num=0
for(const[key,value]of Object.entries(review)){if(value.quick_filter=='yes'){rev_num++}}
return rev_num}
function get_unique_list(filtered_pubs){unique_data=filtered_pubs.filter(function(a){var key=a.pub_identity
if(!this[key]){this[key]=true;return true;}},Object.create(null));return unique_data}
function setup_filters(){console.log('create filters')
toggle_overlay()
toggle_filters()
}
function setup_filters_populate(data){console.log('setup_filters_populate')
create_filter_(data)
console.log('filters: '+filters)
pre_populate(filters)
pub_filtered=filter_by_(data)
create_filter_(pub_filtered)
return pub_filtered}
function onload_admin(){console.log('onload ADMIN')
set_color_theme()}
function start_up(page){add_css()
set_color_theme()
the_map=document.getElementById('new_map')
the_map.classList.add('map_on_pub')
map_load(page)}
function onload_home(){console.log('onload - HOME')
start_up('home')
display_counter(counter)
setup_filters()
filtered_pubs=setup_filters_populate(pub_all)
populate_summary(pub_1)
show_results()}
function onload_pub(){console.log('onload pub')
start_up('pub')
filtered_pubs=unique_data=pub_1
populate_pub(pub_1,'pub')
populate_events(events);populate_photo_carousel()}
function onload_add(){console.log('onload_add pub: '+pub_1)
start_up('add')
populate_pub(pub_1,'add')}
function onload_edit(){console.log('onload pub - edit')
start_up('edit')
filtered_pubs=unique_data=pub_1
populate_pub(pub_1,'edit')
populate_events(events);populate_photo_carousel()}
function addCss(fileName){var link=$("<link />",{rel:"stylesheet",type:"text/css",href:fileName})
$('head').append(link);}
function add_css(){if(isTouchDevice()){console.log('TOUCH SCREEN device in operation')}else{console.log('NO-TOUCH screen device in operation')
addCss("/static/css/carousel/carousel_flat_spinner.css");}}
function show_results(){if(filtered_pubs.length==pub_all.length){console.log('on-load: filters CLEAR')}else{console.log('on-load: filters PRE-SET')
list_setup()
populate_header()
document.getElementById('template_map').style.display="block"
document.getElementById('template_list').style.display="block"
document.getElementById('template_header').style.display="block"}}