// Query and ID and Element Selectors/
const mainGame = document.getElementsByClassName("main-game-container")[0];
const endGame = document.getElementsByClassName("end-game-container")[0];
const startContainer = document.getElementsByClassName("start-game-container")[0];
const circles = document.querySelectorAll('.circle');
const piggy = document.querySelector('.piggy');
let scores = document.getElementById('score');
let timeRemaining = document.getElementById('time');
let result = 0; 
let secondsLeft;
let whackPiggy;
let placePigs;


// Add event listener for clicks on the piggy once the game has started and classList and add remove for game containers./
let startGame = () => {
    result = 0;
    secondsLeft = 10;
    startContainer.classList.remove("show");
    startContainer.classList.add("hide");
    mainGame.classList.add("show");
    stopCounter = countDownTimer();
    scores.innerText = result;
    placePiggy();
}

function addEventHandler() {  
    circles.forEach((circle) => {
        circle.addEventListener('click', myClickHandler => {
            if(circle.classList.contains("piggy")){
                incrementScore();
            }
        });
    });
}


//Timer Function, decrement secondsLeft by 1 second until zero is reached/
function countDownTimer() {
    return setInterval(() => {
        secondsLeft--;
        timeRemaining.innerText = secondsLeft;
        if (secondsLeft == 0) {
            gameOver();
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
    placePigs = setInterval(randomCircle, 600);
}

//increment score by 5 when piggy is clicked/
function incrementScore() {
    result += 5;
    scores.innerText = result;
    if (secondsLeft == 0) {
        gameOver();
    }
}

//When the game ends this hides the main-game and shows the end-game with the final score and the restart button
function gameOver() {
    clearInterval(stopCounter);
    clearInterval(placePigs);
    
    mainGame.classList.remove("show")
    mainGame.classList.add("hide");
    endGame.classList.add("show");
    scores.innerText = result;
}

function restartGame() {
    result = 0;
    timeRemaining.innerText = 90;
    startContainer.classList.remove("hide");
    startContainer.classList.add("show")
    endGame.classList.remove("show");
    scores.innerText = result;
    startGame();
    
}


addEventHandler();
