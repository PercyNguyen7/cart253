"use strict";
// Balls
let balls = [];
// let balls2 = [];


// F-minor
let notes = [`D5`, `F5`, `D6`,`D5`, `F5`, `D6`,
              `E6`, `F6`, `E6`, `F6`,`E6`, `C6`, `A6`,
              `A6`, `D5`, `F5`,`G5`, `A6`,
              `A6`, `D5`, `F5`,`G5`,`E5`,
              `D5`, `F5`, `D6`,`D5`, `F5`, `D6`,
              `E6`, `F6`, `E6`, `F6`,`E6`, `C6`, `A6`,
              `A6`, `D5`, `F5`,`G5`, `A6`,
              `A6`, `D5`];
let currentNote = 0;
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

// remove ball if out of display
      if (ball.y > 600){
        balls.splice(i, 1);
          break;
      }
  }


  rect(0,410, width,10);
  }
  // for (let i = 0; i < balls2.length; i++){
  //     let ball2 = balls2[i];
  //     ball2.move();
  //     ball2.bounce();
  //     ball2.display();
  // }


function mousePressed(){
  createBall(mouseX,mouseY);
  // createBall2(mouseX,mouseY);
}


function createBall(x,y){
  let note = notes[currentNote];
  currentNote += 1;
  if(currentNote === notes.length){
    currentNote = 0;
}
  let ball = new Ball(x,y,note);
  balls.push(ball);
}

// function createBall2(x,y){
//   let note2 = random(notes);
//   let ball2 = new Ball2(x,y,note2);
//   balls2.push(ball2);
// }
