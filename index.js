/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//highscore
let highScore = localStorage.getItem("score");
let record = document.getElementById("highScore");
record.innerHTML = highScore;

let game = new Game(ctx);
//start-button:
let startBtn = document.getElementById("start-button");
window.onload = () => {
  /* let restartBtn = document.getElementById("restart-button"); */
  /* let myCanvas = document.getElementById("canvas"); */
  startBtn.onclick = () => {
    game.start();
    restartBtn.classList.add("hidden");
    startBtn.classList.add("hidden");

    /* startBtn.style.display = "none"; */
  };

  let restartBtn = document.getElementById("restart-button");
  restartBtn.onclick = () => {
    game.start();
    restartBtn.classList.add("hidden");
    /*  window.location.reload(); */
  };
};
