class Tile {
  constructor(x, y,color) {
    this.x = x;
    this.y = y;
    this.maxSpeed = 10;
    this.size = 100;
    this.active = true;
    this.color = {
      r:random(100,250),
      g:random(0),
      b:random(0)
    }
  }



  display() {
    push();
    fill(this.color.r, this.color.g, this.color.b);
    rect(this.x, this.y, this.size);
    pop();
  }
}
