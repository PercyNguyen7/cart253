class Timer1{
  constructor() {
    this.x = 130;
    this.y = height;
    this.vy = 0;
    this.size = 100;
    this.x2 = 1370;
    this.y2 = 0;
    this.vy2 = 0;


    this.x3 = -15;
    this.y3 = height/2 ;
    this.vx3= 30;
    this.vy3= 0;

    this.size3 = 30;
    this.counter = 0;
    this.fill= {
      r : 0,
      g : 0,
      b : 0,
    }
  }

  ballsmove(){
                              // 2 BALLS
    this.y2 += this.vy2;
    this.y += this.vy;
    //LEFT BALL
    if (this.y >= height - this.size/2){
      this.vy = -40;
    }
    if (this.y <= 0 + this.size/2){
      this.vy = 10;
    //RIGHT BALL
    }
    if (this.y2 >= height - this.size/2){
      this.vy2 = -10
    }
    if (this.y2 <= 0 + this.size/2){
      this.vy2 = 40;
    }
                            //TIMER BALL
    this.x3 += this.vx3;
    this.y3 += this.vy3;

    if (this.x3 >= 400 && this.x3 <= 600){
      this.vy3 = -40;
    }
    else if (this.x3 > 600 && this.x3 <=900){
      this.vy3 = 60;
    }
    else if (this.x3 >900 && this.x3 <=1100){
      this.vy3 = -40;
    }
    else if (this.x3 > 1100 && this.x3 <= 1500){
      this.vy3 = 0;
    }
    else if (this.x3 > width){
      this.x3 =-15;
      this.y3 = height/2;
      this.counter += 1;
    }
  //                                          OSCILLATOR CONDITIONS
    if (this.x3 > 730 && this.x3 < 740){
      oscillator.start();
      }

    if (this.x3 > 800){
      oscillator.stop();
    }
    //                                          COUNTER CONDITIONS
    if (this.counter >= 3){
      this.fill ={
        r:40,
        g:0,
        b:2,
      }
    }
    if (this.counter >= 6){
      this.fill ={
        r:70,
        g:0,
        b:4,
      }
    }
    if (this.counter >= 9){
      this.fill ={
        r:90,
        g:0,
        b:4,
      }
    }
    if (this.counter >= 12){
      this.fill ={
        r:110,
        g:1,
        b:5,
      }
    }
    if (this.counter >= 15){
      this.fill ={
        r:140,
        g:1,
        b:6,
      }
      userHeart.speed = 13;
      userHeart.rspeed = 10;
      this.vx3 = 70;

    }

    if (this.counter >= 25){
      state = `acpminiwin1`;
    }



  }

  display(){
    push();
    noStroke();
    fill(this.fill.r,this.fill.g,this.fill.b);
    ellipse(this.x, this.y, this.size);
    ellipse(this.x2, this.y2, this.size);
    // timer ball
    ellipse(this.x3,this.y3, this.size3);
    pop();
  }
}
