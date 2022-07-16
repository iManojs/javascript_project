let computerChoice = null
let choices  = ['rock','paper','scissors']
const win = 'You Won the Game!'
const lose = 'Computer Won the Game!'
const tie = 'Its a Tie'
const result_array = []
const final_result = []
const scores = {
    playerScore: null,
    computerScore : null,
    tieScore : null
}
const computerPlay = () =>  {
 
    let choiceIndex = Math.floor(Math.random() * choices.length);
    return choices[choiceIndex]
}

const playerChoice  =() =>{
    let playerSelection  = null
    
    playerSelection = prompt(
      "Do you choose rock, paper or scissors?"
    ).toLocaleLowerCase(); // player input
  
    //display user input in lowercase   
   
    while (
      playerSelection !== "paper" &&
      playerSelection !== "rock" &&
      playerSelection !== "scissors"
    ) {
      
      playerSelection = prompt(
        "Error! Try again!"
      ).toLocaleLowerCase();
    } 
    return playerSelection
  }

const  playRound = (playerSelection, computerSelection) =>  {

    if (playerSelection ==="rock" && computerSelection ==="scissors" || playerSelection ==="paper" && computerSelection ==="rock" || playerSelection ==="scissors" && computerSelection ==="paper"){
        scores.playerScore++;
        return 'You Won!';
    }
    else if (playerSelection ==="rock" && computerSelection  ==="paper" || playerSelection ==="scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissors"){
        scores.computerScore++;
        return 'computer Won!';
    }
      else if (playerSelection == computerSelection){
        scores.tieScore++;
        return 'Its a tie';
    } //if player input rock compare to rock, its a tie
    }

    for(i=1; i<=5; i++){
        const playerInput = playerChoice()
        const computerInput = computerPlay()
        console.log("You chose " + playerInput)
        console.log("Computer chose " + computerInput)
        result_array.push('Game :' +i + '||| playerInput  : ' +playerInput  + '||| computerInput  : '+computerInput +  ' ||| Results  : ' + playRound(playerInput,computerInput))
    }
    for(i =  0; i <result_array.length ;i++){
        console.log(result_array[i])
    }
    
    let highScore = Object.keys(scores).reduce(function(a, b){ return scores[a] > scores[b] ? a : b });
    switch(highScore){
        case 'playerScore':
            console.log('You won the game yayyyy!!')
            break;
        case 'computerScore':
            console.log('Computer won the game')
            break;
        case 'tieScore':
            console.log('Its a Tie match huhu')
            break;

    }


    