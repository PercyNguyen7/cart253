class Ball{

  constructor(x,y,note){
  this.x=x;
  this.y=y;
  this.size=50;
  this.fill={
    r: 255,
    g: 0,
    b:0,
    };
  this.speed = 3;
  this.vy= this.speed;

//oscillator
  // this.oscillator = new p5.Oscillator();
  // this.nearFreq = 100;
  // this.farFreq = 250;
  // this.oscillator.amp(0.1);
  // this.oscillator.start();

  //synth
  this.note = note;
  this.synth = new p5.PolySynth();
  }

  move(){
    // this.x += this.vx;
    this.y += this.vy;

  }
  bounce(){
    if (this.x + this.size/2 > width){
      // this.vx = -3;
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
   ellipse(this.x,this.y,this.size);
   pop();
 }

}
