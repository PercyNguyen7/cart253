"use strict";

let gravityForce = 0.0025;

let paddle;
let paddle2;

let balls = [];
let numBalls = 10;

function setup() {
  createCanvas(1500, 700);

  paddle = new Paddle(200, 20);
  paddle2 = new Paddle2(200, 20);

  for (let i = 0; i < numBalls; i++) {
    let x = random(0, width);
    let y = random(-400, -100);
    let ball = new Ball(x, y);
    balls.push(ball);
  }
}

function draw() {
  background(0);

  paddle.move();
  paddle.display();

  paddle2.move();
  paddle2.display();

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(paddle,paddle2);
      ball.display();
    }
  }
}
