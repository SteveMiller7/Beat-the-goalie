
const mainImage = document.getElementById("main-image");
const buttons = document.getElementsByTagName("button");
//const goalieDirection = ["Goalie_left", "Goalie_middle", "Goalie_right"]
//let direction = ["Ball_left", "Ball_middle", "Ball_right"];


for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerShotChoice = this.getAttribute("data-choice");
        playGame(playerShotChoice);
    });
}

function playGame(playerShotChoice) {

    /**
     * This code block would place 2 seperate images in to the smae container but they dont both appear. 
    
    mainImage.src = `assets/images/${goalieDirection[goalieChoice]}.png`;
    mainImage.alt = goalieDirection[goalieChoice];

    mainImage.src = `assets/images/${direction[playerShotChoice]}.png`;
    mainImage.alt = direction[playerShotChoice];
*/

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
    
    let result = checkGoal(goalieChoice, direction[playerShotChoice]);

   // updateScores(result);


}

function checkGoal() {

    let PlayerChoice = playerShotChoice;
	let computerChoice = goalieChoice;
	let isCorrect = PlayerChoice === computerChoice;

	if (isCorrect) {
		console.log("Goalie saved the shot!");
		incrementGoalieScore();
	} else {
		console.log("GOAAAAAAAL!")
		incrementPlayerScore();
	}

}

