let x,y,r,g,b;

function setup() {
  createCanvas(400,400);
  
}

function draw() {
  //background(255);
  
  x=random(width);
  y=random(height);
  r=random(255);
  g=random(255);
  b=random(255);
  
  fill(r,g,b,30);
  noStroke();
ellipse(x,y,30,30);

  
 
}