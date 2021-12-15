let buttons = document.getElementsByTagName('button');
let imageBox = document.getElementById("game-container");
let playerScore = document.getElementById("player-score");
let goalieScore = document.getElementById("goalie-score");
let shotChoice = ["left", "middle", "right"]




// adding event listener to buttons

for (let button of buttons){
    button.addEventLister("click", function() {
        let playerShotChoice = document.getAttribute("data-choice");
        playGame(playerShotChoice);
    });
}


// Game function

function playGame(playerShotChoice) {

    playerImage.src = `assets/images/${shotChoice[playerShotChoice]}.png`;
    playerImage.alt = shotChoice[playerShotChoice];

    let goalieChoice = Math.floor(Math.random() *3);

    goalieImage.src = `assets/images/${shotChoice[goalieChoice]}.png`;
    goalieImage.alt = shotChoice[goalieChoice];
*/