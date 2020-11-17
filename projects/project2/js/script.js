"use strict";
//                                               VARIABLES
let userreject;

//                                               IMAGE
let userrejectImage;

let tiles = [];
let numTiles = 100;

//                                                STATE
let state = `clickbegin`;
//                                          PRELOAD
function preload() {
  userrejectImage = loadImage(`assets/images/userreject.png`);
}

//                                                     SETUP
function setup() {
  createCanvas(1500, 700);
  //                                                 REJECTION PATH
  userreject = new UserReject(userrejectImage);
  //                                                  RED TILES
  //                                                  1st COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 200;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100
      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  2nd COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 300;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  3rd COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 400;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  4rd COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 500;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  5th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 600;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  6th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 700;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  7th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 800;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  8th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 900;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  9th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 1000;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  10th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 1100;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100
      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  11th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 1200;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100
      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
}
//                                                DRAW
function draw() {
  background(50);
  if (state === `clickbegin`) {
    clickbegin();
  }
  if (state === `title`) {
    title();
  }
  if (state === `instructions`) {
    instructions();
  }
  if (state === `context`) {
    context();
  }
  if (state === `decision`) {
    decision();
  }
  if (state === `acceptp`) {
    acceptp();
  }
  if (state === `rejectp`) {
    rejectp();
  }
  if (state === `rejectionintro`) {
    rejectionintro();
  }
  if (state === `rejminigame`) {
    rejminigame();
  }
  if (state === `lose`) {
    badrejectionEnd();
  }
  if (state === `win`) {
    goodrejectionEnd();
  }
}
//                                                  GAME INTRO
function clickbegin() {
  background(0);
  push();
  textSize(64)
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(80);
  text(`Press any key to begin`, width / 2, height / 2);
  pop();
}
//                                                     TITLE
function title() {
  background(50);
  push();
  textSize(64)
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(80);
  text(`Proposal Day`, width / 2, height / 2);
  pop();
}
//                                                    INTRODUCTION
function instructions() {
  background(100);
  push();
  textSize(64)
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(80);
  text(`Instructions`, width / 2, height / 2);
  pop();
}
//                                                     CONTEXT
function context() {
  background(150);
  push();
  textSize(64);
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(100);
  text(`context`, width / 2, height / 2);
  pop();
}
//                                                       DECISION
function decision() {
  background(0);
  push();
  textSize(64);
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(100);
  text(`Decision`, width / 2, height / 2);
  textSize(40);
  text(`A. Accept`, width / 3, 3*height / 4);
  text(`R. Reject`, 2*width / 3, 3*height / 4);
  pop();
}
//                                                ACCEPT PATH
function acceptp(){
  background(0,0,255);
  push();
  textSize(64);
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(100);
  text(`ACCEPTED`, width / 2, height / 2);
  pop();
}
//                                                  REJECTION PATH
function rejectp(){
  background(255,0,0);
  push();
  textSize(64);
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(100);
  text(`REJECTED`, width / 2, height / 2);
  pop();
}
function rejectionintro() {
  background(69, 29, 87);
  push();
  textSize(64)
  noFill();
  stroke(250, 186, 95);
  textAlign(CENTER, CENTER);
  textSize(80);
  text(`Go through`, width / 2, height / 2 - 100);
  textSize(70);
  text(`Find the secret path`, width / 2, height / 2 - 20);
  textSize(50);
  text(`Press any key to BEGIN`, width / 2, height / 2 + 100);
  textSize(40);
  text(`Control with Arrow Keys`, width / 2, height / 2 + 150);
  pop();
}
//                                                   rejminigame STATE
function rejminigame() {
  //                                                REJECTIOn MINIGAME FUNCTIONS
  //                                                   TILE FUNCTIONS
  for (let i = 0; i < tiles.length; i++) {
    let tile = tiles[i];
    tile.display();
    tile.colorchange();
  }
  //                                                USERREJECT FUNCTIONS
  userreject.move();
  userreject.display();
  userreject.badpath();
  userreject.goodpath();
  //                                                DESTINATION RECTANGLES
  rect(1300, 0, 100, 700);
}

//                                                  ALL ENDING STATES
//                                                 REJECTION ENDINGS


//                                                   BAD REJECTIOn ENDING
function badrejectionEnd() {
  background(255, 40, 40);
  push();
  textSize(64)
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(80);
  text(`You Lost`, width / 2, height / 2);
  pop();
}
//                                                    GOOD REJECTIOn ENDING
function goodrejectionEnd() {
  background(125);
  push();
  textSize(64)
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(120);
  text(`YOU WON`, width / 2, height / 2);
  pop();
}
//                                                     KEYPRESSED FUNCTION
function keyPressed() {
  if (state === `rejectionintro`) {
    state = `rejminigame`;
  } else if (state === `clickbegin`) {
    state = `title`;
  } else if (state === `title`) {
    state = `instructions`;
  } else if (state === `instructions`) {
    state = `context`;
  } else if (state === `context`) {
    state = `decision`;
  } else if (state === `decision` && keyCode === 65) {
    state = `acceptp`;
  } else if (state === `decision` && keyCode === 82) {
    state = `rejectp`;
  } else if (state === `rejectp`){
    state = `rejectionintro`;
  }
}
