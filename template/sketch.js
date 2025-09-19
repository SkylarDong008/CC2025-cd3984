let angle = 0;       // 当前旋转角度
let rotating = false; // 是否开始旋转

function setup() {
  createCanvas(400, 500);
}

function draw() {
  background(220);

  // 原始矩形
  rect(200, 100, 100, 50);

  // 无色矩形，使用 rectMode(corner)
  push();
  rectMode(CORNER);
  rotate(angle);       // 用变量控制旋转角度
  rect(200, 100, 100, 50);
  pop();

  // 黑色矩形，默认 rectMode(CENTER)
  push();
  fill("rgb(0,0,0)");
  rectMode(CENTER);
  rotate(angle);       // 用变量控制旋转角度
  rect(200, 100, 100, 50);
  pop();

  // 逐步增加角度（慢速旋转）
  if (rotating) {
    angle += 0.01; // 控制旋转速度，可以改小一点更慢
  }
}

// 点击鼠标开始旋转或暂停
function mousePressed() {
  rotating = !rotating;
}
