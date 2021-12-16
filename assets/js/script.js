
const mainImage = document.getElementById("main-image");
const buttons = document.getElementsByTagName("button");
const goalieDirection = ["Goalie_left", "Goalie_middle", "Goalie_right"]


for (let button of buttons){
    button.addEventListener("click", function() {
        let playerShotChoice = this.getAttribute("data-choice");
        playGame(playerShotChoice);
    });
}

function playGame(playerShotChoice) {


    let goalieChoice = Math.floor(Math.random() * 3);

    mainImage.src = `assets/images/${goalieDirection[goalieChoice]}.png`;
    mainImage.alt = goalieDirection[goalieChoice];

   // mainImage.src = `assets/images/${direction[playerShotChoice]}.png`;
   // mainImage.alt = direction[playerShotChoice];

    //let result = checkGoal(goalieDirection[goalieChoice], direction[playerShotChoice]);

    //updateScores(result);

    
    }



/*
let buttons = document.getElementsByTagName("button");
let gameImage = document.getElementById("main-image");
let playerScore = document.getElementById("player-score");
let goalieScore = document.getElementById("goalie-score");
let direction = document.getAttribute("data-choice");
    
let direction = ["left", "middle", "right"];
let left = direction[0].src = "assets/images/Ball_left-01.png";
let middle = direction[1].src = "assets/images/Ball_middle-01.png";
let right = direction[2].src = "assets/images/Ball_right-01.png";

let goalieDirection = ["gLeft", "gMiddle", "gRight"]
let gLeft = direction[0].src = "assets/images/Goalie_left-01.png";
let gMiddle = direction[1].src = "assets/images/Goalie_middle-01.png";
let gRight = direction[2].src = "assets/images/Goalie_right-01.png";


// adding event listener to buttons

for (let button of buttons){
    button.addEventListener("click", function() {
        let playerShotChoice = document.getAttribute("data-choice");
        playGame(playerShotChoice);
    });
}


// Game function

function playGame(playerShotChoice) {

    let goalieChoice = Math.floor(Math.random() *3);

    gameImage.src = `assets/images/${goalieDirection[goalieChoice]}.png`;
    gameImage.alt = goalieDirection[goalieChoice];

    gameImage.src = `assets/images/${direction[playerShotChoice]}.png`;
    gameImage.alt = direction[playerShotChoice];

    let result = checkGoal(goalieDirection[goalieChoice], direction[playerShotChoice]);

    updateScores(result);
}


*/





/*
for (let button of buttons){
    button.addEventListener("click", function() {
        let playerShotChoice = document.getAttribute("data-choice");
        playGame(playerShotChoice);
    });
}


function playGame(playerShotChoice) {

    let goalieChoice = Math.floor(Math.random() * 2);
    console.log(goalieChoice)

    if (goalieChoice = [0]) {
        gameImage.src = "assets/images/Goalie_left-01.png"
    } else if (goalieChoice[1]) {
        gameImage.src = "assets/images/Goalie_middle-01.png"
    } else (goalieChoice[2]); {
        gameImage.src = "assets/images/Goalie_right-01.png"
    }

    if (playerShotChoice[0]) {
        gameImage.src ="assets/images/Ball_left-01.png"
    } else if (playerShotChoice[2]) {
        gameImage.src ="assets/images/Ball_middle-01.png"
    } else (playerShotChoice[2]) {
        gameImage.src = "assets/images/Ball_right-01.png"
    }

}
*/