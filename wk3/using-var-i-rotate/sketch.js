function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  smooth();
  translate(width/2,height/2);
  
  for(let i=0; i<=36; i+=2){ 
  rotate(radians(i)); //rotates 0,2,4,6,8,10,12,...36
  line(0,0,0,50);
}

}