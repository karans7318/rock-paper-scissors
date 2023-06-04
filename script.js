console.log('hello world');
const options = document.querySelectorAll('.option');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerScore = document.getElementById('player--score');
const computerScore = document.getElementById('computer--score');


// pseudo-code
// make buttons respond with values - done
// random generation by computer - done
// compare values and provide result of win loss or tie - done

// make scores shift
// if 5 is reached game should auto reset
// create reset button
// Go back to CSS and create winner and loser settings (green/red)

// create initial values for reset
// const init = () =>{
//     score0El.textContent = 0;
//     score1El.textContent = 0;
    

//  scores = [0, 0];
//  currentScore = 0;
//  activePlayer = 0;
//  playing = true;

//     current0El.textContent = 0;
//     current1El.textContent = 0;
//     diceEl.classList.add('hidden');
//     player0El.classList.remove('player--winner');
//     player1El.classList.remove('player--winner');
//     player0El.classList.add('player--active');
//     player1El.classList.remove('player--active');
// }
// init()


const results = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return results[Math.floor(Math.random() * results.length)];
};

options.forEach(option => {
   option.addEventListener('click', () =>{

    function playRound(playerSelection, computerSelection){  
        if (playerSelection === 'rock' && computerSelection === 'scissors') {
            console.log('win')
        }
        else if(playerSelection === 'scissors' && computerSelection === 'paper'){
            console.log('win')
        }
        else if(playerSelection === 'paper' && computerSelection === 'rock'){
            console.log('win')
        }
        // tie
        else if(playerSelection === computerSelection) {
            console.log('tie')
        } else {
            console.log('lose')
        }
    };
    const playerSelection = option.value;
    const computerSelection = getComputerChoice();
   

    console.log(playerSelection);
    console.log(computerSelection);
    playRound(playerSelection, computerSelection); 
    //    console.log(playRound(playerSelection, computerSelection));
   });
});


function game() {
    playRound(playerSelection, computerSelection); 
    console.log('pizza')

};

    console.log(game())