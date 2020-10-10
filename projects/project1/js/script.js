let circle1 = {
  x:500,
  y:500,
  size:50,
  vx:0,
  vy:0,
  speed:1,
};
// setup()
//
// Description of setup() goes here.
let state = `title`;

function setup() {
  createCanvas(1000,600);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(45,21,56)

  if (state === `title`){
    title();
  }
  else if (state === `firstday`){
    firstday();
  }




}

function title(){
  push();
  textSize(50)
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`Propose Day`,width/2,height/2 -50)
  textSize(30)
  text(`Press any key...`,width/2,height/2 +50)
  pop();
}

function firstday(){
  display();

}





function display(){
  fill(255)
  ellipse(circle1.x, circle1.y, circle1.size);
}
function keyPressed(){
  if (state === `title`){
    state = `firstday`;
  }
}
