let caterpillar = {
  x: 250,
  y: 250,
  size: 100
}

function setup() {
  createCanvas(500,500);
}


function draw() {
  background(0);

  circle.x = mouseX;
  circle.y = mouseY;
  ellipse(circle.x,circle.y,circle.size)
}

  function mousePressed() {
    circle.x = mouseX;
    circle.y = mouseY;

  }
