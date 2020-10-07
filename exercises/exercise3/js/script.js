let doorImage = {
  size:20,
}

function preload() {
  doorImage= loadImage("assets/images/door.jpg");
}
let circle1 = {
  x:undefined,
  y:250,
  size:100,
  vx:0,
  vy:0,
  speed:1
};

let circle2 = {
  x:undefined,
  y:250,
  size:100,
  vx:0,
  vy:0,
  speed:2,
};

let state = `title`;//Can be:title, simulation, love, sadness

function setup() {
  createCanvas(500,500);

  setupCircles();
  setuprgb();
}

function setupCircles(){
  //position circles seperated from on another
  circle1.x = width/3;
  circle2.x = 2*width/3;
}
function setuprgb(){
  background.r = random(0,255)
  background.g = random(0,255)
  background.b = random (0,255)
}


function draw() {
  background(background.r,background.g,background.b);

  if (state === `title`){
    title();
  }
  else if (state ===`simulation`){
    simulation();
  }
  else if (state ===`love`){
    love();
  }
  else if (state === `sadness`){
    sadness();
  }
  else if (state ===`single`){
    single();
  }
}
function title(){
  push();
  textSize(64)
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`Oi is yo soulmate`,width/2,height/2)
  pop();
}

function simulation() {
  image(doorImage,0,0,50,100)
  handleInput();
  randommovement();
  checkOffscreen();
  checkOverlap();
  display();
  reachdoor();
}

function love(){
  push();
  textSize(20)
  fill(255,150,150);
  textAlign(CENTER,CENTER);
  text(`And they lived happily forever after`,width/2,height/2);
  pop();
}

function sadness() {
  push();
  textSize(50)
  fill(150,150,255);
  textAlign(CENTER,CENTER);
  text(`You think this a game boi?`,width/2,height/2)
  pop();
}

function single() {
  push();
  textSize(30)
  fill(150,150,255);
  textAlign(CENTER,CENTER);
  text(`You just noped outta there!`,width/2,height/2)
  pop();
}
function handleInput(){
    if (keyIsDown(LEFT_ARROW)){
      circle1.vx = -circle1.speed;
    }
    else if (keyIsDown(RIGHT_ARROW)){
      circle1.vx = circle1.speed;
    }
    else{
        circle1.vx = 0
    }
    if (keyIsDown(UP_ARROW)){
      circle1.vy = -circle1.speed;
    }
    else if (keyIsDown(DOWN_ARROW)){
      circle1.vy = circle1.speed;
    }
    else {
      circle1.vy = 0;
    }
}
function randommovement(){
  let change = random();

  if (change<0.03){
    circle2.vx=random(-circle2.speed,circle2.speed)
    circle2.vy=random(-circle2.speed,circle2.speed)
  }
}

function checkOffscreen(){
  //check if the circles have gone offscreen
  if (isOffscreen(circle1) || isOffscreen(circle2)){
    state = `sadness`
  }
}

function isOffscreen(circle) {
  if (circle.x <0 || circle.x > width || circle.y<0 || circle.y>height) {
    return true;
  }
  else {
    return false;
  }
}
function checkOverlap(){
  //check if the circles overlap
  let d = dist(circle1.x,circle1.y,circle2.x,circle2.y);
  if (d < circle1.size/2 + circle2.size/2)  {
    state = `love`;
  }
}

function display(){
  //display the circles
  circle1.x += circle1.vx
  circle1.y += circle1.vy

  circle2.x += circle2.vx
  circle2.y += circle2.vy
  ellipse(circle1.x, circle1.y, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);
}

function mousePressed(){
  if (state === `title`){
    state = `simulation`;
  }
}
function reachdoor(){
  //circle 1 reaches door outcome
  if (circle1.x < 50 && circle1.y <100){
    state = `single`;
  }
}
