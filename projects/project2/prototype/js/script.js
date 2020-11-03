"use strict";
//                                               VARIABLES
let user;

let tiles = [];
let numTiles = 100;

// let state = `title`;
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
//

}


//                                            DRAW
function draw() {
    background(100);


//                                            BALLS
  for (let i = 0; i < tiles.length; i++) {
    let tile = tiles[i];
    if (tile.active) {
      tile.display();
      tile.colorchange();

      }
    }
  
//                                              USER
  user.move();
  user.display();


// function keyPressed(){
//    if (keyCode === LEFT_ARROW || keycode === UP_ARROW || keycode === DOWN_ARROW || keycode === RIGHT_ARROW){
//      tile.color.r = 0;
//      tile.color.b = 0;
//      fill(0);
//      rect(50,50,400);
//   }
// }

}
