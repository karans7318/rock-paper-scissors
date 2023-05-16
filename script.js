console.log("hello wo")
const button = document.querySelectorAll("button")
const rock = document.querySelector(".rock")
const scissors = document.querySelector(".scissors")
const paper = document.querySelector(".paper")

// build functional rock paper scissor
// store value of user
// compare against random result of computer
// describe value.
// describe tie situations
    // Rock > Scissors
    // Scissors > Paper
    // Paper > Rock

    let options = ['Rock', 'Paper', 'Scissors']

    const getComputerChoice = () => {
        return options[Math.floor(Math.random() * options.length)]
    }

    console.log(getComputerChoice())

    const playRound = (playerSelection, computerSelection) => {
        // if(playerSelection === computerSelection){
        //     return `It's a tie! You and the computer chose pizza`
        // }
        
         if(playerSelection = rock && computerSelection === 'Paper'){
            return console.log(`You lost!`)
        }
        // else if(playerSelection === `Paper` && computerSelection === 'Scissors'){

        // }
        // else if(playerSelection === `Rock` && computerSelection === 'Paper'){
            
        // }
        // else if(playerSelection === `Rock` && computerSelection === 'Paper'){
            
        // }
        else return 'ayo??'
    }
    // switch(playerSelectiion, computerSelection)
    // case: "rock", "rock"
    // alert('tie!')
    // break

    console.log(playRound(playerSelection, computerSelection))


    const game = () => {
        // code here
    }


    // switch example usage below 

//     let a = 2 + 2;

// switch (a) {
//   case 3:
    // alert( 'Too small' ); if (a ==='3')
//     break;
//   case 4:
//     alert( 'Exactly!' ); if (a ==='4')
//     break;
//   case 5:
//     alert( 'Too big' ); if (a ==='5')
//     break;
//   default:
//     alert( "I don't know such values" );
// }


// without "break" it will execute rest of code in sequence