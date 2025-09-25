function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  // any transformations are reset
  // at the beginning of draw
  background("#ac8cfcff");

  circle(100,100,100);
  circle(85,90,5);
  circle(115,90,5);
  arc(100,100,60,60,0,PI);

  push();
  //rotate(radians(angle));
  stroke("white");
  strokeWeight(5);
  line(0,0,100,0);
  pop();

  // translate is the TRANSFORMATION function
  // it moves the coordinate matrix according to
  // a new set of coordinates, which becomes 
  // the "new" 0,0

  // push and pop ISOLATE a transformation
  // anything enclosed within push and pop only applies 
  // with that enclosure

  push(); // push indicates the beginning of an isolated block

   if(mouseX >= width/2 && mouseY >= height/2){ // if the test inside the () is met...
    // run this code
    fill("pink");
  }else if(mouseX < width/2 && mouseY < height/2){
    fill("orange");
  }else { // otherwise...
    // run this codes
    fill("yellow");
  }

  // mouseIsPressed is a system variable that switches 
  // from false to true when the mouse is down
  if(mouseIsPressed == true){
    fill("red");
  }

  // fill("pink");
  // translate(width/2, height/2);
  // translate(mouseX, height/2);
  translate(width/2, height/2);

  let angle;
  // map is a fuction that scales number proportionally
  // parameters:
  // 1: input variables to scale 
  // 2: low end of input range
  // 3: HIGH END of the output range
  // 4: low end of the output range
  // 5: high end of the output range
  angle = map(mouseX, 0, width, 0, 360);
  rotate(radians(angle));

  let scaleFactor; // making a variable to hold scale amount
  scaleFactor = map(mouseY, 0, height, 0.1, 3);
  // scale makes the coordinate system larger or smaller
  // it takes a "factor" as a parameter
  // if you supply 2 parameters, it scales differently
  // on x and y axes
  // such as scale(2,1)
  scale(scaleFactor);
  circle(0,0,100);
  circle(-15,-10,5);
  circle(15,-10,5);
  arc(0,0,60,60,0,PI);
  pop(); // pop indicates the end of an isolated block


  // text function: text, x, y of top left corner
  text(mouseX + "," + mouseY, 5, 15);


  

}
