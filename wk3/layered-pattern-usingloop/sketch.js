function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  smooth();
  noStroke();
  push();
  translate(width/2,height/2);
  for(let i=0; i<10; i++){ //꼭i를쓰지않아도되는걸보여줌.루프가열번돌아간다는얘기임.중간10숫자를1로바꿔봐.
    fill(200,10,10);
    rotate(radians(20));
    ellipse(0,0,80,10);
  }
  for(let j=0; j<20; j++){
    fill(250,250,10);
    rotate(radians(20));
    ellipse(50,50,80,10);
  }
  pop();
  
  //그린패턴.translate영향을받지않음.
  for(let k=25;k<400; k+=50){
    for(let l=25;l<400; l+=30){
      fill(0,150,150,100);
      ellipse(k,l,10,10);
    }
  }
}