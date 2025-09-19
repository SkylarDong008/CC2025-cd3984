// set my own pallette
let avocadoGreen = "#5f8b4cdb";   
let softBeige    = "#FFDDAB"; 
let pastelPink   = "#ff9a9ad7";   
let warmBrown    = "#945034";   

function setup() {
  createCanvas(windowWidth, windowHeight);
  createCanvas(400, 500);
}

function drawStrips(stripeWidth){
  // x starts from 0, as long as x is smaller than windowWidth, the loop continues 
  for(let x = 0; x < windowWidth; x += stripeWidth) {
    // use integer division result (odds and even) to decide whether drawing the black or whtie strips
    if ( ( x / stripeWidth ) % 2 == 0 ){
      // since x starts from 0, the first strip should be in black
      fill("rgb(0,0,0)");
    }
    else{
      fill("rgb(255,255,255)");
    }
    // draw strips to fill the canvas
    rect(x, 0, windowWidth, windowHeight);
  }

}

function draw() {
  drawStrips(20);
  
  // adding shadows for each shape
  drawingContext.shadowOffsetX = 3;
  drawingContext.shadowOffsetY = 2;
  drawingContext.shadowBlur = 1;
  drawingContext.shadowColor = "rgba(0, 0, 0, 0.74)";
  
  // create a triangle in the color of avocadoGreen
  noStroke()
  fill(avocadoGreen);
  triangle(width*0.24, height*0.16, width*0.3, height*0.8, width*0.88, height*0.48);

  // divide shapes into different groups 
  // using push() and pop() to control the rotate angle of this group
  push();
  fill(pastelPink);
  rectMode(CENTER);
  rotate(-PI/6.5)
  rect(width*0.1, height*0.4, width*0.38, height*0.08);

  fill(warmBrown);
  rect(width*0.16, height*0.44, width*0.06, height*0.07);

  fill(warmBrown);
  rect(width*0.4, height*0.445, width*0.3, height*0.02);

  fill(softBeige);
  rect(width*0.34, height*0.428, width*0.1, height*0.012);
  pop();

  


  push();
  fill(softBeige);
  rectMode(CENTER);
  rotate(-PI/5.8);
  rect(width*0.05, height*0.32, height*0.08, height*0.08);
  pop();

  //右上方斜着
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

  //右下的圆
  fill(pastelPink);
  circle(width*0.78, height*0.63, 130);

  //左下的正方形
  fill(avocadoGreen);
  square(width*0.1, height*0.88, 25);

  //右下斜着的2个长条
  push();
  fill(pastelPink);
  rectMode(CENTER);
  rotate(PI/6.5)
  rect(width*1.17, height*0.5, width*0.4, height*0.02);
  fill(avocadoGreen);
  rect(width*0.99, height*0.48, width*0.15, height*0.02);
  pop();

  // 
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



