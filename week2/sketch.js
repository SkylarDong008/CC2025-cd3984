function setup() { // runs once at the start
  createCanvas(windowWidth, windowHeight);// camelBackNotation
  // createCanvas is a fuction 
  // that creates a canvas for our p5.js sketch
  // to draw into. it takes two parameters,
  // width and height. windowWidth and windowHeight
  background(255,123,173);
}

function draw() { // runs in a loop after startup
  circle(200,400,100);
  // x position, y position, diameter
  arc(200, 450, 100, 100, 0, PI, [close]);
  // An arc is a section of an ellipse 
  // defined by the x, y, w, and h parameters. 
  // x and y set the location of the arc's center. 
  // w and h set the arc's width and height. 
  // The fifth and sixth parameters, start and stop, set the angles between which to draw the arc. 
  // Arcs are always drawn clockwise from start to stop. The fifth and sixth parameters, start and stop, set the angles between which to draw the arc. 
  arc(150, 400, 100, 100, PI / 2, PI + HALF_PI, [close]);
  arc(200, 350, 100, 100, PI, 2 * PI, [close]);
  arc(250, 400, 100, 100, PI + HALF_PI , HALF_PI , [close]);

}
