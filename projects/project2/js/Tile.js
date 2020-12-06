class Tile {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.maxSpeed = 10;
    this.size = 100;
    this.color = {
      r: 150,
      g: 0,
      b: 150
    }
  }

  colorchange() {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW) || keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW)) {
      this.color.r = random(130, 200);
      this.color.b = random(130, 200);

    }
  }
  display() {
    push();
    fill(this.color.r, this.color.g, this.color.b);
    rect(this.x, this.y, this.size);
    pop();
  }
}
