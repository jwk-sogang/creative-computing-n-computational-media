function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  translate(0,50);

  push();
  for(let j=0; j<50; j+=5){
    fill(50,50,50,40);
    scale(1.2);
    ellipse(20,5,j);//scale is multiplied the location also
  }
  pop();
  
  //purple-circles-no-scale
  translate(250,100);
  for(let k=0; k<50; k+=5){
    fill(50,50,150,40);
    ellipse(20,5,k);
  }


}