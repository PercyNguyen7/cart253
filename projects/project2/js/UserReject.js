class UserReject {
  constructor(userrejectImage, upSFX, downSFX, leftSFX, rightSFX) {
    this.x = 50;
    this.y = height / 2;
    this.vx = 0;
    this.vy = 0;
    this.speed = 100;
    this.size = 70;
    this.image = userrejectImage;
    this.lastSFXplayed;
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

//                                        SFX AND SQUARE GUIDE
sfxguide(){
  if (this.x > 100 && this.x <200 && this.y > 600 && this.y <700 && this.lastSFXplayed!=0){;
    rightSFX.play();
    this.lastSFXplayed = 0;

  }
  if (this.x > 600 && this.x <700 && this.y > 600 && this.y <700 && this.lastSFXplayed!=1){
    upSFX.play();
    push();
    fill(250, 186, 95);
    ellipse(150,650,80);
    pop();
    this.lastSFXplayed = 1;
  }
  if (this.x > 600 && this.x <700 && this.y > 400 && this.y <500 && this.lastSFXplayed!=2){
    leftSFX.play();
    this.lastSFXplayed = 2;
    push();
    fill(250, 186, 95);
    ellipse(650,650,80);
    pop();
  }
  if (this.x > 400 && this.x <500 && this.y > 400 && this.y <500 && this.lastSFXplayed!=3){
    upSFX.play();
    this.lastSFXplayed = 3;
    push();
    fill(250, 186, 95);
    ellipse(650,450,80);
    pop();

  }
  if (this.x > 400 && this.x <500 && this.y > 200 && this.y <300 && this.lastSFXplayed!=4){
    rightSFX.play();
    this.lastSFXplayed = 4;
    push();
    fill(250, 186, 95);
    ellipse(450,450,80);
    pop();
  }
  if (this.x > 600 && this.x <700 && this.y > 200 && this.y <300 && this.lastSFXplayed!=5){
    upSFX.play();
    this.lastSFXplayed = 5;
    push();
    fill(250, 186, 95);
    ellipse(450,250,80);
    pop();
  }
  if (this.x > 600 && this.x <700 && this.y > 0 && this.y <100 && this.lastSFXplayed!=6){
    rightSFX.play();
    this.lastSFXplayed = 6;
    push();
    fill(250, 186, 95);
    ellipse(650,250,80);
    pop();
  }
  if (this.x > 800 && this.x <900 && this.y > 0 && this.y <100 && this.lastSFXplayed!=7){
    downSFX.play();
    this.lastSFXplayed = 7;
    push();
    fill(250, 186, 95);
    ellipse(650,50,80);
    pop();
  }
  if (this.x > 800 && this.x <900 && this.y > 200 && this.y <300 && this.lastSFXplayed!=8){
    rightSFX.play();
    this.lastSFXplayed = 8;
    push();
    fill(250, 186, 95);
    ellipse(850,50,80);
    pop();
  }
  if (this.x > 1000 && this.x <1100 && this.y > 200 && this.y <300 && this.lastSFXplayed!=9){
    downSFX.play();
    this.lastSFXplayed = 9;
    push();
    fill(250, 186, 95);
    ellipse(850,250,80);
    pop();
  }
  if (this.x > 1000 && this.x <1100 && this.y > 400 && this.y <500 && this.lastSFXplayed!=10){
    leftSFX.play();
    this.lastSFXplayed = 10;
    push();
    fill(250, 186, 95);
    ellipse(1050,250,80);
    pop();
  }
  if (this.x > 800 && this.x <900 && this.y > 400 && this.y <500 && this.lastSFXplayed!=11){
    downSFX.play();
    this.lastSFXplayed = 11;
    push();
    fill(250, 186, 95);
    ellipse(1050,450,80);
    pop();
  }
  if (this.x > 800 && this.x <900 && this.y > 600 && this.y <700 && this.lastSFXplayed!=12){
    rightSFX.play();
    this.lastSFXplayed = 12;
    push();
    fill(250, 186, 95);
    ellipse(850,450,80);
    pop();
  }
  if (this.x > 800 && this.x <1400 && this.y > 600 && this.y <700){
    push();
    fill(250, 186, 95);
    ellipse(850,650,80);
    pop();
  }
}

//                                                LOSE
  badpath(){
    if (
      // this.x > 200 && this.x <500 && this.y > 0 && this.y <500 ||
      //   this.x > 200 && this.x <1300 && this.y > 600 && this.y < height ||
      //   this.x >600 && this.x <900 && this.y > 100 && this.y < height ||
      //   this.x > 1000 && this.x <1300 & this.y > 0 && this.y <400 ||
      //   this.x >900 && this.x <1300 & this.y >500 && this.y <height

        // left side cross
         this.x > 200 && this.x <400 && this.y > 0 && this.y <600 ||
         this.x > 400 && this.x <600 && this.y > 0 && this.y <200 ||
         this.x > 400 && this.x <600 && this.y > 500 && this.y <600 ||

         //inside cross
         this.x > 700 && this.x <800 && this.y > 100 && this.y <700||
         this.x > 500 && this.x <1000 && this.y > 300 && this.y <400 ||

         //right side cross
        this.x > 1100 && this.x <1300 && this.y > 0 && this.y <600 ||
        this.x > 900 && this.x <1100 && this.y > 0 && this.y <200 ||
        this.x > 900 && this.x <1100 && this.y > 500 && this.y <600
        )  {
      push();
      strokeWeight(2);
      stroke(0);
      fill(200,3,7)
      textAlign(CENTER, CENTER);
      textSize(120);
      text(`WRONG STEP BUDDY...`, width / 2, height/2);
      pop();

      if (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW) || keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW) || keyIsDown(32)){
      state = `badrejectionEnd`
          if (rejectmusic.isPlaying()){
          rejectmusic.stop()
          loseSFX.play()
        }
      }
    }
  }
//                                                WIN
  goodpath(){
    if (this.x > 1300){
    state = `goodrejectionEnd`
    winSFX.play();
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
