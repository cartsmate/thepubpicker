function populate_detail(show_pub){console.log('POPULATE_DETAIL')
for(const[key,value]of Object.entries(detail)){inbox_item=document.getElementById(value.name)
inbox_item.value=show_pub[0][value.name]
if(value.name=='website'){inbox_item.classList.add('pointer')
inbox_item.style.color="#0d6efd"
inbox_item.onclick=function(){redirect_website(show_pub[0]['website']);};}}}
function populate_diary(show_pub){console.log('POPULATE_DIARY')
for(const[key,value]of Object.entries(diary)){inbox_item=document.getElementById(value.name)
inbox_item.value=show_pub[0][value.name]}}
function populate_direction(show_pub){console.log('POPULATE_DIRECTION')
for(const[key,value]of Object.entries(direction)){document.getElementById(value.name).value=show_pub[0][value.name];}}
function populate_events(show_events){console.log('POPULATE EVENTS')
console.log(show_events)
days=['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
for(i=0;i<days.length;i++){console.log(days[i])
var dayRecord=show_events.filter(function(el){return el.event_day==days[i];});if(dayRecord.length>0){document.getElementById(days[i]).value=dayRecord[0]['event_identity']
console.log('dayRecord')
console.log(dayRecord)
console.log(dayRecord[0]['event_type'])
console.log('review')
console.log(review)
console.log(review[dayRecord[0]['event_type']])
console.log(review[dayRecord[0]['event_type']]['alias2'])
for(const[key,value]of Object.entries(event)){console.log("days[i] + '_' + value.name")
console.log(days[i]+"_"+value.name)
console.log(dayRecord[0][value.name])
inbox_item=document.getElementById(days[i]+"_"+value.name)
if(value.name!='event_type'){inbox_item.value=dayRecord[0][value.name]}else{inbox_item.value=review[dayRecord[0]['event_type']]['alias2']+" "+dayRecord[0]['event_detail']}}}}}
function populate_pub(show_pub,page){console.log('POPULATE_PUB consolidated')
if(page!='add'){populate_title(show_pub);}
if(page=='pub'){populate_extra(show_pub)}
populate_detail(show_pub);populate_review(show_pub,page);populate_station(show_pub);populate_direction(show_pub);}
function populate_review(pub,page){console.log('POPULATE REVIEW')
for(const[key,value]of Object.entries(review)){if(value.menu_filter){if(pub[0][value.name]=='1'){if(page=='edit'){document.getElementById(value.name).checked=true;}
current_carousel=document.getElementById(value.name+"_carousel")
current_carousel.classList.add('carousel_on')}else{if(page=='edit'){document.getElementById(value.name).checked=false;}
current_carousel=document.getElementById(value.name+"_carousel")
current_carousel.classList.add('carousel_off')
if(page=='pub'){current_carousel.style.display='none'}}}else{document.getElementById(value.name).value=pub[0][value.name]}}}
function populate_stars(star,num,where){console.log('shadeStars')
console.log('star: '+star)
console.log('num: '+num)
console.log('where: '+where)
star_num=30
star_size=star_num+"px"
if(num==0){document.getElementById("img_rank1").style.width="0px"
document.getElementById("img_rank2").style.width="0px"
document.getElementById("img_rank3").style.width="0px"
document.getElementById("img_rank4").style.width="0px"
document.getElementById("img_rank5").style.width="0px"}else if(num>0&&num<1){document.getElementById("img_rank1").style.width=star_size
document.getElementById("img_rank2").style.width="0px"
document.getElementById("img_rank3").style.width="0px"
document.getElementById("img_rank4").style.width="0px"
document.getElementById("img_rank5").style.width="0px"}else if(num>=1&&num<2){document.getElementById("img_rank1").style.width=star_size
document.getElementById("img_rank2").style.width=star_size
document.getElementById("img_rank3").style.width="0px"
document.getElementById("img_rank4").style.width="0px"
document.getElementById("img_rank5").style.width="0px"}else if(num>=2&&num<3){document.getElementById("img_rank1").style.width=star_size
document.getElementById("img_rank2").style.width=star_size
document.getElementById("img_rank3").style.width=star_size
document.getElementById("img_rank4").style.width="0px"
document.getElementById("img_rank5").style.width="0px"}else if(num>=3&&num<4){document.getElementById("img_rank1").style.width=star_size
document.getElementById("img_rank2").style.width=star_size
document.getElementById("img_rank3").style.width=star_size
document.getElementById("img_rank4").style.width=star_size
document.getElementById("img_rank5").style.width="0px"}else{document.getElementById("img_rank1").style.width=star_size
document.getElementById("img_rank2").style.width=star_size
document.getElementById("img_rank3").style.width=star_size
document.getElementById("img_rank4").style.width=star_size
var fraction=num-4
var section=star_num*fraction
document.getElementById("img_rank5").style.width=section+"px"}}
function populate_station(){console.log('POPULATE_STATION')
for(const[key,value]of Object.entries(station)){document.getElementById(value.name).value=pub_1[0][value.name];}}