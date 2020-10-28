"use strict";
//                                               VARIABLES
let gameLength = 13 * 1000;

let gravityForce = 0.0020;

let paddle;
let paddle2;

let balls = [];
let numBalls = 30;

let balls2 = []
let numBalls2 = 30;

let state = `title`;
//                                                 SETUP
function setup() {
  createCanvas(1500, 700);

  paddle = new Paddle(200, 20);
  paddle2 = new Paddle2(200, 20);

  for (let i = 0; i < numBalls; i++) {
    let x = random(width/2 + 50, width);
    let y = random(-901, -500);
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
//                                            DRAW
function draw() {
    background(100);
  if (state === `title`) {
    title();
  } else if (state === `game`) {
    game();
  }
  else if (state === `win`) {
    win();
  } else if (state === `lose`) {
    lose();
  }
}
//                                     STATE FUNCTIONS

//                                      TITLE STATE
function title() {
  textFont(`Syne Mono`)
  push();
  textSize(64)
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(80);
  text(`Juggle or Struggle`, width / 2, height/2-50);
  textSize(40);
  stroke(255,50,50);
  text(`Save 2 balls of each color. You've got 13 seconds`, width/2, height/2 +50)
  text(`Click to START`, width/2, height/2 +100)
  stroke(255);
  text(`Controls`, width/2, height-150);
  stroke(255,50,50);
  text(`LEFT`, width/3, height - 100);
  stroke(255);
  text(`A and D`, width/3, height - 50);
  stroke(255,50,50);
  text(`RIGHT`, 2*width/3, height -100);
  stroke(255);
  text(`Move Mouse`, 2*width/3, height -50);

  pop();
  }
//                                          GAMEPLAY
function game(){
  paddle.move();
  paddle.display();

  paddle2.move();
  paddle2.display();

//                                            BALLS
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(paddle,paddle2);
      ball.display();

//                                          REMOVE BALL FROM ARRAY IF OUTSIDE OF DISPLAY
      if (ball.y  > height || ball.x  < 0 || ball.x> width){
        balls.splice(i, 1);
        break;
      }
    }
  }

  //                                           BALLS 2
  for (let i = 0; i < balls2.length; i++) {
    let ball2 = balls2[i];
    if (ball2.active) {
      ball2.gravity(gravityForce);
      ball2.move();
      ball2.bounce(paddle,paddle2);
      ball2.display();
//                                          REMOVE BALL 2 FROM ARRAY IF OUTSIDE OF DISPLAY
      if (ball2.y   > height || ball2.x - ball2.size/2 < 0 || ball2.x + ball2.size/2 > width){
        balls2.splice(i, 1);
        break;
      }
    }
  }
}
//                                               MOUSE PRESED
function mousePressed() {
  if (state === `title`) {
    setTimeout(gameOver, gameLength);
    state = `game`;
  }
  if (state ===`win`){
    location.reload();
  }
  if (state ===`lose`){
    location.reload();
  }
}

//                                              Game Over when time runs out!
function gameOver(){
  if (balls2.length >= 2 && balls.length >= 2) {
    state = `win`;
  }
  else {
    state = `lose`;
  }
}
//                                                     WIN ENDING
function win() {
  background(255);
  push();
  noFill();
  stroke(0);
  textAlign(CENTER, CENTER);
  textSize(80);
  text(`You Won`, width / 2, height/2-100);
  textSize(60);
  text(`But don't feel too good about it`, width / 2, height/2);
  textSize(40);
  text(`The developper made this pretty easy on purpose...`, width / 2, height/2+100);
  textSize(20);
  text(`Click to play again...and potentially lose your honor`, width / 2, height/2+150);
  pop();
}

//                                                      LOSE ENDING
function lose() {
  background(0);
  push();
  noFill();
  stroke(255,0,0);
  textAlign(CENTER, CENTER);
  textSize(120);
  text(`You Lose`, width / 2, height/2-100);
  textSize(40);
  text(`Small Hint`, width / 2, height/2);
  textSize(4);
  text(`Play better next time`, width / 2, height/2+100);
  textSize(40);
  text(`Click to try again...and redeem your honor`, width / 2, height/2+200);
  pop();
}
