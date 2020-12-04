class UserHeart2{
  constructor(userHeartImage) {
//  VARIABLES FOR HEART
    this.x = width/2;
    this.y = height/2;
    this.vx = 0;
    this.vy = 0;
    this.speed = 7;
    this.size = 200;
    this.image = userHeartImage;
// VARIABLLES FOR PURSUER
    this.x2 = 0;
    this.y2 = 0;
    this.vx2 = 0;
    this.vy2 = 0;
    this.speed2 = 3;
    this.size2 = 50;
    this.fill2 ={
      r:0,
      g:0,
      b:0
    }
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
      acceptmusic.stop();
      loseSFX.play();
    }
}

  display(){
    push();
    imageMode(CENTER);
    image(this.image,this.x, this.y, this.size, this.size);
    pop();
  }

  displaypursuit(){
    push();
    noStroke();
    fill(this.fill2.r,this.fill2.g,this.fill2.b);
    if (this.size2 === 450){
    let d = dist(this.x, this.y, this.x2, this.y2);
      this.fill2.r = map(d,0,600,255,0);
      this.fill2.g = 0;
      this.fill2.b = 0;
    }
    else if (this.size2 <= 100){
    let d = dist(this.x, this.y, this.x2, this.y2);
      this.fill2.r = map(d,0,400,60,0);
      this.fill2.g = map(d,0,400,90,0);
      this.fill2.b = map(d,0,400,160,0);
    }
    ellipse(this.x2,this.y2,this.size2);
    pop();
  }
}
