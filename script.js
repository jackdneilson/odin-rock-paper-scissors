let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
	let rnd = Math.random();
	if (rnd <= 0.33) {
		return "rock";
	} else if (rnd <= 0.66) {
		return "paper";
	} else {
		return "scissors";
	}
}

function playRound(humanChoice) {
	let computerChoice = getComputerChoice();

	if (computerChoice == humanChoice) {
		return;
	}

	if (
		(computerChoice == "rock" && humanChoice == "scissors") ||
		(computerChoice == "scissors" && humanChoice == "paper") ||
		(computerChoice == "paper" && humanChoice == "rock")
	) {
		computerScore++;
	} else {
		humanScore++;
	}

	document.querySelector("#humanScore").textContent =
		`Human Score: ${humanScore}`;
	document.querySelector("#computerScore").textContent =
		`Computer Score: ${computerScore}`;

	if (computerScore == 5) {
		alert("Computer won!");
		endGame();
	}
	if (humanScore == 5) {
		alert("Human won!");
		endGame();
	}
}

function endGame() {
	document.querySelector("body").replaceChildren();
}

document
	.querySelector("#rock")
	.addEventListener("click", () => playRound("rock"));

document
	.querySelector("#paper")
	.addEventListener("click", () => playRound("paper"));

document
	.querySelector("#scissors")
	.addEventListener("click", () => playRound("scissors"));
