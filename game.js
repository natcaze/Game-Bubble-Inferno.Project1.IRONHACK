class Game {
  constructor(ctx) {
    this.player = null;
    //this.obstacles = [];
    this.intervalId = null;
    this.frames = 0;
    this.width = 700;
    this.height = 550;
    this.controls = null;
    this.background = new Image();
    this.ctx = ctx;
  }

  drawBackground() {
    this.background.src =
      "/docs/assets/images/space_background_for_infinite_scroll_example-300x300.png";
    this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
  }

  start() {
    this.player = new Player(0, 0, 0, 0, this.ctx);
    this.intervalId = setInterval(this.update, 1000 / 60);
    this.controls = new Controls(this.player);
  }

  update = () => {
    this.drawBackground();
    this.player.draw();
    //this.updateObstacles();
    this.score();
    this.checkGameOver();
  };
}
