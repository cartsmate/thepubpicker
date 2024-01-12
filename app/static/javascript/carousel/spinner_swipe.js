

(function(){
    var $slider = $('#the_carousel');
    const carousel = document.querySelector('._carousel');
    const btnFFWD = document.querySelector('#forwards');
    const btnRWD = document.querySelector('#rewards');

    let faceCount = 12;
    let stepCount = 360 / faceCount;
    let count = 0;

   $slider.on( "swipeleft", function(){ // show next image on swipe left

        let stepForward = count += stepCount;
        nextStep(stepForward);
    }).on( "swiperight", function(){ // show prev image on swipe right
        let stepReward = count -= stepCount;
        nextStep(stepReward);
    });



/** ▼ this function covers
* the cases when counter
* jumps over/under zero
*/
    function nextStep(x){
        if(x <= 0){
            x *= -1; //turn to positive number again
            carousel.style.transform = `rotateY(${x}deg)`;
        } else if( x >= 0){
            carousel.style.transform = `rotateY(-${x}deg)`;
        }
    }


}());