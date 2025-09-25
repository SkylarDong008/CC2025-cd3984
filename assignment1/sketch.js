// set my own pallette
let avocadoGreen = "#5f8b4cdb";   
let softBeige    = "#FFDDAB"; 
let pastelPink   = "#ff9a9ad7";   
let warmBrown    = "#945034";   

function setup() {
  createCanvas(windowWidth, windowHeight);
  // set the background to white
  background("rgba(255, 255, 255, 1)");
}

// Always resize the canvas to fill the browser window.
// reference: https://p5js.org/reference/p5/resizeCanvas/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  console.log(mouseX/width + " " + mouseY/height);
  
  // use 10 rectangular in black to create the effect of strips background in black and white
  fill("rgb(0,0,0)");
  // a black rectangular starts with coordinates(0,0) 
  // rectangular with the width/20 of the canvas and canvas height 
  rect(0, 0, width/20, height);

  fill("rgb(0,0,0)");
  // a black rectangular starts with coordinates(2*width/20, 0) 
  // keep the same width, width/20 of the canvas
  rect(2*width/20, 0, width/20, height);
  // everytime adding a new strip, the x-coordinate of the start points should add 2*width/20
  // since we should add 1 more balck rectangular and the default white background both in the width of width/20
  fill("rgb(0,0,0)");
  rect(4*width/20, 0, width/20, height);
  fill("rgb(0,0,0)");
  rect(6*width/20, 0, width/20, height);
  fill("rgb(0,0,0)");
  rect(8*width/20, 0, width/20, height);
  fill("rgb(0,0,0)");
  rect(10*width/20, 0, width/20, height);
  fill("rgb(0,0,0)");
  rect(12*width/20, 0, width/20, height);
  fill("rgb(0,0,0)");
  rect(14*width/20, 0, width/20, height);
  fill("rgb(0,0,0)");
  rect(16*width/20, 0, width/20, height);
  fill("rgb(0,0,0)");
  rect(18*width/20, 0, width/20, height);

  
  // gets rid of the stroke completely
  noStroke()
  // create a triangle in the color of avocadoGreen
  fill(avocadoGreen);
  triangle(width*0.24, height*0.16, width*0.3, height*0.8, width*0.88, height*0.48);

  // Divide shapes into different groups 
  // Group 1: consists 4 rectangles in the top left of this painting
  // using push() and pop() to control the same rotate angle of this group
  // push(): https://p5js.org/reference/p5/push/
  push();
  // Treat these rectangles as a cohesive group.
  // Set rectMode(CENTER) so that the (x, y) coordinates are the rectangle centers
  // rectMode(CENTER): https://p5js.org/reference/p5/rectMode/
  rectMode(CENTER);
  // rotate 4 rectangulars in the same degree
  rotate(-PI/6.5)
  fill(pastelPink);
  rect(width*0.1, height*0.4, width*0.38, height*0.08);

  fill(warmBrown);
  rect(width*0.16, height*0.44, width*0.06, height*0.07);

  fill(warmBrown);
  rect(width*0.4, height*0.445, width*0.3, height*0.02);

  fill(softBeige);
  rect(width*0.34, height*0.428, width*0.1, height*0.012);
  // pop(): https://p5js.org/reference/p5/pop/
  pop();

  // Create the top left square in softBeige
  // Rotate it slightly more than the Group 1 rectangles
  push();
  fill(softBeige);
  rectMode(CENTER);
  rotate(-PI/5.8);
  rect(width*0.05, height*0.32, height*0.08, height*0.08);
  pop();

  // Goup 2: consists of 3 rectangulars in the top right of this painting
  // Using the same strategy in Group 1
  push();
  fill(softBeige);
  rectMode(CENTER);
  rotate(-PI/3.6);
  rect(width*0.1, height*0.68, width*0.5, height*0.03);
  
  fill(pastelPink);
  rect(width*0.2, height*0.7, width*0.1, height*0.05);

  fill(warmBrown);
  rect(width*0.001, height*0.69, width*0.35, height*0.025);
  pop();

  // Create the bottom right circle in pastelPink
  fill(pastelPink);
  circle(width*0.78, height*0.63, width*0.3);

  // Create the bottom left square in avocadoGreen
  fill(avocadoGreen);
  square(width*0.1, height*0.88, 25);

  // Group 3: consists of 2 rectangles at the bottom right 
  push();
  fill(pastelPink);
  rectMode(CENTER);
  rotate(PI/6.5)
  rect(width*1.17, height*0.5, width*0.4, height*0.02);
  fill(avocadoGreen);
  rect(width*0.99, height*0.48, width*0.15, height*0.02);
  pop();

  // Group 4: consists of 3 rectangles at the bottom left of this painting
  push();
  rotate(PI/6);
  translate(width*0.34, height*0.17);
  fill(softBeige);
  rect(width*0.3, height*0.18, width*0.02, height*0.2);
  fill(warmBrown);
  rect(width*0.2, height*0.3, width*0.25, height*0.02);

  // draw a small square in the left-bottom
  fill(avocadoGreen);
  rect(width*0.22, height*0.26, width*0.08, height*0.04);

}
