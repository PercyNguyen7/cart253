"use strict";

// Our user, to move with the mouse
let user = {
  x: 0,
  y: 0,
  size: 50,
};

// Food objects
let star;

function setup() {
  createCanvas(windowWidth, 750);
}

function draw() {
  background(8, 43, 99);

  // Move the user (with the mouse)
  moveUser();

  // Check whether the user has eaten either food

  // Display the user and foods
  displayUser();
  displayGround();
}

// Sets the user position to the mouse position
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
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

function displayGround() {
  push();
  fill(9, 24, 20);

  rect(0, 600, width, 150);
}
