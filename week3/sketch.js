//"let" is a keyword that allow you to declare a variable
// called circleSize which is storing a number size

// below are GLOBAL variables; they are accessible by any 
let circleSize = 125;
let shapeSize;


function setup() {
  // runs once at startup
  // createCanvas(windowWidth, windowHeight);
  createCanvas(800, 600);
  shapeSize = width*0.2;
}

function draw() {
  // a greyscale color is denoted as number 0-255
  // an RGB color is denoted as 3 numbers (red, green, blue)
  // background(0, 255, 127);
  // we can use name of the color like "black" or "Lightblue"
  // background("blue");
  // we can also format rgb colors as strings
  // background("rgb(0,0,0)");
  background("rgba(169, 254, 244, 1)");

  fill("rgba(194, 250, 211, 1)");
  stroke("rgba(237, 13, 188, 1)");
  strokeWeight(2);
  // setting a new fill and stroke for rectangle
  // rect has 4 parameters: x coord of top left, y coord of top left, width, height
  rect(0,0,width/2,height/2);
  rect(width/2, height/2, width, height);
  circle(0,0,circleSize);


  fill("rgba(20, 78, 144, 0.75)");
  noStroke();
  circle(500,200,shapeSize);

  // stroke and fill change the color of drawn shapes
  stroke("rgba(24, 9, 240, 0.5)");
  strokeWeight(3);
  // noStroke(); gets rif of the stroke completely
  fill("rgba(244, 121, 216, 1)");
  // noFill(); gets rid of the fill completely
  // setting the color and stroke for the circle
  // circle(x, y, d);
  circle(150,300,circleSize);

  triangle(300,200,200,200,200,150);

  ellipse(width/3,height/2,80,100);

  // line connects 2 coords x1,y1 and x2,y2
  line(250,130,80,130);
  
  // to draw complex polygons (more than 2 coords);
  // create a beginShape(); and an endshape function
  // any vertex(x,y) function you place in between beginShape and endShape
  // will be rendered as points in a complete polygon
  beginShape();
  vertex(400,80); // top left coord
  vertex(350,150); // bottom right coord
  vertex(150,200); // bottom left coord
  vertex(200,150); // top left coord as the end coord
  endShape(CLOSE);


  // ellipse(mouseX, mouseY, 30, 50);
  // ellipse(mouseX, mouseY, mouseY, mouseX);
  ellipse(200,400,100,100);
  // arc is like ellipse but add 2 more parmeters: start and end
  arc(200, 450, 100, 100, mouseX, PI, [close]);
  // An arc is a section of an ellipse 
  // defined by the x, y, w, and h parameters. 
  // x and y set the location of the arc's center. 
  // w and h set the arc's width and height. 
  // The fifth and sixth parameters, start and stop, set the angles between which to draw the arc. 
  // Arcs are always drawn clockwise from start to stop. 
  // The fifth and sixth parameters, start and stop, 
  // set the angles between which to draw the arc. 

}
