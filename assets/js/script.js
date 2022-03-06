// Query and ID and Element Selectors/
const mainGame = document.getElementsByClassName("main-game-container");
const circles = document.querySelectorAll('.circle');
const piggy = document.querySelector('.piggy');
let scores = document.getElementById('score');
let timeRemaining = document.getElementById('time');
let result = 0; 
let secondsLeft = 90;
let timer = null; 
let whackPiggy;
let zero = countDownTimer();


// Add event listener for clicks on the piggy once the game has started./
let startGame = () => {
    circles.forEach((circle) => {
        circle.addEventListener('click', () => {
            if(circle.classList.contains("piggy")){
                incrementScore();
            }
            else{
                console.log("i didnt work");
            }
        });
    });
}

startGame();

//Timer Function, decrement secondsLeft by 1 second until zero is reached/
function countDownTimer() {
    return setInterval(() => {
        secondsLeft--;
        timeRemaining.innerText = secondsLeft;

        if (secondsLeft == 0) {
         clearInterval(zero)
         clearInterval(timer);
         alert('Game over! Your Score is ' + result); 
        }
    }, 1000);
}


//function to remove piggy to create a blank slate and then place the piggy in a random circle/
function randomCircle() {
    circles.forEach(circle => {
        circle.classList.remove('piggy');
    }) 

    let randomCircle = circles[Math.floor(Math.random() * 9)];
    randomCircle.classList.add('piggy');
    whackPiggy = randomCircle.id;
}

//sets timer to move piggy every 600 miliseconds/ 
function placePiggy() {
    timer = setInterval(randomCircle, 600);
}

placePiggy();

//increment score when piggy is clicked/
function incrementScore() {
    result += 5;
    scores.innerText = result;
    whackPiggy = null;
}





