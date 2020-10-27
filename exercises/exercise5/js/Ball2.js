class Ball2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.size = 40;
    this.active = true;
  }

  gravity(force) {
    this.ay = this.ay + force;
  }

  move() {
    this.vx += this.ax;
    this.vy += this.ay;

    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    this.x += this.vx;
    this.y += this.vy;

    if (this.y - this.size / 2 > height) {
      this.active = false;
    }
  }

  bounce(paddle, paddle2) {
    if (
      this.x > paddle.x - paddle.width / 2 &&
      this.x < paddle.x + paddle.width / 2 &&
      this.y + this.size / 2 > paddle.y - paddle.height / 2 &&
      this.y - this.size / 2 < paddle.y + paddle.height / 2  ) {
      //bounce
      let dx = this.x - paddle.x;
      this.vx += map(dx, -paddle.width / 2, paddle.width / 2, -2, 2);
      this.vy = -this.vy;
      this.ay = 0;
    }

    if (this.x > paddle2.x - paddle2.width / 2 &&
      this.x < paddle2.x + paddle2.width / 2 &&
      this.y + this.size / 2 > paddle2.y - paddle2.height / 2 &&
      this.y - this.size / 2 < paddle2.y + paddle2.height / 2) {
      //bounce
      let dx = this.x - paddle2.x;
      this.vx += map(dx, -paddle2.width / 2, paddle2.width / 2, -2, 2);
      this.vy = -this.vy;
      this.ay = 0;
    }
  }
  check(){
    if (this.y + this.y/2 < height || this.x - this.x/2 < 0 || this.x + thisx / 2 > width){

      }
    }

  display() {
    push();
    fill(80, 80, 80);
    stroke(0);
    square(this.x, this.y, this.size);
    pop();
  }
}
