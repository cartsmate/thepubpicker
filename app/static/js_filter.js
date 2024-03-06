function clear_filter(selectElement){var e=document.getElementById(selectElement);var child=e.lastElementChild;while(child){e.removeChild(child);child=e.lastElementChild;}}
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
function pre_populate(filters_str){console.log('-- pre_populate: '+filters_str)
if(filters_str!='dl,sl,fl'&&filters_str!='null'&&filters_str!=null&&filters_str==''){console.log('pre-populate filters')
var filters_list=filters_str.split(',');d_list=[]
d_obj={}
s_list=[]
s_obj={}
f_list=[]
f_obj={}
for(i=0;i<filters_list.length;i++){if(filters_list[i]=='dl'){d_obj['start']=i;break;}}
for(i=0;i<filters_list.length;i++){if(filters_list[i]=='sl'){s_obj['start']=i;break;}}
for(i=0;i<filters_list.length;i++){if(filters_list[i]=='fl'){f_obj['start']=i;break;}}
d_list=filters_list.slice(d_obj['start']+1,s_obj['start'])
for(i=0;i<d_list.length;i++){console.log(d_list[i])
document.getElementById(d_list[i]+"_filter").checked=true}
s_list=filters_list.slice(s_obj['start']+1,f_obj['start'])
for(i=0;i<s_list.length;i++){console.log(s_list[i])
document.getElementById(s_list[i]+"_filter").checked=true}
f_list=filters_list.slice(f_obj['start']+1)
for(i=0;i<f_list.length;i++){console.log(f_list[i])
document.getElementById(f_list[i]+"_filter").checked=true}}}
function filter_reset(){console.log('FILTER_RESET: '+pub_all.length)
all_data=pub_all
document.getElementById('template_map').style.display="none"
document.getElementById('template_list').style.display="none"
document.getElementById('template_header').style.display="none"
create_filter_direction(pub_all)
create_filter_station(pub_all)
for(const[key,value]of Object.entries(review)){console.log('-- reset features')
if(value.menu_filter){var filtered_data=all_data.filter(function(x){return x[value.name]=='1'})
document.getElementById(value.name+"_filter").style.display='block'
document.getElementById(value.name+"_filter").checked=false
document.getElementById(value.name+"_id").style.display='block'
document.getElementById(value.name+"_id").innerHTML=value.name+" ("+filtered_data.length+")"
if(value.quick_filter){if(document.getElementById(value.name+"_carousel").classList.contains('carousel_on')){document.getElementById(value.name+"_carousel").classList.remove('carousel_on')
document.getElementById(value.name+"_carousel").classList.add('carousel_off')}}}}
for(const[key,value]of Object.entries(diary)){console.log('--reset diary')
if(value.menu_filter){document.getElementById(value.name+"_filter").checked=false}}
document.getElementById('search-input-navbar').value=''
document.getElementById('active_filter_count').value='0'
document.getElementById('active_filter_count').style.display="none"
if(document.getElementById("filter_overlay_btn").classList.contains('filters_on')){document.getElementById("filter_overlay_btn").classList.remove('filters_on')
document.getElementById("filter_overlay_btn").classList.add('filters_off')}
if(document.getElementById("filter_overlay_span").classList.contains('filters_span_on')){document.getElementById("filter_overlay_span").classList.remove('filters_span_on')
document.getElementById("filter_overlay_span").classList.add('filters_span_off')}
document.getElementById('button_direction').style.fontWeight='normal'
document.getElementById('button_station').style.fontWeight='normal'
document.getElementById('button_feature').style.fontWeight='normal'
document.getElementById('button_event').style.fontWeight='normal'
document.getElementById('button_diary').style.fontWeight='normal'
hide_filters()}
function toggle_overlay(){var coll=document.getElementsByClassName("collapsible_filters");var i;for(i=0;i<coll.length;i++){coll[i].addEventListener("click",function(){this.classList.toggle("active");var content=this.nextElementSibling;if(content.style.display==="flex"){content.style.display="none";}else{content.style.display="flex"}})}}
function show_filters(){console.log('show_filters')
document.getElementById("overlay").style.display="block";document.getElementById("collapsible_filters_sm").style.width="95px";document.getElementById("search-input-navbar").style.width="250px";}
function hide_filters(){console.log('hide_filter')
var counter=document.getElementById('active_filter_count').textContent
if(counter>0){document.getElementById("collapsible_filters_sm").style.width="95px";document.getElementById("search-input-navbar").style.width="250px";}else{document.getElementById("collapsible_filters_sm").style.width="60px";document.getElementById("search-input-navbar").style.width="285px";}
document.getElementById("overlay").style.display="none";content_direction.style.display="none"
content_station.style.display="none"
content_feature.style.display="none"
content_diary.style.display="none"
parent_btn=document.getElementById('content_filters')
parent_btn.style.display="none";}
function toggle_reset(){var button_reset=document.getElementById('button_reset')
button_reset.addEventListener("click",function(){filter_reset()
console.log('USER INPUT: reset click')
console.log('pub length: '+pub_all.length)
create_filter_(pub_all)
document.getElementById('template_map').style.display='none'
document.getElementById('template_list').style.display='none'
document.getElementById('template_header').style.display='none'})}
function create_filter_(data_in){console.log('-- create_filter_: '+data_in.length)
create_filter_direction(data_in)
create_filter_station(data_in)
create_filter_feature(data_in)
create_filter_diary(data_in)
create_filter_event(data_in)
}
function create_filter_diary(pub_filtered){console.log('---- create_filter_diary: '+pub_filtered.length)
days_of_the_week=[['Mon','monday'],['Tue','tuesday'],['Wed','wednesday'],['Thu','thursday'],['Fri','friday'],['Sat','saturday'],['Sun','sunday']]
for(i=0;i<days_of_the_week.length;i++){var filtered_data=pub_filtered.filter(function(pub){return(pub['event_day']==days_of_the_week[i][1])})
var unique_filter=get_unique_list(filtered_data)
if(filtered_data.length>0){document.getElementById(days_of_the_week[i][1]+'_count').textContent="("+unique_filter.length+")"
document.getElementById(days_of_the_week[i][1]+'_face').style.opacity='1.0'
document.getElementById(days_of_the_week[i][1]+'_filter').disabled=false}else{document.getElementById(days_of_the_week[i][1]+'_count').textContent=''
document.getElementById(days_of_the_week[i][1]+'_face').style.opacity='0.5'
document.getElementById(days_of_the_week[i][1]+'_filter').disabled=true}
if(document.getElementById(days_of_the_week[i][1]+'_filter').checked){if(document.getElementById(days_of_the_week[i][1]+'_face').classList.contains('carousel_off')){document.getElementById(days_of_the_week[i][1]+'_face').classList.remove('carousel_off')}
document.getElementById(days_of_the_week[i][1]+'_face').classList.add('carousel_on')}else{if(document.getElementById(days_of_the_week[i][1]+'_face').classList.contains('carousel_on')){document.getElementById(days_of_the_week[i][1]+'_face').classList.remove('carousel_on')}
document.getElementById(days_of_the_week[i][1]+'_face').classList.add('carousel_off')}}}
function create_filter_direction(pub_filtered){console.log('---- create_filter_direction: '+pub_filtered.length)
var select=document.getElementById("direction");var option=document.createElement("option");clear_filter('checks_direction')
for(i=0;i<directions_list.length;i++)(function(i,pub_filtered){var filtered_data=pub_filtered.filter(function(x){return x.direction_identity==directions_list[i][0]})
var unique_filter=get_unique_list(filtered_data)
record=document.createElement("div")
record.className="row"
checks_direction=document.getElementById('checks_direction')
label=document.createElement("div")
label.style.width="230px"
label.style.font="8px"
label.id=directions_list[i][0]+"_id"
label.innerHTML="<div style='font-size: 12px; padding: 0px; margin: 0px;'>"+directions_list[i][1]+" ("+unique_filter.length+") "+"</div>"
record.appendChild(label)
checks_direction.appendChild(record)
input=document.createElement("input")
input.type="checkbox"
input.id=directions_list[i][0]+"_filter"
input.onclick=function(){on_click_direction(this.value)}
if(filtered_data.length>0){label.style.display="block"}else{label.style.display="none"}
if(filtered_data.length==pub_filtered.length){input.checked=true}
label.appendChild(input)})(i,pub_filtered)}
function create_filter_event(pub_filtered){console.log('---- create_filter_event: '+pub_filtered.length)
clear_filter('checks_event')
for(const[key,value]of Object.entries(review)){if(value.event_filter){var filtered_data=pub_filtered.filter(function(x){return x['event_type']==value.name})
var unique_filter=get_unique_list(filtered_data)
record=document.createElement("div")
record.className='row'
checks_feature=document.getElementById("checks_event")
label=document.createElement("div")
label.id=value.name+"_id"
label.className='check_label'
label.textContent=value.alias2+" ("+unique_filter.length+") "
record.appendChild(label)
checks_feature.appendChild(record)
input=document.createElement("input")
input.type="checkbox"
input.id=value.name+"_filter"
if(filtered_data.length>0){input.onclick=function(){on_click_event()}}else{input.onclick=function(){return false}}
if(filtered_data.length>0){label.style.display="block"}else{label.style.display="none"}
if(filtered_data.length==pub_filtered.length){input.checked=true}
label.appendChild(input)
}}
$("input:checkbox").on('click',function(){var $box=$(this);if($box.is(":checked")){var group="input:checkbox[name='"+$box.attr("name")+"']";$(group).prop("checked",false);$box.prop("checked",true);}else{$box.prop("checked",false);}});}
function create_filter_feature(pub_filtered){console.log('---- create_filter_feature: '+pub_filtered.length)
clear_filter('checks_feature')
for(const[key,value]of Object.entries(review)){if(value.menu_filter&&!value.event_filter){var filtered_data=pub_filtered.filter(function(x){return x[value.name]=='1'})
var unique_filter=get_unique_list(filtered_data)
record=document.createElement("div")
record.className='row'
checks_feature=document.getElementById("checks_feature")
label=document.createElement("div")
label.style.width="230px"
label.style.font="8px"
label.id=value.name+"_id"
label.innerHTML="<div style='font-size: 12px; padding: 0px; margin: 0px;'>"+value.alias2+" ("+unique_filter.length+") "+"</div>"
record.appendChild(label)
checks_feature.appendChild(record)
input=document.createElement("input")
input.type="checkbox"
input.id=value.name+"_filter"
input.onclick=function(){on_click_feature()}
if(filtered_data.length>0&&value.name!='timeout'){label.style.display="block"}else{label.style.display="none"}
if(filtered_data.length==pub_filtered.length){input.checked=true}
label.appendChild(input)
}}}
function create_filter_pub_identity(pub_filtered){console.log('---- create_filter_pub_identity: '+pub_filtered.length)
clear_filter('checks_pub_identity')
for(i=0;i<pub_all.length;i++){var filtered_data=pub_filtered.filter(function(x){return x['pub_identity']==pub_all[i]['pub_identity']})
var unique_filter=get_unique_list(filtered_data)
record=document.createElement("div")
record.className='row'
checks_area=document.getElementById('checks_pub_identity')
checks_area.appendChild(record)
label=document.createElement("div")
label.style.width="230px"
label.id=pub_all[i]['pub_identity']+"_id"
label.innerHTML="<a style='font-size: 12px; padding: 0px; margin: 0px;'>"+pub_all[i]['pub_identity']+" ("+unique_filter.length+") "+"</a>"
record.appendChild(label)
input=document.createElement("input")
input.type="checkbox"
input.id=pub_all[i]['pub_identity']+"_filter"
if(filtered_data.length>0){label.style.display="block"
input.checked=true}else{label.style.display="block"
input.checked=false}
label.appendChild(input)}}
function create_filter_station(pub_filtered){console.log('---- create_filter_station: '+pub_filtered.length)
var select=document.getElementById("station");var option=document.createElement("option");clear_filter('checks_station')
var station_options=0
for(i=0;i<stations_directions_list.length;i++){var filtered_data=pub_filtered.filter(function(x){return x.station_identity==stations_directions_list[i][0]})
var unique_filter=get_unique_list(filtered_data)
record=document.createElement("div")
record.className='row'
checks_area=document.getElementById('checks_station')
checks_area.appendChild(record)
label=document.createElement("div")
label.style.width="230px"
label.id=stations_directions_list[i][0]+"_id"
label.innerHTML="<div style='font-size: 12px; padding: 0px; margin: 0px;'>"+stations_directions_list[i][1]+" ("+unique_filter.length+") "+"</div>"
record.appendChild(label)
input=document.createElement("input")
input.type="checkbox"
input.id=stations_directions_list[i][0]+"_filter"
input.onclick=function(){on_click_station()}
if(filtered_data.length>0){label.style.display="block"
station_options++}else{label.style.display="none"}
if(filtered_data.length==pub_filtered.length){input.checked=true}
label.appendChild(input)}
if(station_options.length>6){document.getElementById('content_station').classList.add("station-box");}}
function filter_by_(){console.log('-- filter by all data: IN: '+pub_all.length)
var filter_count=0
format_filters_reset()
data_by_direction=filter_by_direction(pub_all)
if(data_by_direction.length<pub_all.length){filter_count++
filter_selection['direction']='on';document.getElementById('button_direction').style.fontWeight='bold'}
data_by_station=filter_by_station(data_by_direction)
if(data_by_station.length<data_by_direction.length){filter_count++
filter_selection['station']='on';document.getElementById('button_station').style.fontWeight='bold'}
data_by_feature=filter_by_feature(data_by_station)
if(data_by_feature.length<data_by_station.length){filter_count++
filter_selection['feature']='on';document.getElementById('button_feature').style.fontWeight='bold'}
data_by_event=filter_by_event(data_by_feature)
if(data_by_event.length<data_by_feature.length){filter_count++
filter_selection['event']='on';document.getElementById('button_event').style.fontWeight='bold'}
data_by_diary=filter_by_diary(data_by_event)
if(data_by_diary.length<data_by_event.length){filter_count++
filter_selection['diary']='on';document.getElementById('button_diary').style.fontWeight='bold'}
filtered_pubs=data_by_diary
format_filters(filter_count)
return filtered_pubs}
function format_filters(filter_count){if(filter_count>0){document.getElementById('active_filter_count').textContent=filter_count
document.getElementById('active_filter_count').style.display="block"
document.getElementById("filter_overlay_btn").classList.remove('filters_off')
document.getElementById("filter_overlay_btn").classList.add('filters_on')
document.getElementById("filter_overlay_span").classList.remove('filters_span_off')
document.getElementById("filter_overlay_span").classList.add('filters_span_on')
document.getElementById("collapsible_filters_sm").style.width="95px";document.getElementById("search-input-navbar").style.width="250px";}else{document.getElementById('active_filter_count').style.display="none"
document.getElementById("filter_overlay_btn").classList.remove('filters_on')
document.getElementById("filter_overlay_btn").classList.add('filters_off')
document.getElementById("filter_overlay_span").classList.remove('filters_span_on')
document.getElementById("filter_overlay_span").classList.add('filters_span_off')
document.getElementById("collapsible_filters_sm").style.width="60px";document.getElementById("search-input-navbar").style.width="285px";}}
function format_filters_reset(){filter_selection['direction']='off';filter_selection['station']='off';filter_selection['feature']='off';filter_selection['event']='off';filter_selection['diary']='off';document.getElementById('button_direction').style.fontWeight='normal'
document.getElementById('button_station').style.fontWeight='normal'
document.getElementById('button_feature').style.fontWeight='normal'
document.getElementById('button_event').style.fontWeight='normal'
document.getElementById('button_diary').style.fontWeight='normal'}
function filter_by_diary(filtered_data){console.log('---- diary-in: '+filtered_data.length)
for(const[key,value]of Object.entries(review)){if(document.getElementById('monday_filter').checked){var filtered_data=filtered_data.filter(function(pub){return(pub['event_day']=='monday'&&pub['event_type']!='hours')})}else if(document.getElementById('tuesday_filter').checked){var filtered_data=filtered_data.filter(function(pub){return(pub['event_day']=='tuesday'&&pub['event_type']!='hours')})}else if(document.getElementById('wednesday_filter').checked){var filtered_data=filtered_data.filter(function(pub){return(pub['event_day']=='wednesday'&&pub['event_type']!='hours')})}else if(document.getElementById('thursday_filter').checked){var filtered_data=filtered_data.filter(function(pub){return(pub['event_day']=='thursday'&&pub['event_type']!='hours')})}else if(document.getElementById('friday_filter').checked){var filtered_data=filtered_data.filter(function(pub){return(pub['event_day']=='friday'&&pub['event_type']!='hours')})}else if(document.getElementById('saturday_filter').checked){var filtered_data=filtered_data.filter(function(pub){return(pub['event_day']=='saturday'&&pub['event_type']!='hours')})}else if(document.getElementById('sunday_filter').checked){var filtered_data=filtered_data.filter(function(pub){return(pub['event_day']=='sunday'&&pub['event_type']!='hours')})}else{var filtered_data=filtered_data}}
console.log('---- diary OUT: '+filtered_data.length)
return filtered_data}
function filter_by_direction(data_in){ticked_list=[]
for(i=0;i<directions_list.length;i++){if(document.getElementById(directions_list[i][0]+"_filter")!==null){if(document.getElementById(directions_list[i][0]+"_filter").checked){ticked_list.push(directions_list[i][0])}}}
ticked_data=[]
if(ticked_list.length>0){for(j=0;j<ticked_list.length;j++){var filtered_data=data_in.filter(function(item){return item.direction_identity==ticked_list[j]})
ticked_data=ticked_data.concat(filtered_data)}}else{ticked_data=data_in}
console.log('---- direction OUT: '+ticked_data.length)
return ticked_data}
function filter_by_event(filtered_data){for(const[key,value]of Object.entries(review)){if(value.event_filter){if(document.getElementById(value.name+"_filter").checked){var filtered_data=filtered_data.filter(function(pub){return(pub['event_type']==value.name)})}else{var filtered_data=filtered_data}}}
console.log('---- event OUT: '+filtered_data.length)
return filtered_data}
function filter_by_feature(filtered_data){for(const[key,value]of Object.entries(review)){if(value.menu_filter&!value.event_filter){if(document.getElementById(value.name+"_filter").checked){var filtered_data=filtered_data.filter(function(pub){return(pub[value.name]==1||pub[value.name]=='1'||pub[value.name]==true)})}else{var filtered_data=filtered_data}}}
console.log('---- feature OUT: '+filtered_data.length)
return filtered_data}
function filter_by_pub_identity(data_in){console.log('filter by pub identity: '+data_in.length)
ticked_list=[]
for(i=0;i<pub_all.length;i++){if(document.getElementById(pub_all[i]['pub_identity']+"_filter").checked){ticked_list.push(pub_all[i]['pub_identity'])}}
output_pubs=data_in
if(ticked_list.length>0){output_pubs=data_in.filter(({pub_identity})=>ticked_list.includes(pub_identity));}
console.log('---- pub identity OUT: '+output_pubs.length)
return output_pubs}
function filter_by_station(filtered_data){ticked_list=[]
for(i=0;i<stations_directions_list.length;i++){if(document.getElementById(stations_directions_list[i][0]+"_filter").checked){ticked_list.push(stations_directions_list[i][0])}}
ticked_data=[]
if(ticked_list.length>0){for(j=0;j<ticked_list.length;j++){var filtered_data=filtered_data.filter(function(item){return item.station_identity==ticked_list[j]})
ticked_data=ticked_data.concat(filtered_data)}}else{ticked_data=filtered_data}
console.log('---- station OUT: '+ticked_data.length)
return ticked_data}