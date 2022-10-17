class Controls {
  constructor(player) {
    this.player = player;
  }

  keyboardEvents() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowLeft":
          if (this.player.x >= 25) {
            this.player.x -= 10;
          }
          break;

        case "ArrowRight":
          if (this.player.x + this.player.width <= 500) {
            this.player.x += 10;
          }
          break;
      }
    });
  }
}
