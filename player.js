class Player {
  constructor(x, y, width, height, ctx) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    //this.color = color;
    this.ctx = ctx;
    this.img = new Image();
  }

  draw() {
    /* ctx.fillStyle = "pink";
    ctx.fillRect(this.x, this.y, this.width, this.height); */
    this.img.src = "docs/assets/images/catplayer.png";
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

  crashWith(obstacles) {
    return !(
      this.bottom() < obstacles.top() ||
      this.top() > obstacles.bottom() ||
      this.right() < obstacles.left() ||
      this.left() > obstacles.right()
    );
  }
}
