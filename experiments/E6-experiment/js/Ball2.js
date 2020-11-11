class Ball2{

  constructor(x,y,note){
  this.x=x;
  this.y=y;
  this.size=50;
  this.fill={
    r: 0,
    g: 0,
    b:255,
    };
  this.speed = 3;
  this.vx=random(-this.speed,this.speed);
  this.vy= random(-this.speed,this.speed);

//oscillator
  this.oscillator = new p5.Oscillator();
  this.nearFreq = 400;
  this.farFreq = 850;
  this.oscillator.amp(0.1);
  this.oscillator.start();

  //synth
  this.note = note;
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
      this.playNote();
    }

    if (this.y - this.size/2 < 0 || this.y + this.size/2 >height){
      this.vy = -this.vy;
      this.playNote();
    }
  }

  playNote(){
    this.synth.play(this.note,0.2,0,0.1);
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
