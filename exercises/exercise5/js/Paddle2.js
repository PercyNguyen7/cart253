class Paddle2 {
  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.x = 250;
    this.y = height - this.height / 2;
    this.vx = 0;
    this.vy = 0;
    this.speed = 4;
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
      //   this.vy = 0;
    }

    this.x += this.vx;
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
