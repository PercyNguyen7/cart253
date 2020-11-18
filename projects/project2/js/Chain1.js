class Chain1{
  constructor(chain1Image){
    this.x = 300;
    this.y = height/2;
    this.width = 50;
    this.height = 750;
    this.image = chain1Image;
  }

  display(){
    push();

    // translate(300,-30);

    imageMode(CENTER);
    image(chain1Image, this.x, this.y, this.width,this.height)
    image(chain1Image, width-300, this.y, this.width,this.height)
    angleMode(DEGREES);
    push();
    translate(width/2,50);
    rotate(90);
    image(chain1Image,0, 0, 50,860)
    pop();
    translate(width/2,height-50);
    rotate(90);
    image(chain1Image,0, 0, 50,860)
    pop();
  }
}
