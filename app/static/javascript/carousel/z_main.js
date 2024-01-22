/* :: >> pure css js carousel main_js << :: */

(function(){

const carousel = document.querySelector('._carousel');
const btnFFWD = document.querySelector('#forwards');
const btnRWD = document.querySelector('#rewards');

/**create variables for faces
 * and one for the degree rate
 * to organize the faces in an
 * symmetric order
 */
let faceCount = 12;
let stepCount = 360 / faceCount;

let count = 0;


btnFFWD.addEventListener('click',()=>{

    let stepForward = count += stepCount;

    nextStep(stepForward);

});

btnRWD.addEventListener('click',()=>{

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

    }
    else if( x >= 0){

        carousel.style.transform = `rotateY(-${x}deg)`;

    }
}


}());