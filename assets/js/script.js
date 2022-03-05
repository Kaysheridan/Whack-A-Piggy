// Query and ID selectors to try avoid global scope/
const circles = document.querySelectorAll('.circle');
const piggy = document.querySelector('.piggy');
const scores = document.getElementById('score');
let timeRemaining = document.getElementById('time');
let result = 0; 
let secondsLeft = 10;
let timer = null;

//Timer Function, decrement by 1 second/
function countDownTimer() {
    return setInterval(() => {
        secondsLeft--;
        timeRemaining.innerText = secondsLeft;

        if (secondsLeft == 0) {
         clearInterval(zero)
         clearInterval(timer);
         alert('Game over!'); 
        }
    }, 1000);
}

 let zero = countDownTimer();

 //increment score when piggy is clicked/

    
 

//function to remove piggy to blank slate and then place the piggy in a random circle/
function randomCircle() {
    circles.forEach(circle => {
        circle.classList.remove('piggy');
    }) 

    let randomCircle = circles[Math.floor(Math.random() * 9)];
randomCircle.classList.add('piggy');
}

//sets timer to move piggy every 600 miliseconds/ 
function placePiggy() {
    timer = setInterval(randomCircle, 600);
}

placePiggy();




