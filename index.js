humanChoiceResult = ''

function getComputerChoice () {
    let numeroAleatorio = Math.floor(Math.random() * 3) + 1;
    if (numeroAleatorio === 1) {
        computerChoice = "rock"
    }
    else if (numeroAleatorio === 2) {
        computerChoice = "scissors"
    }
    else if (numeroAleatorio === 3) {
        computerChoice = "paper"
    }
       return computerChoice
}
function repetirFuncao(numeroDeVezes ) {
for (let i=0; i<numeroDeVezes; i++) {
    let num = getComputerChoice();
    
    let num2 = playRound(num, humanChoiceResult);
    randomComputer.textContent = `Computer chose: ${num} | | Result : ${num2}`
  } 
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
 if (humanChoice === computerChoice)  {   
       showImage(computerChoice);
       return "Tie"
 }
 else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
       
 ) {
    humanScore++
    showImage(computerChoice)
    return `You win! ${humanChoice} beats ${computerChoice}.`;
   } 
 else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "rock")
   )
   {
       computerScore++
       showImage(computerChoice)
       return `You lose! ${computerChoice} beats ${humanChoice}.`;
   }
   
} 
function playGame() {
if (computerScore === 5 || humanScore === 5) {
  return;
  }
repetirFuncao(1); 
if (computerScore === 5 && computerScore > humanScore) {
    winner.textContent = "The computer won the game"
    
    }
  else if (humanScore === 5 && humanScore> computerScore) { 
    winner.textContent = "You won the game" 
    }

}
var rock = document.querySelector('#roc')
var scissors = document.querySelector('#sci')
var paper = document.querySelector('#pap')

rock.addEventListener('click', function() {
    humanChoiceResult = "rock"
    playGame()
    updateScore()
})
paper.addEventListener('click', function() {
    humanChoiceResult = "paper";
    playGame();
    updateScore()
})
scissors.addEventListener('click', function() {
    humanChoiceResult = "scissors"
    playGame()
    updateScore()   
})
var resultadoH = document.createElement('div');
var resultadoC = document.createElement('div');

resultadoH.textContent = ``
resultadoC.textContent = ``
humScore.appendChild(resultadoH)
comScore.appendChild(resultadoC)
var randomComputer = document.createElement('div')
randomComputer.textContent = ``
r3.appendChild(randomComputer)
var winner = document.createElement('h1')
winner.textContent = ''
r3.appendChild(winner)

resultadoH.textContent = 'Your score is: 0'
resultadoC.textContent = 'Computer score is: 0'

function updateScore() { 
resultadoH.textContent = `Your score is: ${humanScore}`     
resultadoC.textContent = ` Computer score is: ${computerScore}` 
}
function showImage(computerChoice) {
    const pedra = document.getElementById('showRock');
    const papel = document.getElementById('showPaper');
    const tesoura = document.getElementById('showScissor');

    pedra.style.display = 'none';
    papel.style.display = 'none';
    tesoura.style.display = 'none';

    if (computerChoice === "rock") {
        pedra.style.display = 'block';
    }
    else if (computerChoice === "paper") {
        papel.style.display = 'block';
    }
    else if (computerChoice === "scissors") {
        tesoura.style.display = 'block';
    }
}
const newGame = document.getElementById('playAgain')
newGame.addEventListener('click', function () {
    computerScore = 0
    humanScore = 0
    updateScore()
    winner.textContent = ''
    computerChoice = ''
    showImage()
});
