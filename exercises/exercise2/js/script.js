/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let covid19 = {
  x:0,
  y:250,
  size:200,
  vx: 0,
  vy: 0,
  speed: 40,
  growth: 5,
  fill: {
    r:255,
    g:0,
    b:0,
  }
};

let user = {
  x:250,
  y:250,
  size: 100,
  vx:0,
  vy:0,
  speed:20,
  fill:255,

};

  let numStatic = 100;
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth,windowHeight);

  covid19.y = random(0,height);
  covid19.vx = covid19.speed;

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(240,128,128);

// Display static

for (let i = 0; i < numStatic; i++) {
  let x = random(0,width);
  let y = random (0,height);
  push();
  stroke(0,255,255);
  strokeWeight(10);
  point(x,y);
  pop();

}
// covid 19 movement
  covid19.x = covid19.x + covid19.vx;
  covid19.y = covid19.y + covid19.vy;

  if (covid19.x > width) {
    covid19.x = 0;
    covid19.y = random(0,height);
  }
let g = dist(covid19.x,covid19.y,user.x, user.y)
  if (g < covid19.size*2 + user.size*2) {
    covid19.size = covid19.size + covid19.growth
    covid19.size = constrain(covid19.size,150,250)
}
else{
  covid19.size = covid19.size - covid19.growth
  covid19.size = constrain(covid19.size,150,250)
}


// //user movement
  if (mouseX < user.x) {
    user.vx = -user.speed;
  }
  else {
    user.vx = user.speed;
  }

  if (mouseY < user.y) {
    user.vy = -user.speed;
  }
  else {
    user.vy = user.speed;
  }
// Check for catching covid19
let d = dist(user.x, user.y,covid19.x,covid19.y);
if (d < covid19.size/2 + user.size/2) {
  noLoop();
}

//display covid19
  fill(covid19.fill.r,covid19.fill.g,covid19.fill.b);
  ellipse(covid19.x,covid19.y,covid19.size);

//display user
user.x = user.x + user.vx;
user.y = user.y + user.vy;

fill(user.fill);
ellipse(user.x,user.y,user.size);
}
