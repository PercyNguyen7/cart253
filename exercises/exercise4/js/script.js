"use strict";

// Our user, to move with the mouse
let user = {
  x: 0,
  y: 0,
  size: 80,

};
let moon = {
  x:0,
  y:0,
  size:100,
  vx:1,
  vy:0.5,
}
let school = [];
let schoolSize = 5;

let state = `title`;

function setup() {
  createCanvas(windowWidth, 750);

  for (let i = 0; i < schoolSize; i++) {
    let star = createStar(random(0, width), random(0, 600));
    school.push(star);
  }
}
function createStar(x, y) {
  let star = {
    x: x,
    y: y,
    size: 15,
    vx: 0,
    vy: 0,
    speed: 3,
    caught: false
  };
  return star;
}


function draw() {
  background(34, 64, 123);

  if (state ===`title`){
    title();
  }
  else if (state ===`gameplay`){
    gameplay();
  }
  else if (state ===`winending`){
    winending();
  }
  else if (state ===`loseending`){
    loseending();
  }

}


function title(){
  push();
  textSize(64)
  noFill();
  stroke(253, 232, 85);
  textAlign(CENTER,CENTER);
  textSize(80);
  text(`CATCH EVERY STAR`,width/2,200)
  text(`Before they escape!`,width/2,300)
  textSize(40);
  text(`Fail and you shall witness the downfall of mankind`,width/2,400)
  text(`Move your mouse to use your wand!`,width/2,450)
  text(`Click to begin`,width/2,500)
  pop();
}


function gameplay(){
  displayMoon();
  // displayGround();


    for (let i = 0; i < schoolSize; i++) {
        moveStar(school[i]);
        // sparkleStar(school[i]);
        displayStar(school[i]);
        checkStar(school[i])
      }


    moveMoon();



    // Move and display the user (with the mouse)
    moveUser();
    displayUser();
}

function winending(){
  background(0);
  push();
  stroke(253, 232, 85);
  textAlign(CENTER,CENTER);
  strokeWeight(2);
  textSize(80);
  text(`THE NIGHT SHINED ON...`,width/2,250);
  text(`After you auctioned them 50 billion $ each.`,width/2,350);
  textSize(30);
  text(`What a bloody greedy opportunistic bastard...`,width/2,450);
  text(`Yet you're the hero they deserve... not the one they need...`,width/2,500);
  pop();
}

function loseending(){
  background(0);
  textAlign(CENTER,CENTER);
  stroke(253, 232, 85);
  strokeWeight(2);
  textSize(80);
  text(`Starry Night was never painted... `,width/2,300);
}




// Check if the user overlaps the Stars
function checkStar(star){
  if (!star.caught){
    let d = dist(user.x,user.y,star.x, star.y);
    if (d < user.size/2 + star.size/2){
      star.caught=true;
      schoolSize--;
    }
    if (schoolSize === 0) {
      state = `winending`;
    }
  }
}

//Move stars at random speed at random direction
function moveStar(star) {
  let change = random(0, 1);
  if (change < 0.05) {
    star.vx = random(-star.speed, star.speed);
    star.vy = random(-star.speed, star.speed);
  }

//Stars change direction if bumped against borders
  if (star.x === 20 || star.x === width-20 || star.y === 20 || star.y === 580) {
    star.vx = random(-star.speed, star.speed);
    star.vy = random(-star.speed, star.speed);
  }
  star.x += star.vx;
  star.y += star.vy;

  star.x = constrain(star.x, 20, width-20);
  star.y = constrain(star.y, 20, 600-20);
}

// function sparkleStar(star) {
//   let change = random(0, 1);
//   if (change < 0.5) {
//     star.size = random(4, 20);
//   }
// }

//move moon left to right
function moveMoon(){
  if (moon.x < width/2){
    moon.x += moon.vx;
    moon.y += moon.vy;

    moon.size +=0.1
  }
  if (moon.x >= width/2){
    moon.x += moon.vx;
    moon.y += -moon.vy;

    moon.size -=0.1
  }

  if (moon.x >= width){
    state=`loseending`
  }
  moon.size= constrain(moon.size,100,200);
}


// Sets the user position to the mouse position
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;

  user.x = constrain(user.x, 0, width);
  user.y = constrain(user.y, 0, 600);
}

// Draw the user as a circle
function displayUser() {
  push();
  stroke(253, 232, 85);
  strokeWeight(3);
  noFill();
  ellipse(user.x, user.y, user.size);
  pop();
}

function displayStar(star) {

  if (!star.caught){
    push();
    stroke(253, 232, 85);
    strokeWeight(1);
    fill(253, 232, 85);

    if (star.size >= 4 && star.size < 9) {
      fill(255, 101, 138);
    }
    if (star.size >= 9 && star.size < 14) {
      fill(255, 182, 171);
    }
    ellipse(star.x, star.y, star.size);
    pop();
  }
}
function displayMoon(){
  push();
  fill(233);
  ellipse(moon.x, moon.y, moon.size);
  pop();
}

function displayGround() {
  push();
  fill(9, 24, 20);
  rect(0, 600, width, 150);
  pop();
}

function mousePressed(){
  if (state === `title`){
    state = `gameplay`;
  }
}
