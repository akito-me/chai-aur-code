let random = parseInt(Math.random()*100+1);

const submit = document.querySelector(`#subt`)
const useer = document.querySelector(`#guessField`)
const guesslot = document.querySelector(`.guesses`)
const last = document.querySelector(`.lastResult`)
const lrh = document.querySelector(`.lowOrHi`)
const st = document.querySelector(`.resultParas`)

const p = document.createElement('p');


let preGuess = [];
let numGuess = 1;

let playGame = true;
if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(useer.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){
if(isNaN(guess)){
  alert('please enter valid no')
}
else if (guess<1){
alert(`enter more then one`)
}
else if (guess>100){
  alert(`enter less then 100`)
  }
  else{
    preGuess.push(guess)
    if(numGuess===11){
    displayGuess(guess)
    displayM(`gameover.no was ${random}`)
    endgame()}
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
if(guess===random){
displayM(`right`)
endgame()
}
else if(guess<random){
  displayM(`low`)}

else if (guess>random){
  displayM(`high`)}
}
function displayGuess(guess){
useer.value = ''
guesslot.innerHTML += `${guess},`
numGuess++;
last.innerHTML = `${11-numGuess}`
 }
function displayM(message){
lrh.innerHTML =   `<h2>${message}</h2>`;
 }
function endgame(){
useer.value =''
useer.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
st.appendChild(p)
playGame=false
newgame();
 }
function newgame(){
const gamebutton = document.querySelector('#newGame')
 gamebutton.addEventListener('click', function(e){
  random = parseInt(Math.random()*100+1);
  preGuess = []
  numGuess = 1
  guesslot.innerHTML =''
  last.innerHTML = `${11-numGuess}`;
  useer.removeAttribute('disabled')
  st.removeChild(p)
  playGame = true
})

}