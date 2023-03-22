function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
   for(let w=width;w>0; w-=20){
    stroke(0);
    fill(w);
    ellipse(width/2,height/2,w,w);
  }

}