function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
   for(let y=0; y<height; y+=20){
   for(let x=0; x<width; x+=20){
     fill((x+y)*0.5, (x+y)*0.3, (x+y)*0.8);
     rect(x,y,20,20);
}
  }

}