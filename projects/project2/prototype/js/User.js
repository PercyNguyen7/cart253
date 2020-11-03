class User {
  constructor() {
    this.x = 50;
    this.y = height/2;
    this.vx = 0;
    this.vy = 0;
    this.speed= 100;
    this.size = 50;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

  if (keyIsDown(LEFT_ARROW)){
  this.vx = -this.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)){
    this.vx = this.speed;
  }
  else{
      this.vx = 0;
  }
  if (keyIsDown(UP_ARROW)){
    this.vy = -this.speed;

  }
  else if (keyIsDown(DOWN_ARROW)){
    this.vy = this.speed;

  }
  else {
    this.vy = 0;
  }
  this.x = constrain(this.x,50,width-50);
  this.y = constrain(this.y,50,height-50);



  }



  display() {
    push();
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.size);
    pop();
  }
}
