function setup() {
  createCanvas(720,720);
  background(220);
  fill ('pink');
  strokeWeight(8);
}

function draw() {
  translate (60, 60);
  quad (
    0,0,
    300,0,
    300,300,
    0,300
  );
 
}
