
const mainImage = document.getElementById("main-image");
const buttons = document.getElementsByTagName("button");
const goalieDirection = ["Goalie_left", "Goalie_middle", "Goalie_right"]
let direction = ["Ball_left", "Ball_middle", "Ball_right"];


for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerShotChoice = this.getAttribute("data-choice");
        playGame(playerShotChoice);
    });
}

function playGame(playerShotChoice) {

    let goalieChoice = Math.floor(Math.random() * 3);

    /**
     * This code block would place 2 seperate images in to the smae container but they dont both appear. 
    
    mainImage.src = `assets/images/${goalieDirection[goalieChoice]}.png`;
    mainImage.alt = goalieDirection[goalieChoice];

    mainImage.src = `assets/images/${direction[playerShotChoice]}.png`;
    mainImage.alt = direction[playerShotChoice];
*/


// New code to place a single predesigned image in to the container depending on player and cpmouter choice values.

    if (playerShotChoice = [0], goalieChoice = [0]) {
        mainImage.src = "assets/images/GLBL-01.png";
    }





    //let result = checkGoal(goalieDirection[goalieChoice], direction[playerShotChoice]);

    //updateScores(result);


}
/*
function checkGoal() {

    let
}

*/