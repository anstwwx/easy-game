const colorBox = document.getElementById("color-box");
const scoreBoard = document.getElementById("score");

let score = 0;
let active = true;
function changeColor() {
    if (!active) return;

    const colors = ["red", "green", "blue", "yellow", "purple"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
}
function onBoxClick() {
    if (!active) return;

    if (colorBox.style.backgroundColor === "green") {
        score++;
        scoreBoard.textContent = score;
    } else {
        endGame();
    }
}
function endGame() {
    active = false;
    alert(`Гра завершена! Твій результат: ${score}`);
    resetGame();
}
function resetGame() {
    score = 0;
    scoreBoard.textContent = score;
    colorBox.style.backgroundColor = "red";
    active = true;
    startGame();
}
function startGame() {
    setInterval(changeColor, 800); // Зміна кольору раз на 800 мс
}
colorBox.addEventListener("click", onBoxClick);
startGame();