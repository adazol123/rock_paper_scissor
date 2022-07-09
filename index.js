let playerScore = 0;
let computerScore = 0;
let roundCounts = 0;

//BUTTON UI
let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorButton = document.querySelector(".scissor");

//TEXT UI
let playerScoreText = document.querySelector("#player_score");
let computerScoreText = document.querySelector("#computer_score");
let roundResultText = document.querySelector("#round_result");
let roundCountText = document.querySelector("#round_counts");
let resultFinalText = document.querySelector("#result_final");
let modalResultText = document.querySelector("#modal-result");
let roboticHandText = document.querySelector("#robotic-hand");

//MODAL UI
let modal = document.querySelector("#modal");
let modalBackdrop = document.querySelector("#modal-backdrop");
let modalContent = document.querySelector("#modal-content");

//EVENT HANDLER (ON_CLICK)
rockButton.addEventListener("click", () => handleClick("rock"));
paperButton.addEventListener("click", () => handleClick("paper"));
scissorButton.addEventListener("click", () => handleClick("scissor"));
modalBackdrop.addEventListener("click", () => closeModal());

function computerPlay() {
  let mode = ["Rock", "Paper", "Scissor"];
  let randomNumber = Math.floor(Math.random() * 3);
  return mode[randomNumber];
}

modal.setAttribute("disabled", true);

function handleClick(playerSelection) {
  let computerSelection = computerPlay();
  let round = playRound(playerSelection, computerSelection);
  computerSelection.toLowerCase() === "rock"
    ? (roboticHandText.textContent = "✊")
    : computerSelection.toLowerCase() === "paper"
    ? (roboticHandText.textContent = "✋")
    : (roboticHandText.textContent = "✌️");
  if (round === "win") {
    playerScore++;
  } else if (round === "lose") {
    computerScore++;
  }
  roundCounts++;

  roundResultText.textContent = `${round}`;
  playerScoreText.textContent = `${playerScore.toString()}`;
  computerScoreText.textContent = `${computerScore.toString()}`;
  roundCountText.textContent = `${roundCounts.toString()}`;
  if (isGameOver()) {
    if (playerScore > computerScore) {
      resetGame();
      modal.classList.remove("disabled");
      modalBackdrop.classList.remove("disabled");
      modalContent.classList.remove("disabled");
      modalResultText.classList.add("text-emerald-400");
      modalResultText.classList.remove("text-blue-400");
      modalResultText.classList.remove("text-rose-400");
      modalResultText.textContent = "Congrats! You win against machine.";
      return (resultFinalText.textContent =
        "Awesome, you beat me there! hope to play with you again next time. my robotic hand is gliching. haha");
    } else if (playerScore < computerScore) {
      resetGame();
      modal.classList.remove("disabled");
      modalBackdrop.classList.remove("disabled");
      modalContent.classList.remove("disabled");
      modalResultText.classList.remove("text-emerald-400");
      modalResultText.classList.remove("text-blue-400");
      modalResultText.classList.add("text-rose-400");
      modalResultText.textContent = "You lose.";
      return (resultFinalText.textContent =
        "Hmmm, seem you need more practice predicting on what robotic hand am I going to use next.");
    } else {
      resetGame();
      modal.classList.remove("disabled");
      modalBackdrop.classList.remove("disabled");
      modalContent.classList.remove("disabled");
      modalResultText.classList.remove("text-emerald-400");
      modalResultText.classList.add("text-blue-400");
      modalResultText.classList.remove("text-rose-400");
      modalResultText.textContent = "It's a draw!";
      return (resultFinalText.textContent =
        " That was close, I missed 1 earlier as I was taking a sip of coffee");
    }
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

function closeModal() {
  resetGame();
  modal.classList.add("disabled");
  modalBackdrop.classList.add("disabled");
  modalContent.classList.add("disabled");
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundCounts = 0;

  roundResultText.textContent = "";
  playerScoreText.textContent = "0";
  computerScoreText.textContent = "0";
  roundCountText.textContent = "0";
}

function playRound(playerSelection, computerSelection) {
  let win = "🤖 : Awesome, you beat me.";
  let lose = "🤖 :  Hmm, Seems you cannot predict what am i thing.";
  let draw = "🤖 : I knew it! I know you'll select ";

  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection.toLowerCase() === "rock") {
      return "draw";
    }
    if (computerSelection.toLowerCase() === "paper") {
      return "lose";
    }
    if (computerSelection.toLowerCase() === "scissor") {
      return "win";
    }
  } else if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection.toLowerCase() === "rock") {
      return "win";
    }
    if (computerSelection.toLowerCase() === "paper") {
      return "draw";
    }
    if (computerSelection.toLowerCase() === "scissor") {
      return "lose";
    }
  } else {
    if (computerSelection.toLowerCase() === "rock") {
      return "lose";
    }
    if (computerSelection.toLowerCase() === "paper") {
      return "win";
    }
    if (computerSelection.toLowerCase() === "scissor") {
      return "draw";
    }
  }
}

function game(mode) {
  for (let index = 0; index < 5; index++) {
    console.log(playRound(mode, computerSelection));
  }
}
