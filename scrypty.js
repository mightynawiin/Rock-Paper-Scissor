let ms=0;
let cs=0;
function getComputerMove() {
    const moves = ["Rock", "Paper", "Scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return moves[randIndex];
}
function playGame(playerMove) {
    const computerMove = getComputerMove();
    let outcome = "";

    if (playerMove === computerMove) {
        outcome = "Tie!";
    } else if (
        (playerMove === "Rock" && computerMove === "Scissors") ||
        (playerMove === "Paper" && computerMove === "Rock") ||
        (playerMove === "Scissors" && computerMove === "Paper")
    ) {
        outcome = "Win!";
        ms=ms+1;
        document.getElementById("sc").innerText =ms;
    } else {
        outcome = "Lose!";
        cs=cs+1;
        document.getElementById("sc2").innerText =cs;

    }

    const message = `You picked ${playerMove}, Computer picked ${computerMove}, ${outcome};`
    document.getElementById("result").innerText = message;
}
