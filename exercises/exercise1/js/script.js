/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let circle1 = {
  x:0,
  y:100,
  size:50,
  growthRate:0.3,
  speed: 1,
  fill:255,
  alpha:150,
}

let rectangle1 = {
  x:500,
  y:250,
  size: 75,
  speed: -1,
  fill: 255,
  alpha:150
}

let square1= {
  x:500,
  y:250,
  size: 75,
  speed: 1,
  fill: 255,
  alpha:150
}



// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500)
  noStroke();



}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0,mouseY,mouseX);

//Left circle

circle1.x = circle1.x + circle1.speed;
circle1.x = constrain(circle1.x,0, width/2,width);
circle1.size = circle1.size + circle1.growthRate;
circle1.size = constrain(circle1.size,0,width/4);
fill(circle1.fill,circle1.alpha)
ellipse(circle1.x, circle1.y, circle1.size);



  rectMode(CENTER)
  rect(250,250,100,100)

}
