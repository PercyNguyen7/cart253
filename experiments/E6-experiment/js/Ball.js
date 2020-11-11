class Ball{

  constructor(x,y,note){
  this.x=x;
  this.y=y;
  this.size=30;
  this.fill={
    r: 255,
    g: 0,
    b:0,
    };
  this.speed = 5;
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
    this.y += this.vy;


  }
  bounce(){
    if (this.y + this.size/2 >= 410 && this.y + this.size/2 <=420 ){
      this.vy = 1;

      circle.fill = map(this.fill.r,255,0,410,height);

      this.playNote();
    }
  }

  playNote(){
    this.synth.play(this.note,5,0,0.1);

}
  display(){



   noStroke();
   push();
   fill(this.fill.r,this.fill.g,this.fill.b);
   if (this.y >= 410){

   let r = map(this.y,255,0,410,height+150);
   fill(r,this.fill.g,this.fill.b);
  }

   ellipse(this.x,this.y,this.size);
   pop();



 }
}
