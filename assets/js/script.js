
let mainImage = document.getElementById("main-image");
let buttons = document.getElementsByTagName("button");


// Button click function to identify which direction player wants to shoot and trigger random number for goalie movement.

for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerShotChoice = this.getAttribute("data-choice");
        playGame(playerShotChoice);
    });
}


function playGame(playerShotChoice) {

    //chooses the direction the goalie will dive
    let goalieChoice = Math.floor(Math.random() * 3) + 1;

    // New code to place a single predesigned image in to the container depending on player and computer choice values.

    if (goalieChoice === 1 && playerShotChoice === "0") {
        mainImage.src = "assets/images/GLBL-01.png";
        incrementGScore()

    } else if (goalieChoice === 1 && playerShotChoice === "1") {
        mainImage.src = "assets/images/GLBM-01.png";
        incrementPScore()
    } else if (goalieChoice === 1 && playerShotChoice === "2") {
        mainImage.src = "assets/images/GLBR-01.png";
        incrementPScore()
    } else if (goalieChoice === 2 && playerShotChoice === "0") {
        mainImage.src = "assets/images/GMBL-01.png";
        incrementPScore()
    } else if (goalieChoice === 2 && playerShotChoice === "1") {
        mainImage.src = "assets/images/GMBM-01.png";
        incrementGScore()
    } else if (goalieChoice === 2 && playerShotChoice === "2") {
        mainImage.src = "assets/images/GMBR-01.png";
        incrementPScore()
    } else if (goalieChoice === 3 && playerShotChoice === "0") {
        mainImage.src = "assets/images/GRBL-01.png";
        incrementPScore()
    } else if (goalieChoice === 3 && playerShotChoice === "1") {
        mainImage.src = "assets/images/GRBM-01.png";
        incrementPScore()
    } else if (goalieChoice === 3 && playerShotChoice === "2") {
        mainImage.src = "assets/images/GRBR-01.png";
        incrementGScore()
    }


}

function incrementPScore() {
    let oldPScore = parseInt(document.getElementById("player").innerText);
    document.getElementById("player").innerText = ++oldPScore;
    return winLose();
}



function incrementGScore() {
    let oldGScore = parseInt(document.getElementById("goalie").innerText);
    document.getElementById("goalie").innerText = ++oldGScore;
    return winLose();
}

function winLose() {
    let gScore = parseInt(document.getElementById("goalie").innerText);
    let pScore = parseInt(document.getElementById("player").innerText);

    if (pScore == 10) {
        mainImage.src = "assets/images/WIN-01.png";

    } else if (gScore == 5) {
        mainImage.src = "assets/images/LOSE-01.png";
    }
}

