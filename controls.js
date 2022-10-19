class Controls {
  constructor(player) {
    this.player = player;
  }

  keyboardEvents() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowLeft":
          if (this.player.x > 1) {
            this.player.x -= 10;
          }
          break;

        case "ArrowRight":
          if (this.player.x < 690) {
            this.player.x += 10;
          }
          break;

        case "ArrowUp":
          if (this.player.y > 10) {
            this.player.y -= 10;
          }

          break;

        case "ArrowDown":
          if (this.player.y < 490) {
            this.player.y += 10;
          }

          break;
      }
    });
  }
}
