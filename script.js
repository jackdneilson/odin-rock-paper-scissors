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

function getHumanChoice() {
	return prompt("Enter rock, paper, or scissors.").toLowerCase();
}

function playRound() {
	let computerChoice = getComputerChoice();
	let humanChoice = getHumanChoice();

	if (computerChoice == humanChoice) {
		return;
	}

	if (computerChoice == "rock") {
		if (humanChoice == "scissors") {
			computerScore++;
		} else {
			humanScore++;
		}
	}

	if (computerChoice == "scissors") {
		if (humanChoice == "paper") {
			computerScore++;
		} else {
			humanScore++;
		}
	}

	if (computerChoice == "paper") {
		if (humanChoice == "rock") {
			computerScore++;
		} else {
			humanScore++;
		}
	}
}

let computerScore = 0;
let humanScore = 0;

function playGame() {
	for (i = 0; i < 5; i++) {
		playRound();
	}
	if (computerScore > humanScore) {
		console.log("Computer won");
	} else if (computerScore == humanScore) {
		console.log("Draw");
	} else {
		console.log("Human won");
	}
}

playGame();
