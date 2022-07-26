// import functions and grab DOM elements
const firstButtonEl = document.getElementById('first-button');
const secondButtonEl = document.getElementById('second-button');
const thirdButtonEl = document.getElementById('third-button');

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
    const hidingCup = Math.floor(Math.random() * hidingLogo.length);
    const hidingSpot = hidingLogo[hidingCup];
    handleGuess(hidingSpot, 'firstCup');
});

secondButtonEl.addEventListener('click', () => {
    const hidingCup = Math.floor(Math.random() * hidingLogo.length);
    const hidingSpot = hidingLogo[hidingCup];
    handleGuess(hidingSpot, 'secondCup');
});

thirdButtonEl.addEventListener('click', () => {
    const hidingCup = Math.floor(Math.random() * hidingLogo.length);
    const hidingSpot = hidingLogo[hidingCup];
    handleGuess(hidingSpot, 'thirdCup');
});




function clearCheck() {
  cupOneEl.classList.remove('check-mark')
  cupTwoEl.classList.remove('check-mark');
  cupThreeEl.classList.remove('check-mark');
}


function handleGuess(userGuess, correctSpot) {
  clearCheck();
    totalGuesses++;
    totalEl.textContent = totalGuesses;

    if (userGuess === 'firstCup') {
        cupOneEl.classList.add('check-mark');
    } else if (userGuess === 'secondCup') {
        cupTwoEl.classList.add('check-mark');
    } else if (userGuess === 'thirdCup') {
        cupThreeEl.classList.add('check-mark');
  }
  




    if (correctSpot === userGuess) {
        wins++;
    } else {
        losses++;
    }

    lossesEl.textContent = losses;
    winsEl.textContent = wins;
}

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
