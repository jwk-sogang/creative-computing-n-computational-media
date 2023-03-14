function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  strokeWeight(5);
  point(300,100);  //v1,v3
  point(50,200);   //v2
  point(250,95);//c1
  point(150,80); //c2
  point(200,270);//c3

  strokeWeight(1);
  text('v1,v3',300,100);
  text('v2',50,200);
  text('c1',250,95);
  text('c2',150,80);
  text('c3',200,270);
  line(300,100,250,95);//v1 to c1
  line(50,200,150,80); //v2 to c2
  line(200,270,300,100);//c3 to v3
  
  beginShape();
  vertex(300,100);
  bezierVertex(250,95,150,80,50,200); //c1,c2,v2
  bezierVertex(50,200,200,270,300,100);//v2,c3,v3
  endShape();
}