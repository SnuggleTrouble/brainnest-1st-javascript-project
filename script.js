let playerScore = 0;
let computerScore = 0;
alert(
  "Welcome to SnuggleTrouble's Rock Paper Scissors Lizard Spock game. You play against the Computer. The first one to reach 5 points wins. Good luck!"
);

function computerPlay() {
  const computerSelection = Math.floor(Math.random() * 5) + 1;
  if (computerSelection === 1) {
    return "rock";
  } else if (computerSelection === 2) {
    return "paper";
  } else if (computerSelection === 3) {
    return "scissors";
  } else if (computerSelection === 4) {
    return "lizard";
  } else if (computerSelection === 5) {
    return "spock";
  }
}

function playRound(playerSelection, computerSelection) {
  let playerInput = prompt(
    "Do you choose Rock | Paper | Scissors | Lizard | Spock?"
  );
  playerSelection = playerInput.toLowerCase();
  computerSelection = computerPlay();

  // Player Wins
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return alert("You win! The Computer chose Scissors. Rock crushes Scissors");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return alert("You win! The Computer chose Paper. Paper covers Rock");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return alert("You win! The Computer chose Paper. Scissors cut Paper");
  } else if (playerSelection === "scissors" && computerSelection === "lizard") {
    playerScore++;
    return alert("You win! The Computer chose Lizard. Scissors decapitates Lizard");
  } else if (playerSelection === "paper" && computerSelection === "spock") {
    playerScore++;
    return alert("You win! The Computer chose Spock. Paper disproves Spock");
  } else if (playerSelection === "rock" && computerSelection === "lizard") {
    playerScore++;
    return alert("You win! The Computer chose Lizard. Rock crushes Lizard");
  } else if (playerSelection === "lizard" && computerSelection === "paper") {
    playerScore++;
    return alert("You win! The Computer chose Paper. Lizard eats Paper");
  } else if (playerSelection === "lizard" && computerSelection === "spock") {
    playerScore++;
    return alert("You win! The Computer chose Spock. Lizard poisons Spock");
  } else if (playerSelection === "spock" && computerSelection === "scissors") {
    playerScore++;
    return alert("You win! The Computer chose Scissors. Spock smashes Scissors");
  } else if (playerSelection === "spock" && computerSelection === "rock") {
    playerScore++;
    return alert("You win! The Computer chose Rock. Spock vaporizes Rock");

    // Computer Wins
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return alert("You lose! The Computer chose Paper. Paper covers Rock");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return alert("You lose! The Computer chose Scissors. Scissors cuts Paper");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return alert("You lose! The Computer chose Rock. Rock crushes Scissors");
  } else if (playerSelection === "paper" && computerSelection === "lizard") {
    computerScore++;
    return alert("You lose! The Computer chose Lizard. Lizard eats Paper");
  } else if (playerSelection === "rock" && computerSelection === "spock") {
    computerScore++;
    return alert("You lose! The Computer chose Spock. Spock vaporizes Rock");
  } else if (playerSelection === "scissors" && computerSelection === "spock") {
    computerScore++;
    return alert("You lose! The Computer chose Spock. Spock smashes Scissors");
  } else if (playerSelection === "lizard" && computerSelection === "rock") {
    computerScore++;
    return alert("You lose! The Computer chose Rock. Rock crushes Lizard");
  } else if (playerSelection === "lizard" && computerSelection === "scissors") {
    computerScore++;
    return alert("You lose! The Computer chose Scissors. Scissors decapitates Lizard");
  } else if (playerSelection === "spock" && computerSelection === "paper") {
    computerScore++;
    return alert("You lose! The Computer chose Paper. Paper disproves Spock");
  } else if (playerSelection === "spock" && computerSelection === "lizard") {
    computerScore++;
    return alert("You lose! The Computer chose Lizard. Lizard poisons Spock");
  } 
    // Tie
    else if (playerSelection === computerSelection) {
    return alert(`It's a tie! The computer chose ${playerSelection} too.`);
  } 
    // Error
    else {
    alert("Something went wrong. Did you spell it correctly?");
  }
}

function game() {
  for (let i = 0; i <= 50; i++) {
    playRound();
    console.log("Player Score:" + playerScore);
    console.log("Computer Score:" + computerScore);
    if (playerScore === 5) {
      console.log("You won the game! Congratulations!");
      break;
    } else if (computerScore === 5) {
      console.log("The Computer won the game! Better luck next time!");
      break;
    }
  }
}

game();
