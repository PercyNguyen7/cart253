"use strict";
//                                               VARIABLES

let tiles = [];
let numTiles = 100;

// let state = `title`;
//                                                 SETUP
function setup() {
  createCanvas(1500, 700);

  for (let i = 0; i < numTiles; i++) {
    let x = 300;
      x+=  70;
    let y = 0;
    y += 70;

    let tile = new Tile(x, y);
    tiles.push(tile);
  }

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
