class Ball{

  constructor(x,y,note){
  this.x=x;
  this.y=y;
  this.size=10;
  this.fill={
    r: 0,
    g: 120,
    b:200,
    };
  this.speed = 10;
  this.vy= this.speed;

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

      // this.playNote();
    }
  }

//   playNote(){
//     this.synth.play(this.note,1,0,0.5);
// }

  display(){

   noStroke();
   push();
   fill(this.fill.r,this.fill.g,this.fill.b);
   if (this.y >= 430){

   let g = map(this.y,120,0,410,height);
   let b = map(this.y,200,0,410,height);

   fill(this.fill.r,g,b);

  }

   ellipse(this.x,this.y,this.size,40);
   pop();

 }
}
