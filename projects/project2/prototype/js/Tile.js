class Tile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.size = 70;
    this.active = true;
  }



  display() {
    push();
    fill(255, 50, 50);
    stroke(0);
    rect(this.x, this.y, this.size);
    pop();
  }
}
