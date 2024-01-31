function spinner_add_listener_click_btn(number_review_attr){
    console.log('spinner add listener BTN CLICK added')
    //function spinner_add_listener_click_btn(){

    const carousel = document.querySelector('._carousel');
    const btnFFWD = document.querySelector('#forwards');
    const btnRWD = document.querySelector('#rewards');

    let faceCount = number_review_attr;
//    let faceCount = number_review_attr

    let stepCount = 360 / faceCount;
    let count = 0;

    btnFFWD.addEventListener('click',()=>{
        let stepForward = count += stepCount;
        carousel_position--
        if (carousel_position < 0) { carousel_position = 6 }
        console.log('carousel_position: ' + carousel_position)
        nextStep(stepForward);
    });

    btnRWD.addEventListener('click',()=>{
        let stepReward = count -= stepCount;
        carousel_position++
        if (carousel_position > 6) { carousel_position = 0 }
        console.log('carousel_position: ' + carousel_position)
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


}



/*
//:: >> pure css js carousel main_js << ::
//function click_right() {
//    console.log('click_right')
//    faceCount = 7
//    let stepCount = 360 / faceCount;
//    let count = 0;
//    let stepReward = count -= stepCount;
//    carousel_position++
//    if (carousel_position > 6) { carousel_position = 0 }
//    console.log('carousel_position: ' + carousel_position)
//    nextStep(stepReward);
//}
//function click_left() {
//    console.log('click_left')
//    faceCount = 7
//    let stepCount = 360 / faceCount;
//    let count = 0;
//    let stepForward = count += stepCount;
//    carousel_position--
//    if (carousel_position < 0) { carousel_position = 6 }
//    console.log('carousel_position: ' + carousel_position)
//    nextStep(stepForward);
//}
//const carousel = document.querySelector('._carousel');
//const btnFFWD = document.querySelector('#forwards');
//const btnRWD = document.querySelector('#rewards');

function spinner_add_listener_click_btn(number_review_attr){
    console.log('spinner add listener BTN CLICK added')
    //function spinner_add_listener_click_btn(){

//    const carousel = document.querySelector('._carousel');
//    const btnFFWD = document.querySelector('#forwards');
//    const btnRWD = document.querySelector('#rewards');

    //let faceCount = number_review_attr;
//    let faceCount = number_review_attr

//    let stepCount = 360 / faceCount;
//    let count = 0;

    document.querySelector('#forwards').addEventListener('click',()=>{
        console.log('left button listener activated')
//        click_left()
        faceCount = 7
        let stepCount = 360 / faceCount;
        let count = 0;
        let stepForward = count += stepCount;
        carousel_position--
        if (carousel_position < 0) { carousel_position = 6 }
        console.log('carousel_position: ' + carousel_position)
        nextStep(stepForward);
    });

    document.querySelector('#rewards').addEventListener('click',()=>{
        console.log('right button listener activated')
//        click_right()
        faceCount = 7
        let stepCount = 360 / faceCount;
        let count = 0;
        let stepReward = count -= stepCount;
        carousel_position++
        if (carousel_position > 6) { carousel_position = 0 }
        console.log('carousel_position: ' + carousel_position)
        nextStep(stepReward);
    });


    // ▼ this function covers
    //* the cases when counter
    //* jumps over/under zero
    //

    function nextStep(x){
        console.log('nextstep: ' + x)
        if(x <= 0){
            console.log('less than zero')
            x *= -1; //turn to positive number again
            document.querySelector('._carousel').style.transform = `rotateY(${x}deg)`;
        } else if( x >= 0){
            console.log('greater than zero')
            document.querySelector('._carousel').style.transform = `rotateY(-${x}deg)`;
        }
    }


}
//());

*/