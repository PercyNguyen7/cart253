class Paddle2 {
  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.x = 250;
    this.y = height - this.height / 2;
    this.vx = 0;
    this.vy = 0;
    this.speed = 8;
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
    this.x = constrain(this.x, 0 + this.width / 2, width / 2 - this.width / 2);
  }
  display() {
    push();
    fill(200);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}