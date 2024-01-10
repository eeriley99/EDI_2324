let gif;

function preload (){
gif = loadImage ('assets/RileyGIF.gif');
}

function setup() {
  //runs one time
  createCanvas(windowWidth, windowHeight);
  fill("yellow");
  strokeWeight(1);
}

function draw() {
  //runs in a loop
  
  background ('red');
  
  var num = 50;
  var sideLen = windowWidth/num;

  for (var y = 0; y < windowHeight; y = y + sideLen) {
    //loop to create a grid in the y direction

    for (var x = 0; x < windowWidth; x = x + sideLen) {
    
    image (gif, x, y, windowWidth/num, windowWidth/num);
    
    }
  }
}

function windowResized(){
  resizeCanvas (windowWidth, windowHeight);
}