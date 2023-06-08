console.log('hello world');
const options = document.querySelectorAll('.option');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

let playerScoreEl = document.getElementById('player--score');
let computerScoreEl = document.getElementById('computer--score');

const newGameBtn = document.getElementById('new-game');

const resultStatement = document.getElementById('result-statement');

// pseudo-code
// make buttons respond with values - done
// random generation by computer - done
// compare values and provide result of win loss or tie - done

// make scores shift
// if 5 is reached game should auto reset
// create reset button
// Go back to CSS and create winner and loser settings (green/red)

let scores, playing;
// create initial values for reset
const init = () =>{
    playerScoreEl.textContent = 0;
    computerScoreEl.textContent = 0;

    resultStatement.textContent = '';
    
    playerScore = 0;
    computerScore = 0;

     playing = true;
};
init();


const results = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return results[Math.floor(Math.random() * results.length)];
};

options.forEach(option => {

    function playRound(playerSelection, computerSelection){  
        if (playerSelection === 'rock' && computerSelection === 'scissors') {
            console.log('win')
            playerScore += 1
            playerScoreEl.textContent = playerScore
            resultStatement.textContent = 'You won this round!'
        }
        else if(playerSelection === 'scissors' && computerSelection === 'paper'){
            console.log('win')
            playerScore += 1
            playerScoreEl.textContent = playerScore
            resultStatement.textContent = 'You won this round!'
        }
        else if(playerSelection === 'paper' && computerSelection === 'rock'){
            console.log('win')
            playerScore += 1
            playerScoreEl.textContent = playerScore
            resultStatement.textContent = 'You won this round!'
        }
        // tie
        else if(playerSelection === computerSelection) {
            console.log('tie')
            resultStatement.textContent = 'You tied!'
        } else {
            console.log('lose')
            computerScore += 1
            computerScoreEl.textContent = computerScore
            resultStatement.textContent = 'You lost this round!'
        }
    };

   option.addEventListener('click', () =>{

    
    const playerSelection = option.value;
    const computerSelection = getComputerChoice();
    // console.log(playerSelection);
    // console.log(computerSelection);
    // playRound(playerSelection, computerSelection); 

    if(playing){
        // game functionality - pick overall winner and reset
        function game() {
            if (playerScore === 5){
                playing = false
                resultStatement.textContent = 'You won the game! Start a new game.'
            } 
            else if (computerScore === 5){
                playing = false
                resultStatement.textContent = 'You lost the game! Start a new game.'
            } 
            else if (computerScore < 5){
                playRound(playerSelection, computerSelection); 
            }
            else if (playerScore < 5){
                playRound(playerSelection, computerSelection); 
            } 
            else {
                console.log('you\'re still playing!')
            }
          
            };
    
            game();
    } else{
        console.log('not playing game')
    }
    
   });
});



newGameBtn.addEventListener('click', init);
