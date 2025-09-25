function setup() {
  createCanvas(windowWidth, windowHeight);

  // iteration operations
  // i++ : add 1 to x
  // i+=10: add 10 to i
  // i--: subtracts 1 from i
  // i-=5: subtracts 5 from i
  for(let i = 0; i < 10; i++){
    console.log(i);
  }
}

function draw() {
  background("pink");
  for (let y = 50; y < height-50; y +=100){
    for( let x = 50; x < width-50; x +=100){
      push();
      translate(x,y);
      let rotation;
      rotation = map(y,50,height-50,0,PI);
      rotate(rotation);
      let randomRotation;
      let randomXDisp;
      let randomYDisp;

      pop();
      circle
    }
  }
    
  for(let x = 50; x<width-50; x+=100){
  push();
  translate(x,50);
  // translate(width/2,height/2);
  // everything within this push/pop block
  strokeWeight(3);
  fill("#ffcbeaff");
  circle(0,0,100);
  circle(-15, -10, 10);
  circle(15, -10, 10);
  let happiness;
  happiness = map(x, 0, width, -25, 25);
  arc(0,0,60,60,radians(0-happiness),radians(130+happiness));
  pop();
  }

}
