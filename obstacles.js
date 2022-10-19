class Obstacles {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.img = new Image();
    /*  this.color = "red"; */
  }

  draw() {
    /* this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height); */

    this.img.src = "docs/assets/images/circle.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }
}
