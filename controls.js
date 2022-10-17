class Controls {
  constructor(player) {
    this.player = player;
  }

  keyboardEvents() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowLeft":
          this.player.x -= 10;
          break;

        case "ArrowRight":
          this.player.x += 10;

          break;

        case "ArrowUp":
          this.player.y -= 10;

          break;

        case "ArrowDown":
          this.player.y += 10;

          break;
      }
    });
  }
}
