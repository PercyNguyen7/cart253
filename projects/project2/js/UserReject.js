class UserReject {
  constructor(userrejectImage) {
    this.x = 50;
    this.y = height / 2;
    this.vx = 0;
    this.vy = 0;
    this.speed = 100;
    this.size = 70;
    this.image = userrejectImage;
  }
  //                                            MOVE
  move() {
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
    this.x = constrain(this.x, 50, width - 50);
    this.y = constrain(this.y, 50, height - 50);
  }

//                                                LOSE
  badpath(){
    if (this.x > 200 && this.x <500 && this.y > 0 && this.y <500 ||
        this.x > 200 && this.x <1300 && this.y > 600 && this.y < height ||
        this.x >600 && this.x <900 && this.y > 100 && this.y < height ||
        this.x > 1000 && this.x <1300 & this.y > 0 && this.y <400 ||
        this.x >900 && this.x <1300 & this.y >500 && this.y <height

        ){
      push();
      textSize(64)
      noFill();
      stroke(255);
      textAlign(CENTER, CENTER);
      textSize(80);
      text(`You Lost`, width / 2, height/2);
      pop();

      if (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW) || keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW)){
      state = `lose`
      }
    }
  }

  goodpath(){
    if (this.x > 1300){
    state = `win`
    }
  }
  //                                                  DISPLAY
  display() {
    push();
    fill(255);
    imageMode(CENTER);
    image(this.image,this.x, this.y, this.size, this.size);
    pop();
  }
}
