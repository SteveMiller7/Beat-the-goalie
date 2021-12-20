
let mainImage = document.getElementById("main-image");
let buttons = document.getElementsByTagName("button");


// Button click function to identify which direction player wants to shoot and trigger random number for goalie movement.

for (let button of buttons) {
    
    button.addEventListener("click", function () {
        //disables buttons for 1.5 seconds after shot is taken
        document.getElementById("left").disabled = true;
        setTimeout(function(){document.getElementById("left").disabled = false;},1500);
        document.getElementById("middle").disabled = true;
        setTimeout(function(){document.getElementById("middle").disabled = false;},1500);
        document.getElementById("right").disabled = true;
        setTimeout(function(){document.getElementById("right").disabled = false;},1500);
        let playerShotChoice = this.getAttribute("data-choice");
        playGame(playerShotChoice);
    });
   
}

function playGame(playerShotChoice) {

    //chooses the direction the goalie will dive
    let goalieChoice = Math.floor(Math.random() * 3) + 1;

    // calls the correct image for the function

    if (goalieChoice === 1 && playerShotChoice === "0") {
        mainImage.src = "assets/images/GLBL-01.png";
        mainImage.alt = "Goalie left dive, ball left. Shot saved.";
        incrementGScore();

    } else if (goalieChoice === 1 && playerShotChoice === "1") {
        mainImage.src = "assets/images/GLBM-01.png";
        mainImage.alt = "Goalie left dive, ball middle. Goal.";
        incrementPScore();
    } else if (goalieChoice === 1 && playerShotChoice === "2") {
        mainImage.src = "assets/images/GLBR-01.png";
        mainImage.alt = "Goalie left dive, ball right. Goal.";
        incrementPScore();
    } else if (goalieChoice === 2 && playerShotChoice === "0") {
        mainImage.src = "assets/images/GMBL-01.png";
        mainImage.alt = "Goalie middle, ball left. Goal.";
        incrementPScore();
    } else if (goalieChoice === 2 && playerShotChoice === "1") {
        mainImage.src = "assets/images/GMBM-01.png";
        mainImage.alt = "Goalie middle, ball middle. Shot saved.";
        incrementGScore();
    } else if (goalieChoice === 2 && playerShotChoice === "2") {
        mainImage.src = "assets/images/GMBR-01.png";
        mainImage.alt = "Goalie middle, ball right. Goal.";
        incrementPScore();
    } else if (goalieChoice === 3 && playerShotChoice === "0") {
        mainImage.src = "assets/images/GRBL-01.png";
        mainImage.alt = "Goalie right, ball left. Goal.";
        incrementPScore();
    } else if (goalieChoice === 3 && playerShotChoice === "1") {
        mainImage.src = "assets/images/GRBM-01.png";
        mainImage.alt = "Goalie right, ball middle. Goal.";
        incrementPScore();
    } else if (goalieChoice === 3 && playerShotChoice === "2") {
        mainImage.src = "assets/images/GRBR-01.png";
        mainImage.alt = "Goalie right, ball right. Shot saved.";
        incrementGScore();
    }
    
}

function incrementPScore() {
    let oldPScore = parseInt(document.getElementById("player").innerText);
    document.getElementById("player").innerText = ++oldPScore;
    resetGame();
    winLose();
    return nextGame();
}

function incrementGScore() {
    let oldGScore = parseInt(document.getElementById("goalie").innerText);
    document.getElementById("goalie").innerText = ++oldGScore;
    resetGame();
    winLose();  
    return nextGame();
}

function resetGame() {
// implements reset to main game image after 1.5 seconds of a button being pressed
    setTimeout(() => {mainImage.src = "assets/images/Goalie_main.png";
    mainImage.alt = "Game screen home, Goalkeeper standing in the goal";}, 1500);

}



function winLose() {
    let gScore = parseInt(document.getElementById("goalie").innerText);
    let pScore = parseInt(document.getElementById("player").innerText);
    let letsGo = document.getElementById("lets-go");
    
    if (pScore == 1) {
        mainImage.src = "assets/images/WIN-01.png";
        mainImage.alt = "Win";
        letsGo.style.backgroundColor = "green";
        letsGo.style.color = "white";
        

    } else if (gScore == 1) {
        mainImage.src = "assets/images/LOSE-01.png";
        mainImage.alt = "Lose";
        letsGo.style.backgroundColor = "green";
        letsGo.style.color = "white";
        
    }
}

function nextGame() {


}
