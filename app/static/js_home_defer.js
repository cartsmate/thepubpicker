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