function spinner_set_css_classes(number_of_review_attributes){console.log('spinner_set_css_classes: '+number_of_review_attributes)
carousel_position=0
var degree_increment=0
var degree_segments=360/number_of_review_attributes
for(const[key,value]of Object.entries(review)){if(value.quick_filter=='yes'){div_x=document.getElementById(value.name+"_carousel")
var calc_deg=(degree_segments*degree_increment).toString();div_x.style.transform="rotateY("+calc_deg+"deg) translateZ(var(--translateZ))";var quick_filter_name=value.name
var quick_filter_degree=degree_increment
carousel_order.push({quick_filter_name,quick_filter_degree})
var car_width="80px"
div_x.style.width=car_width
document.getElementById('the_carousel').style.width=car_width
document.getElementById('test_carousel').style.width=car_width
degree_increment++}}
console.log('carousel_order')
console.log(carousel_order)}
function spinner_set_css_classes_flat(){console.log('spinner_set_css_classes: '+number_of_review_attributes)
var style=document.createElement('style');for(const[key,value]of Object.entries(review)){if(value.quick_filter=='yes'){var css='{{value.name}}_carousel:hover{ background-color: #808000 }';style.appendChild(document.createTextNode(css));document.getElementsByTagName('head')[0].appendChild(style);}}}
function get_filter_values(){filter_list=[]
direction_list=['dl']
for(i=0;i<directions_list.length;i++){if(document.getElementById(directions_list[i][0]+"_filter").checked==true){direction_list.push(directions_list[i][0])
}else{}}
console.log(direction_list)
filter_list.push(direction_list)
station_list=['sl']
for(i=0;i<stations_directions_list.length;i++){if(document.getElementById(stations_directions_list[i][0]+"_filter").checked==true){station_list.push(stations_directions_list[i][0])
}else{}}
filter_list.push(station_list)
feature_list=['fl']
for(const[key,value]of Object.entries(review)){if(value.filter=='yes'){if(document.getElementById(value.name+"_filter").checked==true){feature_list.push(value.name)}}}
filter_list.push(feature_list)
return filter_list}
function finalise_results(){console.log('finalise_results')
if((search_string=='')&&(filtered_pubs.length==pub_all.length)){display_results('none')}else if((search_string!='')&&(filtered_pubs.length==pub_all.length)){filtered_pubs=filtered_pubs.slice(0,99)
populate_header()
display_results('block')}else{populate_header()
display_results('block')}}
function display_results(display){console.log('display_results: '+display)
document.getElementById('template_map').style.display=display
document.getElementById('template_list').style.display=display
document.getElementById('template_header').style.display=display}
function update_filters(){filtered_pubs=filter_by_()
var unique_filter=get_unique_list(filtered_pubs)
console.log('unique_filter: '+unique_filter.length)
return filtered_pubs}
function on_click_event(){console.log('USER INPUT - on click event')
for(const[key,value]of Object.entries(review)){if(value.quick_filter){if(document.getElementById(value.name+"_filter").checked==true){current_carousel=document.getElementById(value.name+"_carousel")
current_carousel.classList.remove('carousel_off')
current_carousel.classList.add('carousel_on')}else{current_carousel=document.getElementById(value.name+"_carousel")
current_carousel.classList.remove('carousel_on')
current_carousel.classList.add('carousel_off')}}}
center_map()}
function on_click_feature(){console.log('USER INPUT - on click feature')
for(const[key,value]of Object.entries(review)){if(value.quick_filter){if(document.getElementById(value.name+"_filter").checked){current_carousel=document.getElementById(value.name+"_carousel")
current_carousel.classList.remove('carousel_off')
current_carousel.classList.add('carousel_on')}else{current_carousel=document.getElementById(value.name+"_carousel")
current_carousel.classList.remove('carousel_on')
current_carousel.classList.add('carousel_off')}}}
center_map()}
function on_click_station(){console.log('USER INPUT - on click station')
center_map()}
function on_click_direction(clicked_value){console.log('USER INPUT - on click direction')
center_map()}
function on_click_days(clicked_day){console.log('USER INPUT - on_click_days')
var words=clicked_day+"_filter"
console.log(words)
if(document.getElementById(clicked_day+"_filter").checked){document.getElementById(clicked_day+"_filter").checked=false
document.getElementById(clicked_day+"_face").style.background="#f5f5f5"
document.getElementById(clicked_day+"_caption").style.color="black"}else{document.getElementById(clicked_day+"_filter").checked=true
document.getElementById(clicked_day+"_face").style.background="#808000"
document.getElementById(clicked_day+"_caption").style.color="white"}
center_map()}
function populate_header(){console.log('populate header')
document.getElementById('pub_length').textContent="Pubs founds: "+filtered_pubs.length
if(filtered_pubs.length>100){document.getElementById('pub_limit').textContent="map limited to 100 pubs"
document.getElementById('pub_limit').style.color="red"
document.getElementById('pub_limit').style.fontSize="12px"
document.getElementById('pub_limit').style.fontWeight="bold"}else{document.getElementById('pub_limit').textContent=""}}