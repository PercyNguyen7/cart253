"use strict";
//                  Balls ARRAY
let balls = [];
//                   STORM SFX
let stormSFX;

//                  IMAGE LOAD
let stormImage;
function preload() {
  stormImage = loadImage(`assets/images/storm.jpg`);

  stormSFX = loadSound(`assets/sounds/storm.mp3`);
}
let state = `title`;

// Song of Storms
let notes = [`D5`, `F5`, `D6`,`D5`, `F5`, `D6`,
              `E6`, `F6`, `E6`, `F6`,`E6`, `C6`, `A6`,
              `A6`, `D5`, `F5`,`G5`, `A6`,
              `A6`, `D5`, `F5`,`G5`,`E5`,
              `D5`, `F5`, `D6`,`D5`, `F5`, `D6`,
              `E6`, `F6`, `E6`, `F6`,`E6`, `C6`, `A6`,
              `A6`, `D5`, `F5`,`G5`, `A6`,
              `A6`, `D5`, `A`];
let currentNote = 0;
function setup(){
  createCanvas(600,600);

  userStartAudio();
}

function draw(){
  background(0);

  if (state === `title`) {
    title();
  }

  if (state === `gameplay`) {
    gameplay();
    stormSFX.play();
  }

  if (state === `storm`){
    storm();
  }
}

//                                      STATES
function title(){
  background(0,19,36);

  push();
  noStroke();
             // ground
  fill(3,90,30);
  rect(0,410, width,200);
  textSize(64)
  fill(220, 212, 69);
  textAlign(CENTER, CENTER);
  textSize(60);
  text(`Song of Storms`, width / 2, 200);
  textSize(20);
  text(`Click anywhere in the dark blue area to begin`, width / 2, 250);

  pop();
}
//                                    GAMEPLAY STATE
function gameplay(){
//                                 BALL ARRAY
  for (let i = 0; i < balls.length; i++){
      let ball = balls[i];
      ball.move();
      ball.bounce();
      ball.display();

// remove ball if out of display
      if (ball.y > 600){
        balls.splice(i, 1);
          break;
      }
    }
//  BACKGROUND
  push();
  fill(4,38,100,200);
  rect(0,410, width,10);
  fill(4,38,100,150);
  rect(0,450, width,30);
  fill(4,38,100,100);
  rect(0,510, width,50);
  pop();

}

//                                    STORM
function storm(){
  image(stormImage,0,0,600,600);
}

//                                        Mouse PRESSED
function mousePressed(){
    if (state ===`title`){
      state = `gameplay`;
    }
    if (state === `gameplay`) {
       createBall(mouseX,mouseY);
     }
}

//                                              create ball
function createBall(x,y){
  let note = notes[currentNote];
  currentNote += 1;
  if(currentNote === notes.length){
    state = `storm`
}
  let ball = new Ball(x,y,note);
  balls.push(ball);
}
