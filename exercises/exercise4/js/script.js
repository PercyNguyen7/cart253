"use strict";

// Our user, to move with the mouse
let user = {
  x: 0,
  y: 0,
  size: 50,
};

let star1;
let star2;
let star3;

function setup() {
  createCanvas(windowWidth, 750);

  star1 = createStar(random(0, width), random(0, 600));
  star2 = createStar(random(0, width), random(0, 600));
  star3 = createStar(random(0, width), random(0, 600));
}
function createStar(x, y) {
  let star = {
    x: x,
    y: y,
    size: 15,
    vx: 0,
    vy: 0,
    speed: 2,
  };
  return star;
}
function draw() {
  background(8, 43, 99);

  // Move the user (with the mouse)
  moveUser();
  // moveStar(star1);
  // moveStar(star2);
  // moveStar(star3);

  // Check whether the user has eaten either food

  // Display the user and foods
  displayUser();

  displayStar(star1);
  displayStar(star2);
  displayStar(star3);

  displayGround();
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
  ellipse(star.x, star.y, star.size);
  pop();
}

function displayGround() {
  push();
  fill(9, 24, 20);
  rect(0, 600, width, 150);
  pop();
}
