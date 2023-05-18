console.log("hello wo");
const buttons = document.querySelectorAll(".option");
// const rock = document.querySelector(".rock");
// let scissors = document.querySelector(".scissors");
// let paper = document.querySelector(".paper");
const restart = document.querySelector(".restart");



// store value of user
// compare against random result of computer
// generate score keeper
// limit to 5 rounds
// message on game result after 5th round
// reset after 5th round to new game


let options = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
    return options[Math.floor(Math.random() * options.length)];
};

restart.addEventListener("click", event => {
    event.preventDefault();
    console.log("restart");
});

let x = buttons.forEach(button => {
    button.addEventListener("click", event =>{
        event.preventDefault();
       getComputerChoice()
        console.log(getComputerChoice());
        console.log(button.value);
    


        const playRound = (playerSelection, computerSelection) => {
            getComputerChoice()
            if(playerSelection === computerSelection) {
                console.log("tie!")
            }
            // switch(playerSelection, computerSelection){
            //     case 'rock', 'scissors':
            //     case 'paper', 'rock':
            //     case 'scissors', 'paper':
            //             console.log("Win!");
            //             break;
    
            //     case 'rock', 'rock':
            //     case 'paper', 'paper':
            //     case 'scissors', 'scissors':
            //         console.log("Tie!");
            //         break;
    
               
            //     case 'rock', 'paper':
            //     case 'paper', 'scissors':
            //     case 'scissors', 'rock':
            //         console.log("Lose!");
            //         break;
              
            // };
        
        let compResult = getComputerChoice()
    
        console.log(playRound());
        playRound(button.value, compResult)
       
        };
    });
});

    


    let result = ['Tie!', 'Win!', 'Lose!'];

   





    // const game = () => {
    //     playRound();
    //     if(playerScore < computerScore){
    //         console.log("Lost")
    //     }
    //     else if (playerScore === computerScore) {
    //         console.log("Tied")
    //     }
    //     else {
    //         console.log("Won!")
    //     };

    // };