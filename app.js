// import functions and grab DOM elements
const firstButtonEl = document.getElementById('first-button');
const secondButtonEl = document.getElementById('second-button');
const thirdButtonEl = document.getElementById('third-button');
const cupOneCup = document.getElementById('cup-one-cup');
const cupTwoCup = document.getElementById('cup-two-cup');
const cupThreeCup = document.getElementById('cup-three-cup');

const cupOneEl = document.getElementById('cup-one');
const cupTwoEl = document.getElementById('cup-two');
const cupThreeEl = document.getElementById('cup-three');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

const hidingLogo = ['firstCup', 'secondCup', 'thirdCup'];

let totalGuesses = 0;
let wins = 0;
let losses = 0;

// let state
firstButtonEl.addEventListener('click', () => {
   const hidingSpot = getRandomItem(hidingLogo);
    handleGuess(hidingSpot, 'firstCup');
});

secondButtonEl.addEventListener('click', () => {
 const hidingSpot = getRandomItem(hidingLogo);
 handleGuess(hidingSpot, 'secondCup');
});

thirdButtonEl.addEventListener('click', () => {
  const hidingSpot = getRandomItem(hidingLogo);
  handleGuess(hidingSpot, 'thirdCup');
});

function clearCheck() {
    console.log(cupOneCup);
    cupOneCup.src = './assets/coffee_cup.png';
    cupTwoCup.src = './assets/coffee_cup.png';
    cupThreeCup.src = './assets/coffee_cup.png';
}

function handleGuess(userGuess, correctSpot) {
    clearCheck();
    totalGuesses++;
    totalEl.textContent = totalGuesses;

    if (userGuess === 'firstCup') {
        cupOneCup.src = './assets/starbucks_cup.jpg';
    } else if (userGuess === 'secondCup') {
        cupTwoCup.src = './assets/starbucks_cup.jpg';
    } else if (userGuess === 'thirdCup') {
       cupThreeCup.src = './assets/starbucks_cup.jpg';
    }

    if (correctSpot === userGuess) {
        wins++;
    } else {
        losses++;
    }

    lossesEl.textContent = losses;
    winsEl.textContent = wins;
}

function getRandomItem(arr) {
 const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];
    return randomItem;
}

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
