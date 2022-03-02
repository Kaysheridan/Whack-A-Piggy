// Query and ID selectors to try avoid global scope/
const circles = document.querySelectorAll('.circle');
const piggy = document.querySelector('.piggy');
const timeRemaining = document.querySelector('.time');
const scores = document.getElementById('score');
let result = 0 

let randomCircle = circles[Math.floor(Math.random() * 9)];
console.log(randomCircle);




