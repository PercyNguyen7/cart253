class Timer2{
  constructor(){

    this.size = 50;
    this.size2 = 50;
// 1st timer ball for 3rd minigame (magic phrase)
    this.x = width/4 - 100;
    this.y = 0-this.size/2;
    this.vx = 0;
    this.vy = 1;


    this.fill= {
      r : 255,
      g : 255,
      b : 255,
    }
// 2nd timer ball for 3rd minigame (magic phrase)
    this.x2 = 3*width/4 + 100;
    this.y2 = 0-this.size2/2;
    this.vx2 = 0;
    this.vy2 = 1;

  }
touchbottom(){
  if (this.y - this.size/2 > height){
    state = `heleftEnd`;
    acceptmusic.stop();
    loseSFX.play();
  }
}

move(){
  this.y += this.vy;
  this.y2 += this.vy2;
}

display(){
  push();
  noStroke();
  let r = map(this.y,0,height,0,220);
  let g = map(this.y,0,height,0,30);
  let b = map(this.y,0,height,0,30);
  fill(r,g,b);
  ellipse(this.x, this.y, this.size);
  ellipse(this.x2, this.y2, this.size2);
  pop();
}


}
