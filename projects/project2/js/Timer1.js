class Timer1{
  constructor() {
    this.x = 130;
    this.y = -100;
    this.vy = 20;
    this.size = 100;
    this.x2 = 1370;
    this.y2 = -100;
    this.vy2 = 0;
  }

  move(){
    this.y2 += this.vy2;
    this.y += this.vy;
    this.y = constrain(this.y, -this.size, height + this.size);
    this.y2 = constrain(this.y2, -this.size, height + this.size);

    if (this.y - this.size/2 > height){
      this.vy2 = 20;
    }
    if (this.y2 - this.size/2 > height){
      this.vy = -19;
    }
    if (this.y < 0){
      this.vy2 = -19;
    }
  }

  display(){
    push();
    fill(0);
    ellipse(this.x, this.y, this.size);
    ellipse(this.x2, this.y2, this.size);
    pop();
  }
}
