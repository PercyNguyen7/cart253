let circle1 = {
  x:undefined,
  y:250,
  size:100,
  vx:0,
  vy:0,
  speed:3
};

let circle2 = {
  x:undefined,
  y:250,
  size:100,
  vx:0,
  vy:0,
  speed:3,
};

let state = `title`;//Can be:title, simulation, love, sadness

function setup() {
  createCanvas(500,500);

  setupCircles();
}

function setupCircles(){
  //position circles seperated from on another
  circle1.x = width/3;
  circle2.x = 2*width/3;

  //start circles moving in a random direction
  // circle1.vx = random(-circle1.speed,circle1.speed);
  // circle2.vx = random(-circle1.speed,circle1.speed);
  //
  // circle1.vy = random(-circle1.speed,circle1.speed);
  // circle2.vy = random(-circle1.speed,circle1.speed);
}


function draw() {
  background(0);

  if (state === `title`){
    title();
  }
  else if (state ===`simulation`){
    simulation();
  }
  else if (state ===`love`){
    love();
  }
  else if (state = `sadness`){
    sadness();
  }
}

function title(){
  push();
  textSize(64)
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`LOVE?`,width/2,height/2)
  pop();
}

function simulation() {
  handleInput();
  checkOffscreen();
  checkOverlap();
  display();
}

function love(){
  push();
  textSize(100)
  fill(255,150,150);
  textAlign(CENTER,CENTER);
  text(`LOVE!`,width/2,height/2);
  pop();
}

function sadness() {
  push();
  textSize(64)
  fill(150,150,255);
  textAlign(CENTER,CENTER);
  text(`D:`,width/2,height/2)
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

  ellipse(circle1.x, circle1.y, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);
}

function mousePressed(){
  if (state === `title`){
    state = `simulation`;
  }
}
