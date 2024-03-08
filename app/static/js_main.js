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
addCss("/static/css/carousel_flat_spinner.css");}}
function show_results(){if(filtered_pubs.length==pub_all.length){console.log('on-load: filters CLEAR')}else{console.log('on-load: filters PRE-SET')
list_setup()
populate_header()
document.getElementById('template_map').style.display="block"
document.getElementById('template_list').style.display="block"
document.getElementById('template_header').style.display="block"}}
function set_color_theme(){let root=document.documentElement;let color=document.getElementById('body').getAttribute("data-color")
root.style.setProperty('--color',color)
console.log('set colour theme to: '+color)}
function isTouchDevice(){return(('ontouchstart'in window)||(navigator.maxTouchPoints>0)||(navigator.msMaxTouchPoints>0));}
function spinner_add_listener_click_face(){console.log('spinner_add_listener_click_face')
for(const[key,value]of Object.entries(review)){if(value.quick_filter){var marker=value.name
document.getElementById(value.name+"_carousel").addEventListener('click',(function(marker){return function(){if(document.getElementById(marker+'_carousel').style.opacity=='1'){if(document.getElementById(marker+"_filter").checked==true){update_carousel(marker,false)}else{for(const[key,value]of Object.entries(review)){if(value.quick_filter){update_carousel(value.name,false)
}}
update_carousel(marker,true)}
center_map()}else{console.log('opacity=0')}}})(marker))}}}
function update_carousel(feature,status){console.log('status: '+status)
document.getElementById(feature+"_filter").checked=status;current_carousel=document.getElementById(feature+"_carousel")
if(status){current_carousel.classList.remove('carousel_off')
current_carousel.classList.add('carousel_on')}else{current_carousel.classList.remove('carousel_on')
current_carousel.classList.add('carousel_off')}}
function populate_summary(show_pub){console.log('populate_summary: show_pub: '+show_pub.length)
text_ref=show_pub[0]['detail_name'].toString().substring(0,22)+" | "+show_pub[0]['station_name'].toString().substring(0,18)
document.getElementById('summary_name').innerHTML="<div style='text-decoration: none; justify-content: center; font-size: 14px; font-weight: 550;'>"+text_ref+"</div>"
populate_extra(show_pub)}
function populate_extra(show_pub){console.log('populate_extra')
document.getElementById('summary_extra').innerHTML="<div>"+show_pub[0]['extra']+"</div>"}
function populate_title(show_pub){console.log('populate_title')
text_ref=show_pub[0]['detail_name'].toString().substring(0,24)
console.log('name of pub: '+text_ref)
document.getElementById('pub_header').textContent=text_ref
}
function populate_photo_carousel(){for(i=0;i<photos_list.length;i++){api_call_text='https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+photos_list[i]+'&key='+env_vars['places_key']
console.log('photo: '+i)
document.getElementById("photo_"+i).src=api_call_text}}