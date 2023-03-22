//shift of rotation axis does not relate to translation
//rotation기준은x좌표에따라

let angle=0;
function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  background(220);
  push();
  translate(width/2,height/2);
  rotate(angle);
  stroke('red');
  line(-25,0,25,0);
  pop();
  
  push();
  translate(250,200);
  rotate(angle);
  stroke('blue');
  line(0,0,75,0);
  pop();
  
  rotate(angle);
  stroke('purple');
  line(0,0,200,200);
  
  angle +=0.05;

}