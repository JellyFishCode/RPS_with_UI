const scoreID = document.querySelector("#scoreID");

const scoreDisplay = document.createElement("p");
scoreDisplay.textContent = "Spielstand:   Spieler 0  : 0 Computer";
scoreDisplay.style.cssText = "color: #08402D;";
scoreID.appendChild(scoreDisplay);

const pickID = document.querySelector('#pickID');

const playerPick = document.createElement("p")
playerPick.textContent = "Spielerauswahl: ";
playerPick.style.cssText = "color: #08402D;";
pickID.appendChild(playerPick);

const computerPick = document.createElement("p")
computerPick.textContent = "Computerauswahl: ";
computerPick.style.cssText = "color: #08402D;";
pickID.appendChild(computerPick);

const result = document.createElement("p")
result.textContent = "_____";
result.style.cssText = "color: white";
result.style.background = "white";
result.style.width = "50%";
result.style.margin = "0 auto";
function resultFormat(){
    result.style.cssText = "color: black";
    result.style.background = "white";
    result.style.width = "50%";
    result.style.margin = "0 auto";
}

pickID.appendChild(result);

let playerScore = 0;
let computerScore = 0;

var auswahlMoeglichkeiten = ["schere", "stein", "papier"];
function computerPlay(){
    let nummer = Math.floor(Math.random() * auswahlMoeglichkeiten.length);
    switch(nummer){
        case 0:
            return "SCHERE";
        case 1:
            return "STEIN";
        case 2:
            return "PAPIER";
    }
}

function playRound(playerChoice){
    let spielerAuswahl = playerChoice;
    let computerAuswahl = computerPlay();
    playerPick.textContent = "Spielerauswahl: " + playerChoice;
    computerPick.textContent = "Computerauswahl: " + computerAuswahl;

    if(spielerAuswahl === computerAuswahl){
    console.log("Unentschieden");
    result.textContent = "Unentschieden";
    resultFormat();
    }
    if(
        (spielerAuswahl === "STEIN" && computerAuswahl === "SCHERE") ||
        (spielerAuswahl === "SCHERE" && computerAuswahl === "PAPIER") ||
        (spielerAuswahl === "PAPIER" && computerAuswahl === "STEIN")
    ){
        playerScore += 1;
        scoreDisplay.textContent = "Spielstand:   Spieler " + playerScore + " : " + computerScore + " Computer";
        console.log("Du gewinnst die Runde");
        result.textContent = spielerAuswahl + " schlägt " + computerAuswahl + ". Du gewinnst die Runde";
        resultFormat();
    }
    if(
        (computerAuswahl === "STEIN" && spielerAuswahl === "SCHERE") ||
        (computerAuswahl === "SCHERE" && spielerAuswahl === "PAPIER") ||
        (computerAuswahl === "PAPIER" && spielerAuswahl === "STEIN")
    ){
        computerScore += 1;
        scoreDisplay.textContent = "Spielstand:   Spieler " + playerScore + " : " + computerScore + " Computer";
        console.log("Du verlierst die Runde");
        result.textContent = computerAuswahl + " schlägt " + spielerAuswahl + ". Du verlierst die Runde";
        resultFormat();
    }  
    if(playerScore === 5 || computerScore == 5){
        if(playerScore > computerScore){
            window.alert("Herzlichen Glückwunsch! Du hast gewonnen.");
        }
        else{
            window.alert("Du hast verloren. Viel Glück beim nächsten Mal.");
        }
        playerScore = 0;
        computerScore = 0;
        scoreDisplay.textContent = "Spielstand:   Spieler " + playerScore + " : " + computerScore + " Computer";
        result.textContent = "_____";
        result.style.cssText = "color: white";
        result.style.background = "white";
        result.style.width = "50%";
        result.style.margin = "0 auto";
        

    }        

}

const buttonScissors = document.querySelector("#scissors");
buttonScissors.addEventListener('click', () => {
    playRound("SCHERE");
});
const buttonStone = document.querySelector("#stone");
buttonStone.addEventListener('click', () => {
    playRound("STEIN");
});
const buttonPaper = document.querySelector("#paper");
buttonPaper.addEventListener('click', () => {
    playRound("PAPIER");
});

// Additional Stuff
/*
const btn = document.querySelector("#btn");
btn.addEventListener('click', function(e){
    e.target.style.background = 'white';
});

btn.addEventListener('mouseenter', () => {
    btn.textContent = "Your mouse's inside this Button";
});
btn.addEventListener('mouseout', () => {
    btn.textContent = "Event Button";
});

const copy = document.querySelector("#copy");
copy.addEventListener('copy', function(e){
    window.alert("Do not copy this title... for whatever reason.");
});
*/