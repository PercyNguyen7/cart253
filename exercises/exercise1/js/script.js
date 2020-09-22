/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let circle1 = {
  x:0,
  y:100,
  size:50,
  growthRate:1,
  speed: 1,
  fill:255,
  alpha:200,
}

let rectangle1 = {
  x:500,
  y:250,
  size: 75,
  speed: -1,
  fill: 255,
  alpha:200
}

let square1= {
  x:500,
  y:250,
  size: 75,
  speed: 1,
  fill: 255,
  alpha:200
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
  background(mouseX, mouseY, 0);
  rectMode(CENTER)
  rect(250,250,100,100)

}
