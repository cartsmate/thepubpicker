function click_station(id){console.log("CLICK_STATION")
console.log('station id: '+id)
console.log(stations_directions_list)
new_direction_array=stations_directions_list.filter(item=>item[0]==id)
console.log(new_direction_array)
console.log('station name: '+new_direction_array[0][1])
console.log('direction: '+new_direction_array[0][2])
document.getElementById(id+"_filter").checked=true
on_click()}
function set_feature_icon_colour(check_item){console.log('set feature icon colour')
console.log(check_item)
var checkBox=document.getElementById(check_item);var carousel=document.getElementById(check_item+"_carousel");var checkBox_nofeature=document.getElementById("nofeature");var carousel_nofeature=document.getElementById("nofeature_carousel");if(checkBox.checked==true){carousel.classList.remove("carousel_off")
carousel.classList.add("carousel_on")
if(check_item!='nofeature'){checkBox_nofeature.checked=false
carousel_nofeature.classList.remove("carousel_on")
carousel_nofeature.classList.add("carousel_off")}}else{carousel.classList.remove("carousel_on")
carousel.classList.add("carousel_off")}
var ticks=0;for(const[key,value]of Object.entries(review)){if(value.menu_filter){if(document.getElementById(value.name).checked==true){console.log(value.name)
ticks++
}}}
if(ticks==0){checkBox_nofeature.checked==true;carousel_nofeature.classList.remove("carousel_off")
carousel_nofeature.classList.add("carousel_on")}}
function shadeStars(star,num,where){console.log('shadeStars')
console.log('star: '+star)
console.log('num: '+num)
console.log('where: '+where)
star_num=30
star_size=star_num+"px"
document.getElementById(star).value=num;if(num==0){document.getElementById("img_rank1").style.width="0px"
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