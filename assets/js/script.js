// Query and ID and Element Selectors/
const mainGame = document.getElementsByClassName("main-game-container")[0];
const endGame = document.getElementsByClassName("end-game-container")[0];
const startContainer = document.getElementsByClassName("start-game-container")[0];
const circles = document.querySelectorAll('.circle');
const piggy = document.querySelector('.piggy');
let scores = document.getElementById('score');
let timeRemaining = document.getElementById('time');
let result = 0; 
let secondsLeft = 10;
let timer = null; 
let whackPiggy;
let zero = countDownTimer();
let finalScore = scores


// Add event listener for clicks on the piggy once the game has started and classList and add remove for game containers./
let startGame = () => {
    startContainer.classList.remove("show");
    startContainer.classList.add("hide");
    mainGame.classList.add("show");
    placePiggy();


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


//Timer Function, decrement secondsLeft by 1 second until zero is reached/
function countDownTimer() {
    return setInterval(() => {
        secondsLeft--;
        timeRemaining.innerText = secondsLeft;

        if (secondsLeft == 0) {
         clearInterval(zero)
         clearInterval(timer);
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
    timer = setInterval(randomCircle, 600);
}

//increment score when piggy is clicked/
function incrementScore() {
    result += 5;
    scores.innerText = result;
    whackPiggy = null;
}

function gameOver() {
    clearInterval(zero);
    mainGame.classList.remove("show")
    mainGame.classList.add("hide");
    endGame.classList.add("show");
    
}







