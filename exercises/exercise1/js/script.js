/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let bg = {
  r: 0,
  g:0,
  b:0,
}
let circle1 = {
  x:0,
  y:100,
  size:50,
  growthRate:0.3,
  speed: 1,
  fill:255,
  alpha:180,
}

let rectangle1 = {
  x:500,
  y:325,
  width:100,
  height:250,
  speed: -1,
  fill: 255,
  alpha:180
}

let square1= {
  size: 30,
  r: 255,
  g:102,
  b:178,
  alpha:255
}



// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500)
  stroke(153,0,153)
  strokeWeight(2)

}

// draw()
//
// Description of draw() goes here.
function draw() {

//Background
  background(bg.r, bg.g, bg.b);
  bg.r = map(circle1.size,50,width/4,0,153);
  bg.g = map(circle1.size,50,width/4,0,50);
  bg.b = map(circle1.size,50,width/4,0,204);

//Left circle
circle1.x = circle1.x + circle1.speed;
circle1.x = constrain(circle1.x,0, width/2,width);
circle1.size = circle1.size + circle1.growthRate;
circle1.size = constrain(circle1.size,0,width/4);
fill(circle1.fill,circle1.alpha)
ellipse(circle1.x, circle1.y, circle1.size);

//Right rectangle
rectangle1.x= rectangle1.x + rectangle1.speed;
rectangle1.x = constrain(rectangle1.x, width/2,width);
fill(rectangle1.fill, rectangle1.alpha)
rectMode(CENTER);
rect(rectangle1.x, rectangle1.y,rectangle1.width, rectangle1.height)

//square with mouse
fill(square1.r, square1.g, square1.b)
square(mouseX,mouseY,square1.size)

}
