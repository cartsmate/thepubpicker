/* :: >> pure css js carousel main_js << :: */

function spinner_add_listener_swipe() {
//(function () {
    window.addEventListener('load', function(){

        const carousel = document.querySelector('._carousel');

        let faceCount = 12;
        //let faceCount = number_review_attr
        let stepCount = 360 / faceCount;
        let count = 0;

        function nextStep(x){
            if(x <= 0){
                x *= -1; //turn to positive number again
                carousel.style.transform = `rotateY(${x}deg)`;
            } else if( x >= 0){
                carousel.style.transform = `rotateY(-${x}deg)`;
            }
        }

        var touchsurface_words = document.getElementById('touchsurface_words');
        var touchsurface = document.getElementById('the_carousel'),
            startX,
            startY,
            dist,
            threshold = 150, //required min distance traveled to be considered swipe
            allowedTime = 200, // maximum time allowed to travel that distance
            elapsedTime,
            startTime

        function handleswipe(isrightswipe, speed){
            speed_abs = Math.abs(speed)
            speed_pow = speed_abs * speed_abs
            speed_round = Math.ceil(speed_pow)

            movement = stepCount * speed_round
            if (isrightswipe > 0) {
                let stepReward = count -= movement;
                nextStep(stepReward);
                }
            else{
                let stepForward = count += movement;
                nextStep(stepForward);
            }
        }

        touchsurface.addEventListener('touchstart', function(e){
            touchsurface_words.innerHTML = ''
            var touchobj = e.changedTouches[0]
            dist = 0
            startX = touchobj.pageX
            startY = touchobj.pageY
            startTime = new Date().getTime() // record time when finger first makes contact with surface
            e.preventDefault()
        }, false)

        touchsurface.addEventListener('touchmove', function(e){
            e.preventDefault() // prevent scrolling when inside DIV
        }, false)

        touchsurface.addEventListener('touchend', function(e){
            var touchobj = e.changedTouches[0]
            dist = touchobj.pageX - startX // get total dist traveled by finger while in contact with surface
            elapsedTime = new Date().getTime() - startTime // get time elapsed
            // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
            var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
            var speed = dist/elapsedTime
            handleswipe(dist, speed)
            e.preventDefault()
        }, false)

    }, false) // end window.onload
}
