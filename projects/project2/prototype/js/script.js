"use strict";
//                                               VARIABLES

let tiles = [];
let numTiles = 100;

// let state = `title`;
//                                                 SETUP
function setup() {
  createCanvas(1500, 700);
//                                                  RED TILES
//                                                  FIRST COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 270;
    let y = -70;
    for (let j = 0; j < 10; j++) {
      y = y + 70;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                    SECOND COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 340;
    let y = -70;
    for (let j = 0; j < 10; j++) {
      y = y + 70;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                    THIRD COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 410;
    let y = -70;
    for (let j = 0; j < 10; j++) {
      y = y + 70;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                       FOURTH COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 480;
    let y = -70;
    for (let j = 0; j < 10; j++) {
      y = y + 70;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                      FIFTH COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 550;
    let y = -70;
    for (let j = 0; j < 10; j++) {
      y = y + 70;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                    SIXTH COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 620;
    let y = -70;
    for (let j = 0; j < 10; j++) {
      y = y + 70;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                   SEVENTH COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 690;
    let y = -70;
    for (let j = 0; j < 10; j++) {
      y = y + 70;

    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                     EIGHT COLUMN
    for (let i = 0; i < numTiles; i++) {
      let x = 760;
      let y = -70;
      for (let j = 0; j < 10; j++) {
        y = y + 70;

      let tile = new Tile(x, y,color);
      tiles.push(tile);
      }
    }
//                                                    NINTH COLUMN
    for (let i = 0; i < numTiles; i++) {
      let x = 830;
      let y = -70;
      for (let j = 0; j < 10; j++) {
        y = y + 70
      let tile = new Tile(x, y,color);
      tiles.push(tile);
      }
    }
//                                                     TENTH COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 900;
    let y = -70;
    for (let j = 0; j < 10; j++) {
      y = y + 70
    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                     ELEVENTH COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 970;
    let y = -70;
    for (let j = 0; j < 10; j++) {
      y = y + 70
    let tile = new Tile(x, y,color);
    tiles.push(tile);
    }
  }
//                                                     TWELVETH COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 1040;
    let y = -70;
    for (let j = 0; j < 10; j++) {
      y = y + 70
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

}
