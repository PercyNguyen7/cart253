class Memo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.speed = 40;
    this.size = 20;
    this.active = true;
    this.tstop = false;
    }
  move(){
  //                              TIME STOP FALSE
    if (this.tstop === false){
      let change1 = random(0, 1);
      if (change1 < 0.3) {
        this.size = random(15, 20);
      }
      this.speed =20;
  //  Heart and Chaser speed 7 & 3,6
      userHeart2.size = 160;
      userHeart2.speed = 3.6;
      userHeart2.size2 = 50;
      userHeart2.speed2 = 2;

      let change3 = random(0, 1);
        if (change3 < 0.05) {
          this.vx = random(-this.speed, this.speed);
          this.vy = random(-this.speed, this.speed);
        }
    }
  //                                 TIME STOP TRUE
     if (this.tstop === true){
       let change1 = random(0, 1);
       if (change1 < 0.5) {
         this.size = random(45, 48);
       }
      this.speed =0.5;

  //  Heart and Chaser speed 20 & 3,6
      userHeart2.size = 30;
      userHeart2.speed = 22;
      userHeart2.size2 = 450;
      userHeart2.speed2 = 3.6;

       let change3 = random(0, 1);
         if (change3 < 1) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
      }
    }

    this.x += this.vx;
    this.y += this.vy;

    this.x = constrain(this.x, 0+ this.size/2, width - this.size/2);
    this.y = constrain(this.y, 0 +this.size/2, height - this.size/2);
  }

//  Bounce if hit borders
  bounce(){
    if (this.x - this.size < 0 || this.x + this.size >width){
      this.vx = -this.vx;
    }
    if (this.y - this.size < 0 || this.y + this.size >height){
      this.vy = -this.vy;
    }
  }
// Display tiny black orbs
  display(){
    // if (this.active === true)
    push();
   stroke(200);
   strokeWeight(1);
   fill(50);
     if (this.size >= 16 && this.size <= 17) {
     fill(100);
     }
     else if (this.size >= 45) {
     stroke(237,201,81);
     fill(0);

     }
   ellipse(this.x,this.y,this.size);

   pop();
  }
}
