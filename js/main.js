//Global variables
var computerWins = 0;
var userWins = 0;
var lastWinner = "none";

//Link functions to events
document.getElementById('rock-btn').addEventListener("click", function() {
	runGame("rock");
});
document.getElementById('paper-btn').addEventListener("click", function() {
	runGame("paper");
});
document.getElementById('scissors-btn').addEventListener("click", function() {
	runGame("scissors");
});

//Functions

function runGame(userChoice) {
	var computerChoice = getComputerChoice();
	var results = determineWinner(userChoice, computerChoice);
	var trashTalk = getTrashTalk(results, computerChoice, userChoice);
	updateUserInterface(trashTalk);
	if(results != "tie"){
		lastWinner = results;
	}else if(results == "computer"){
		computerWins += 1;
	}else{
		userWins += 1;
	}
}

function getComputerChoice(){
	// Math.random() generates a random number between 0 and 1
	var rand = Math.random();
	if(rand <= .333){
		return "rock";
	}else if(rand <= .666){
		return "paper";
	}else{
		return "scissors";
	}
}



function determineWinner(userChoice, computerChoice){
var choice1 = userChoice
var choice2 = computerChoice
	if(choice1===choice2){
		return "No Winner, its' a tie!";
	}
	if(choice1==="rock"){
		if(choice2==="scissors"){
			return "Rock in the Winner!";
		}else{
			return "Paper is the Winner!";
		}
	}
	if(choice1==="paper"){
		if(choice2==="rock"){
			return "Paper is the Winner!";
		}else{
			return "Scissors is the Winner!";
	}
	if(choice1==="scissors"){
		if(choice2==="rock"){
			return "Rock is the Winner!";
		}else{
			return "Scissors is the Winner!";
	}
}
}
function updateUserInterface(trashTalk){
	document.getElementById('user-score').innerHTML = userWins;
	document.getElementById('computer-score').innerHTML = computerWins;
	document.getElementById('trash-talk').innerHTML = trashTalk;
}
function getTrashTalk(thisWinner, computerChoice, userChoice){
	var userWinsMessage = "Looks like you got lucky. That won't last!";
	var computerWinsMessage = "As expected, I win! This is just too easy.";
	var tieMessage = "Stop copying my answers! Seriously, its annoying.";
	var computerWinsAgainMessage = "I win again! You should probably give up.";

	if(thisWinner == "computer"){
		message = computerChoice.toUpperCase() + " beats " + userChoice.toUpperCase() + ".<br><br>";
		if(lastWinner == "computer"){
			message += computerWinsAgainMessage;
		}
		else{
			message += computerWinsMessage;
		}
	}else if(thisWinner == "user"){
		message = userChoice.toUpperCase() + " beats " + computerChoice.toUpperCase() + ".<br><br>";
		message += userWinsMessage;
	}else{
		message = "We both picked: " + userChoice.toUpperCase() + "<br><br>" + tieMessage;
	}
	return message;
}