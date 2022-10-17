class Obstacles {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.color = "red";
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
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

 /*  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() < obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() < obstacle.right()
    );
  } */
}
