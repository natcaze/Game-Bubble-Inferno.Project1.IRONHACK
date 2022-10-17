class Obstacles {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
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

  crashWith(obstacles) {
    return !(
      this.bottom() < obstacles.top() ||
      this.top() < obstacles.bottom() ||
      this.right() < obstacles.left() ||
      this.left() < obstacles.right()
    );
  }
}
