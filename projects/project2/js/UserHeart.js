class UserHeart{
  constructor(userHeartImage) {
    this.x = width/2;
    this.y = height / 2;
    this.vx = 0;
    this.vy = 0;
    //speeed 8 and random speed 5
    this.speed = 8;
    this.rspeed = 5;
    this.height = 75;
    this.width = 75;
    this.image = userHeartImage;
// let loose variable so that its width & height can be enlarged overtime see more in TIMER1.
    this.letloose = true;
  }
  //                                            MOVE
  //          CONTROL
  move() {
    this.x += this.vx;
    this.y += this.vy;

    if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed;
    }

     if (keyIsDown(UP_ARROW)) {
      this.vy = -this.speed;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.vy = this.speed;
    }
// change direction and move around
      let change = random(0, 1);
    if (change < 0.1) {
      this.vx = random(-this.rspeed, this.rspeed);
      this.vy = random(-this.rspeed, this.rspeed);
  }

  }

  touchchain(chain1){
    // let d = dist(this.x,this.y,chain1.x,chain1.y);
    //   if (d < this.width /2 + chain1.width/ 2 || d < this.height / 2 + chain1.height/2 ) {
    //     state = `clickbegin`;
    if (this.x - this.width/2 <280 || this.x + this.width/2 > width-280 || this.y - this.height/2 < 50 || this.y + this.height/2 > height- 50){
      state = `heartattackEnd`;
        acceptmusic.stop();
        loseSFX.play();
        oscillator.stop();
    }
  }
//                                                  DISPLAY
  display() {
    push();
    fill(255);
    imageMode(CENTER);
    image(this.image,this.x, this.y, this.height, this.width);
    pop();

      let change = random(0, 1);

    if (change < 0.1 & this.letloose === true) {
      this.height = random(50,90);
      this.width = random(50,90);
    }
  }
}
