let restartBtn = document.getElementById("restart-button");

class Game {
  constructor(ctx) {
    this.player = null;
    this.obstaclesUp = [];
    this.obstaclesDown = [];
    this.obstaclesLeft = [];
    this.obstaclesRight = [];
    this.intervalId = null;
    this.frames = 0;
    this.width = 700;
    this.height = 550;
    this.controls = null;
    this.background = new Image();
    //this.points = 0;
    this.ctx = ctx;
    this.gameFinish = false;
  }

  drawBackground() {
    this.background.src = "/docs/assets/images/white2.png";
    this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
  }

  
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  start() {
    this.clear();
    this.player = new Player(350, 275, 20, 20, this.ctx);
    this.controls = new Controls(this.player);
    this.controls.keyboardEvents();
    this.intervalId = setInterval(this.update, 500 / 60);
    canvas.classList.remove("hidden");
  }

  update = () => {
    this.frames++;
    this.clear();
    this.drawBackground();
    this.player.draw();
    this.updateObstacles();
    this.checkGameOver();
    this.score();
  };

  //create a method for each side of the canvas where the enemies will appear
  updateObstacles() {
    for (let i = 0; i < this.obstaclesRight.length; i++) {
      this.obstaclesRight[i].x -= 1;
      this.obstaclesRight[i].draw();
    }
    for (let i = 0; i < this.obstaclesLeft.length; i++) {
      this.obstaclesLeft[i].x += 1;
      this.obstaclesLeft[i].draw();
    }
    for (let i = 0; i < this.obstaclesDown.length; i++) {
      this.obstaclesDown[i].y += 1;
      this.obstaclesDown[i].draw();
    }
    for (let i = 0; i < this.obstaclesUp.length; i++) {
      this.obstaclesUp[i].y -= 1;
      this.obstaclesUp[i].draw();
    }

    if (this.frames % 250 === 0) {
      this.obstaclesDown.push(
        new Obstacles(this.ctx, Math.floor(Math.random() * 700), 0)
      );
      this.obstaclesUp.push(
        new Obstacles(this.ctx, Math.floor(Math.random() * 700), 550)
      );
      this.obstaclesLeft.push(
        new Obstacles(this.ctx, 0, Math.floor(Math.random() * 550))
      );
      this.obstaclesRight.push(
        new Obstacles(this.ctx, 700, Math.floor(Math.random() * 550))
      );
    }
  }

  score() {
    this.ctx.font = "18px monospace";
    this.ctx.fillStyle = "#142d4c";
    const score = Math.floor(this.frames / 5);
    this.ctx.fillText(`Score: ${score}`, 570, 35);
  }

  checkGameOver() {
    this.obstaclesUp.some((obstacle) => {
      if (this.player.crashWith(obstacle)) this.stop();
    });
    this.obstaclesDown.some((obstacle) => {
      if (this.player.crashWith(obstacle)) this.stop();
    });
    this.obstaclesLeft.some((obstacle) => {
      if (this.player.crashWith(obstacle)) this.stop();
    });
    this.obstaclesRight.some((obstacle) => {
      if (this.player.crashWith(obstacle)) this.stop();
    });
  }

  stop() {
    this.gameFinish = true;
    restartBtn.classList.remove("hidden");
    clearInterval(this.intervalId);
  }
}

/* 
 localStorage.setItem("score", myScore);
  const displayScore = localStorage.getItem("score"); */
