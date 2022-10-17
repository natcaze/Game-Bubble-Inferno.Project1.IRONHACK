class Player {
  constructor(x, y, width, height, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    //this.color = color;
    this.ctx = ctx;
    //this.img = new Image();
  }

  draw() {
    ctx.fillStyle = "pink";
    ctx.fillRect(355, 250, 20, 20);
    //this.ctx.drawImage(this.img, this.x, this.y, 50, 50);
  }
}
