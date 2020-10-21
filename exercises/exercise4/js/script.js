"use strict";

// Our user, to move with the mouse
let user = {
  x: 0,
  y: 0,
  size: 50,

};
let moon = {
  x:0,
  y:0,
  size:100,
  vx:1,
  vy:0.5,
}
let school = [];
let schoolSize = 15;

// let star1;
// let star2;
// let star3;

function setup() {
  createCanvas(windowWidth, 750);

  for (let i = 0; i < schoolSize; i++) {
    let star = createStar(random(0, width), random(0, 600));
    school.push(star);
  }
}
function createStar(x, y) {
  let star = {
    x: x,
    y: y,
    size: 15,
    vx: 0,
    vy: 0,
    speed: 15,
    caught: false
  };
  return star;
}
function draw() {
  background(34, 64, 123);





  for (let i = 0; i < schoolSize; i++) {
      moveStar(school[i]);
      sparkleStar(school[i]);
      displayStar(school[i]);
      checkStar(school[i])
    }

    //move moon
  moveMoon();

  // Display the moon and ground
  displayMoon();
  displayGround();

  // Move the user (with the mouse)
  moveUser();
  //Display the user
  displayUser();
}
// Check if the user overlaps the Stars
function checkStar(star){
  if (!star.caught){
    let d = dist(user.x,user.y,star.x, star.y);
    if (d < user.size/2 + star.size/2){
      star.caught=true;
    }
  }
}

//Move stars at random speed at random direction
function moveStar(star) {
  let change = random(0, 1);
  if (change < 0.05) {
    star.vx = random(-star.speed, star.speed);
    star.vy = random(-star.speed, star.speed);
  }

//Stars change direction if bumped against borders
  if (star.x === 0 || star.x === width || star.y === 0 || star.y === 600) {
    star.vx = random(-star.speed, star.speed);
    star.vy = random(-star.speed, star.speed);
  }
  star.x += star.vx;
  star.y += star.vy;

  star.x = constrain(star.x, 0, width);
  star.y = constrain(star.y, 0, 600);
}

function sparkleStar(star) {
  let change = random(0, 1);
  if (change < 0.5) {
    star.size = random(4, 20);
  }
}

//move moon left to right
function moveMoon(){
  if (moon.x < width/2){
    moon.x += moon.vx;
    moon.y += moon.vy;

    moon.size +=0.1
  }
  if (moon.x >= width/2){
    moon.x += moon.vx;
    moon.y += -moon.vy;

    moon.size -=0.1
  }

  moon.size= constrain(moon.size,100,200);
}


// Sets the user position to the mouse position
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;

  user.x = constrain(user.x, 0, width);
  user.y = constrain(user.y, 0, 600);
}

// Draw the user as a circle
function displayUser() {
  push();
  stroke(253, 232, 85);
  strokeWeight(3);
  noFill();
  ellipse(user.x, user.y, user.size);
  pop();
}

function displayStar(star) {
  push();
  stroke(253, 232, 85);
  strokeWeight(1);
  fill(253, 232, 85);

  if (star.size >= 4 && star.size < 9) {
    fill(255, 101, 138);
  }
  if (star.size >= 9 && star.size < 14) {
    fill(255, 182, 171);
  }
  ellipse(star.x, star.y, star.size);
  pop();
}
function displayMoon(){
  push();
  fill(233);
  ellipse(moon.x, moon.y, moon.size);
  pop();
}

function displayGround() {
  push();
  fill(9, 24, 20);
  rect(0, 600, width, 150);
  pop();
}
