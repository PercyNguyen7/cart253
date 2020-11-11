"use strict";

// The microphone
let mic;

function setup() {
  createCanvas(600, 600);

  // Create our AudioIn object
  mic = new p5.AudioIn();
  // Try to connect to the user's microphone
  mic.start();
}

function draw() {
  background(0);

  // Get the current level of sound going into the microphone
  let level = mic.getLevel();

  // Visualize the level as a circle's size
  let size = map(level, 0, 1, 0, width);
  push();
  fill(255, 0, 0);
  noStroke();
  ellipse(width / 2, height / 2, size);
  pop();


  console.log(level)
}
