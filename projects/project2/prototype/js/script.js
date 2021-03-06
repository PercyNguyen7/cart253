"use strict";
//                                               VARIABLES
let user;

let tiles = [];
let numTiles = 100;


let state = `title`;
//                                                 SETUP
function setup() {
  createCanvas(1500, 700);

  user = new User;
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
//                                                    3rd COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 400;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                    4rd COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 500;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                       5th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 600;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                      6th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 700;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                    7th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 800;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                   8th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 900;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                     9th COLUMN
    for (let i = 0; i < numTiles; i++) {
      let x = 1000;
      let y = -100;
      for (let j = 0; j < 7; j++) {
        y = y + 100;

      let tile = new Tile(x, y,color);
      tiles.push(tile);
      }
    }
//                                                    10th COLUMN
    for (let i = 0; i < numTiles; i++) {
      let x = 1100;
      let y = -100;
      for (let j = 0; j < 7; j++) {
        y = y + 100
      let tile = new Tile(x, y,color);
      tiles.push(tile);
      }
    }
//                                                    11th COLUMN
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
    if (state ===`title`){
      title();
    }
    if (state ===`gameplay`){
      gameplay();
    }
    if (state === `lose`){
      loseEnding();
    }
    if(state ===`win`){
      winEnding();
    }
}
//                                                 TITLE STATE
function title(){
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
//                                                GAMEPLAY STATE
function gameplay(){
//                                               TILE FUNCTIONS
  for (let i = 0; i < tiles.length; i++) {
    let tile = tiles[i];
      tile.display();
      tile.colorchange();

      }

//                                              USER FUNCTIONS
  user.move();
  user.display();
  user.badpath();
  user.goodpath();
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
  if (state === `title`){
   state = `gameplay`;
  }
}
