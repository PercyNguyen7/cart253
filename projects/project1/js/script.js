let circle1 = {
  x:500,
  y:500,
  size:50,
  vx:0,
  vy:0,
  speed:1,
};
// setup()
//
// Description of setup() goes here.
let state = `title`;

function setup() {
  createCanvas(1000,600);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(45,21,56)

  if (state === `title`){
    title();
  }
  if (state === `context`){
    context();
  }
  else if (state === `firstday`){
    firstday();
  }




}

function title(){
  push();
  textSize(50)
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`Propose Day`,width/2,height/2 -50)
  textSize(30)
  text(`Press any key...`,width/2,height/2 +50)
  pop();
}

function context(){
  push();
  textSize(50)
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`testin`,width/2,height/2 -50)
  textSize(30)
  text(`Press any key...`,width/2,height/2 +50)
  pop();
}

function firstday(){
  display();
  handleInput();
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

function display(){
  circle1.x += circle1.vx
  circle1.y += circle1.vy

  fill(255)
  ellipse(circle1.x, circle1.y, circle1.size);
}
function keyPressed(){
  if (state === `title`){
    state = `context`;
  }
  else if (state === `context`){
    state = 'firstday'
  }
}
