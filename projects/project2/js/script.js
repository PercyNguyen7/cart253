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
function preload(){
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
  let tile = new Tile(x, y,color);
  tiles.push(tile);
  }
}
//                                                  2nd COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 300;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                  3rd COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 400;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                  4rd COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 500;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                  5th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 600;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                  6th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 700;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                  7th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 800;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                  8th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 900;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                  9th COLUMN
    for (let i = 0; i < numTiles; i++) {
      let x = 1000;
      let y = -100;
      for (let j = 0; j < 7; j++) {
        y = y + 100;

      let tile = new Tile(x, y,color);
      tiles.push(tile);
      }
    }
//                                                  10th COLUMN
    for (let i = 0; i < numTiles; i++) {
      let x = 1100;
      let y = -100;
      for (let j = 0; j < 7; j++) {
        y = y + 100
      let tile = new Tile(x, y,color);
      tiles.push(tile);
      }
    }
//                                                  11th COLUMN
    for (let i = 0; i < numTiles; i++) {
      let x = 1200;
      let y = -100;
      for (let j = 0; j < 7; j++) {
        y = y + 100
      let tile = new Tile(x, y,color);
      tiles.push(tile);
      }
    }
}

//                                                DRAW
function draw() {
    background(50);
    if (state ===`clickbegin`){
      clickbegin();
    }
    if (state ===`title`){
      title();
    }
    if (state === `instructions`){
      instructions();
    }
    if (state ===`rejectionintro`){
      rejectionintro();
    }
    if (state ===`rejminigame`){
      rejminigame();
    }
    if (state === `lose`){
      loseEnding();
    }
    if(state ===`win`){
      winEnding();
    }
}
//                                                  GAME INTRO
function clickbegin(){
  background(0);
  push();
  textSize(64)
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(80);
  text(`Press any key to begin`, width / 2, height/2);
  pop();
}
function title(){
  background(50);
  push();
  textSize(64)
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(80);
  text(`Proposal Day`, width / 2, height/2);
  pop();
}
function instructions(){
  background(100);
  push();
  textSize(64)
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(80);
  text(`Instructions`, width / 2, height/2);
  pop();
}

//                                                 rejectionintro STATE
function rejectionintro(){
background(69,29,87);
push();
textSize(64)
noFill();
stroke(250,186,95);
textAlign(CENTER, CENTER);
textSize(80);
text(`Go through`, width / 2, height/2 - 100);
textSize(70);
text(`Find the secret path`, width / 2, height/2 - 20);
textSize(50);
text(`Press any key to BEGIN`, width / 2, height/2 + 100);
textSize(40);
text(`Control with Arrow Keys`, width / 2, height/2 + 150);
pop();
}
//                                                rejminigame STATE
function rejminigame(){
//                                          REJECTIOn MINIGAME FUNCTIONS
//                                               TILE FUNCTIONS
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
//                                                   LOSE ENDING
function loseEnding(){
  background(255,40,40);
  push();
  textSize(64)
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(80);
  text(`You Lost`, width / 2, height/2);
  pop();
}
//                                                    WIN ENDING
function winEnding(){
  background(125);
  push();
  textSize(64)
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(120);
  text(`YOU WON`, width / 2, height/2);
  pop();
}
//                                                     KEYPRESSEED
function keyPressed(){
  if (state === `rejectionintro`){
    state = `rejminigame`;
  }
  else if (state ===`clickbegin`){
    state = `title`;
  }
  else if (state === `title`){
    state = `instructions`;
  }
}
