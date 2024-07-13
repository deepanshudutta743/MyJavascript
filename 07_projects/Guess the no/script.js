let random = parseInt((Math.random() * 10 + 1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesssSlot = document.querySelector('.guesses');
let reaming = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid no');
    }
    else if (guess < 1) {
        alert('Please enter a valid no more than 1');
    }
    else if (guess > 100) {
        alert('Please enter a valid no less than 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuess===11)
            {
                displayGuess(guess);
                displayMessage(`Game over, random no was ${random}`);
                endGame();
            }
            else{
                displayGuess(guess);
                checkGuess(guess);
            }
    }
}

function checkGuess(guess) {

    if(guess===random)
        {
            displayMessage(`you guesed it right`);
            endGame();
        }
        else if(guess<random){
            displayMessage(`No is too low`);
        }
        else if(guess>random){
            displayMessage(`No is too high`);
        }


}
function displayGuess(guess) {
  userInput.value='';
  guesssSlot.innerHTML+=`${guess},`;
  numGuess++;
  reaming.innerHTML=`${11-numGuess}`;

}

function displayMessage(message) {
    //
    lowOrHi.innerHTML=`<h2>${message}</h2>`;


}

function newGame() {
 const newGameBtn=document.querySelector('#newGame');
 newGameBtn.addEventListener('click',function(e){
    random=parseInt((Math.random() * 10 + 1));
    prevGuess=[]
    numGuess=1
    guesssSlot.innerHTML=''
    reaming.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    displayMessage(``);
    playGame=true;
 });

}
function endGame() {
   userInput.value='';
   userInput.setAttribute('disabled','');
   p.classList.add('button');
   p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
   startOver.appendChild(p);
   playGame=false;
   newGame();
}