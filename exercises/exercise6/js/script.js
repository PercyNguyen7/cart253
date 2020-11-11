"use strict";
// Balls
let balls = [];
let balls2 = [];


// F-minor
let notes = [`F3`,`G3`, `Ab4`, `Bb4`, `C4`, `Db4`,`Eb4`,`F4`];
let notes2 = [`G3`];
function setup(){
  createCanvas(600,600);

  userStartAudio();
}

function draw(){
  background(0);

  for (let i = 0; i < balls.length; i++){
      let ball = balls[i];
      ball.move();
      ball.bounce();
      ball.display();
  }
  for (let i = 0; i < balls2.length; i++){
      let ball2 = balls2[i];
      ball2.move();
      ball2.bounce();
      ball2.display();
  }
}

function mousePressed(){
  createBall(mouseX,mouseY);
  createBall2(mouseX,mouseY);
}


function createBall(x,y){
  let note = random(notes);
  let ball = new Ball(x,y,note);
  balls.push(ball);
}

function createBall2(x,y){
  let note2 = random(notes2);
  let ball2 = new Ball2(x,y,note2);
  balls2.push(ball2);
}
