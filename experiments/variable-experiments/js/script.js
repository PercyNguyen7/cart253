/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let backgroundShade = (250,202,220) ;
let circleX = 250
let circleY = 250
let circleSize = 200
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(backgroundShade);
  circleSize = circleSize * 1.01;
  circleY = circleY / 1.01;
  ellipse(circleX, circleY, circleSize)
}
