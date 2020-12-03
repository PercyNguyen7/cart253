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
    this.size = 20;

    this.speed =20;
//  Heart and Chaser speed 20 & 3,6
    userHeart2.size = 200;
    userHeart2.speed = 7;
    userHeart2.size2 = 50;
    userHeart2.speed2 = 3;
    let change = random(0, 1);
      if (change < 0.05) {
        this.vx = random(-this.speed, this.speed);
        this.vy = random(-this.speed, this.speed);
      }
  }
//                                 TIME STOP TRUE
   if (this.tstop === true){
    this.size = 50;
    this.speed =3;

//  Heart and Chaser speed 20 & 3,6
    userHeart2.size = 30;
    userHeart2.speed = 20;
    userHeart2.size2 = 450;
    userHeart2.speed2 = 0;

     let change = random(0, 1);
       if (change < 1) {
    this.vx = random(-this.speed, this.speed);
    this.vy = random(-this.speed, this.speed);
    }
  }

  // if (this.tstop ===true){
  //   // let change = random(0,1);
  //   //   if(change <0.001){
  //   //     this.vx = random(-this.speed, this.speed);
  //   //     this.vy = random(-this.speed, this.speed);
  //   //   }
  // this.speed = 0;
  // }


  this.x += this.vx;
  this.y += this.vy;

  this.x = constrain(this.x, 0+ this.size/2, width - this.size/2);
  this.y = constrain(this.y, 0 +this.size/2, height - this.size/2);
}

//Bounce if hit borders
bounce(){
  if (this.x - this.size < 0 || this.x + this.size >width){
    this.vx = -this.vx;
  }
  if (this.y - this.size < 0 || this.y + this.size >height){
    this.vy = -this.vy;
  }
}



display(){
  if (this.active === true)
  push();
 stroke(230);
 strokeWeight(1);
 fill(0);
 ellipse(this.x,this.y,this.size);
 pop();
}

}
