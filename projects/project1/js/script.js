let contextImage;

let day1Image;

function preload(){
  contextImage=loadImage("assets/images/context.jpg")
  day1Image=loadImage("assets/images/day1.jpg")
}
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
  image(contextImage,0,0,1000,700)
  push();
  textSize(40)
  fill(200,100,100);
  text(`You're in love, baby!`,30,50)
  textSize(25)
  text(`Tomorrow will be the day you propose`,30,450)
  textSize(27)
  text(`She'll say yes. You assure yourself.`,30,500)
  textSize(30)
  text(`Oh joy, I'm your loverboy!`,30, 550)

  pop();
}

function firstday(){
 image(day1Image,0,0,1000,700);
 fill(45,114,178);
 rectMode(CENTER);
 rect(width/3,350,300,80);
  rect(2*width/3,350,300,80);
 textSize(50);
 textAlign(CENTER,CENTER);
 fill(255);
 text(`8AM That DAY, Time to propose!`,width/2,200);
 textSize(40);
 text(`Buy a RING for the proposal?`, width/2,250);
 textAlign(CENTER,CENTER);
 textSize(40);
 text(`GO for it baby!`, width/3,350);
 text(`NAW jus wing it!`,2* width/3,350)

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
