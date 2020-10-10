
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
  background(0)

  if (state === `title`){
        title();
  }





}

function title(){
  push();
  textSize(38)
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`Propose Day`,width/2,height/2)
  textSize(30)
  text(`Press any key...`,width/2,height/2 +100)
  pop();
}
