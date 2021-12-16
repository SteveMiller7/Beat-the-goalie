
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

    mainImage.src = `assets/images/${goalieDirection[goalieChoice]}.png`;
    mainImage.alt = goalieDirection[goalieChoice];

    mainImage.src = `assets/images/${direction[playerShotChoice]}.png`;
    mainImage.alt = direction[playerShotChoice];


    //let result = checkGoal(goalieDirection[goalieChoice], direction[playerShotChoice]);

    //updateScores(result);


}
/*
function checkGoal() {

    let
}

*/