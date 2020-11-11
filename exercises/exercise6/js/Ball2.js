class Ball2{

  constructor(x,y,note2){
  this.x=x;
  this.y=y;
  this.size=50;
  this.fill={
    r: random(200,255),
    g: random(200,255),
    b:random(200,255),
    };
  this.speed = 5;
  this.vx= this.speed;
  this.vy= this.speed;

//oscillator
  this.oscillator2 = new p5.Oscillator();
  this.nearFreq = 50;
  this.farFreq = 100;
  this.oscillator2.amp(0.1);
  this.oscillator2.start();

  //synth
  this.note = note2;
  this.synth = new p5.PolySynth();
  }

  move(){
    this.x += this.vx;
    this.y += this.vy;

    let d = dist(this.x,this.y,width/2,height/2);
    let maxDist = dist(0,0,width/2,height/2);
    let newFreq = map(d,0,maxDist,this.nearFreq,this.farFreq);
    this.oscillator.freq(newFreq);
  }
  bounce(){
    if (this.x  - this.size/2 < 0 || this.x + this.size/2 >width){
      this.vx = -this.vx;
      this.playNote2();
    }

    if (this.y - this.size/2 < 0 || this.y + this.size/2 >height){
      this.vy = -this.vy;
      this.playNote2();
    }
  }

  playNote2(){
    this.synth.play(this.note,0,2,1.5);
  }

  display(){
   push();
   noStroke();
   fill(this.fill.r,this.fill.g,this.fill.b);
   rectMode(CENTER);
   rect(this.x,this.y,this.size);
   pop();
 }

}
