
const mainImage = document.getElementById("main-image");
const buttons = document.getElementsByTagName("button");



for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerShotChoice = this.getAttribute("data-choice");
        playGame(playerShotChoice);
    });
}

function playGame(playerShotChoice) {

  

//chooses the direction the goalie will dive
let goalieChoice = Math.floor(Math.random() * 3)+1;

// New code to place a single predesigned image in to the container depending on player and computer choice values.

    if (goalieChoice === 1 && playerShotChoice === "0") {
        mainImage.src = "assets/images/GLBL-01.png";
    } else if (goalieChoice === 1 && playerShotChoice === "1") {
        mainImage.src = "assets/images/GLBM-01.png";
    } else if (goalieChoice === 1 && playerShotChoice === "2") {
        mainImage.src = "assets/images/GLBR-01.png";
    } else if (goalieChoice === 2 && playerShotChoice === "0") {
        mainImage.src = "assets/images/GMBL-01.png";
    } else if (goalieChoice === 2 && playerShotChoice === "1") {
        mainImage.src = "assets/images/GMBM-01.png";
    } else if (goalieChoice === 2 && playerShotChoice === "2") {
        mainImage.src = "assets/images/GMBR-01.png";
    } else if (goalieChoice === 3 && playerShotChoice === "0") {
        mainImage.src = "assets/images/GRBL-01.png";
    } else if (goalieChoice === 3 && playerShotChoice === "1") {
        mainImage.src = "assets/images/GRBM-01.png";
    } else if (goalieChoice === 3 && playerShotChoice === "2") {
        mainImage.src = "assets/images/GRBR-01.png";

    }
    
    //checkGoal();

    //updateScores(result);
    incrementPlayerScore()
    incrementGoalieScore()
}
/*
function checkGoal() {

    let playerChoice = playerShotChoice.value;
	let computerChoice = goalieChoice.value;
	let isGoal = (playerChoice === computerChoice);

	if (isGoal) {
		console.log("Goalie saved the shot!");
		incrementGoalieScore();
	} else {
		console.log("GOAAAAAAAL!");
		incrementPlayerScore();
	}
   
}
*/

// Increase player score with each goal scored
function incrementPlayerScore() {
    let oldScore = parseInt(document.getElementById("player").innerText);
	document.getElementById("player").innerText = ++oldScore;
}

// Increase goalie score with ech save.
function incrementGoalieScore() {
    let oldScore = parseInt(document.getElementById("goalie").innerText);
	document.getElementById("goalie").innerText = ++oldScore;
}
