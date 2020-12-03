class UserHeart2{
  constructor(userHeartImage) {
    this.x = width/2;
    this.y = height/2;
    this.vx = 0;
    this.vy = 0;
    this.speed = 7;
    this.size = 200;
    this.image = userHeartImage;

    this.x2 = 0;
    this.y2 = 0;
    this.vx2 = 0;
    this.vy2 = 0;
    this.speed2 = 3;
    this.size2 = 50;

// let loose variable so that its width & height can be enlarged overtime see more in TIMER1.
  }
  move(){
    this.x += this.vx;
    this.y += this.vy;

    if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
    }
    if (keyIsDown(UP_ARROW)) {
      this.vy = -this.speed;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.vy = this.speed;
    } else {
      this.vy = 0;
    }
    this.x = constrain(this.x, 0+ this.size/2, width - this.size/2);
    this.y = constrain(this.y, 0 +this.size/2, height - this.size/2);
}
  movepursuit1(){
  //first pursuer
    if (this.x > this.x2) {
      this.vx2 = this.speed2;
    }
    else if (this.x < this.x2) {
      this.vx2 = -this.speed2;
    }

    if (this.y > this.y2) {
      this.vy2 = this.speed2;
    }
    else if (this.y < this.y2) {
      this.vy2 = -this.speed2;
    }
    this.x2 +=  this.vx2;
    this.y2 += this.vy2;
}

caught(){
  let d = dist(this.x, this.y, this.x2, this.y2);
    if (d < this.size/2 + this.size2/2){
      state = 'panicEnd'
    }
}




  display(){
    push();
    fill(255);
    imageMode(CENTER);
    image(this.image,this.x, this.y, this.size, this.size);
    pop();
  }

  displaypursuit(){
    push();
    fill(200);
    ellipse(this.x2,this.y2,this.size2);
    pop();
  }
}
