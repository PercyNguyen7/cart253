class Paddle {
  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.x = (3 * width) / 4;
    this.y = height - this.height / 2;
  }

  move() {
    this.x = mouseX;
    this.x = constrain(mouseX, width / 2 + this.width / 2, width);
  }

  display() {
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
