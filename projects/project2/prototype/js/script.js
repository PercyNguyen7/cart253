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
//                                                  0 COLUMN
for (let i = 0; i < numTiles; i++) {
  let x = 200;
  let y = -100;
  for (let j = 0; j < 7; j++) {
    y = y + 100
  let tile = new Tile(x, y,color);
  tiles.push(tile);
  }
}
//                                                  FIRST COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 300;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                    SECOND COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 400;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                    THIRD COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 500;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                       FOURTH COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 600;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                      FIFTH COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 700;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                    SIXTH COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 800;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                   SEVENTH COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 900;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                     EIGHT COLUMN
    for (let i = 0; i < numTiles; i++) {
      let x = 1000;
      let y = -100;
      for (let j = 0; j < 7; j++) {
        y = y + 100;

      let tile = new Tile(x, y,color);
      tiles.push(tile);
      }
    }
//                                                    NINTH COLUMN
    for (let i = 0; i < numTiles; i++) {
      let x = 1100;
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
    }
  }
//                                              USER
  user.move();
  user.display();


}
