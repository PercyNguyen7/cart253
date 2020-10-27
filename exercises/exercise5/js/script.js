"use strict";

let gravityForce = 0.0020;

let paddle;
let paddle2;

let balls = [];
let numBalls = 10;

let balls2 = []
let numBalls2 = 10;

function setup() {
  createCanvas(1500, 700);

  paddle = new Paddle(200, 20);
  paddle2 = new Paddle2(200, 20);

  for (let i = 0; i < numBalls; i++) {
    let x = random(width/2 + 50, width);
    let y = random(-400, -100);
    let ball = new Ball(x, y);
    balls.push(ball);
  }

  for (let i = 0; i < numBalls2; i++) {
    let x = random(0, width/2 - 50);
    let y = random(-400, -100);
    let ball2 = new Ball2(x, y);
    balls2.push(ball2);
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
  for (let i = 0; i < balls2.length; i++) {
    let ball2 = balls2[i];
    if (ball2.active) {
      ball2.gravity(gravityForce);
      ball2.move();
      ball2.bounce(paddle,paddle2);
      ball2.display();
    }
  }
}
