// Query and ID selectors to try avoid global scope/
const circles = document.querySelectorAll('.circle');
const piggy = document.querySelector('.piggy');
const timeRemaining = document.querySelector('.time');
const scores = document.getElementById('score');

// relevant to the score as we need it to always start at 0/
let result = 0 

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
    let timer = null;
    timer = setInterval(randomCircle, 600);
}

placePiggy();




