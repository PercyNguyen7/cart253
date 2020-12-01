class UserHeart{
  constructor(userHeartImage) {
    this.x = width/2;
    this.y = height / 2;
    this.vx = 0;
    this.vy = 0;
    this.speed = 9;
    this.rspeed = 6;
    this.height = 75;
    this.width = 75;
    this.image = userHeartImage;
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
    } else if (keyIsDown(UP_ARROW)) {
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

// constrain to inside canvas
    this.x = constrain(this.x, 50, width - 50);
    this.y = constrain(this.y, 50, height - 50);
  }

  touchchain(chain1){
    // let d = dist(this.x,this.y,chain1.x,chain1.y);
    //   if (d < this.width /2 + chain1.width/ 2 || d < this.height / 2 + chain1.height/2 ) {
    //     state = `clickbegin`;
    if (this.x - this.width/2 <325 || this.x - this.width/2 > width-325 || this.y - this.height/2 < 75 || this.y - this.height/2 > height- 75){
      state = `heartattackEnd`;
    }
  }
//                                                  DISPLAY
  display() {
    push();
    fill(255);
    imageMode(CENTER);
    image(this.image,this.x, this.y, this.height, this.width);
    pop();

//  HEART BEAT
    // this.size = 50;
    // if (this.size === 50){
    //   this.size =10
    // }
    // else if (this.size ===100){
    //   this.size = 50
    // }
      let change = random(0, 1);
    if (change < 0.1) {
      this.height = random(30,70);
      this.width = random(30,70);
    }
  }
}
