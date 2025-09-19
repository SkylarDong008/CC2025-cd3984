let angle = 0;       // ��ǰ��ת�Ƕ�
let rotating = false; // �Ƿ�ʼ��ת

function setup() {
  createCanvas(400, 500);
}

function draw() {
  background(220);

  // ԭʼ����
  rect(200, 100, 100, 50);

  // ��ɫ���Σ�ʹ�� rectMode(corner)
  push();
  rectMode(CORNER);
  rotate(angle);       // �ñ���������ת�Ƕ�
  rect(200, 100, 100, 50);
  pop();

  // ��ɫ���Σ�Ĭ�� rectMode(CENTER)
  push();
  fill("rgb(0,0,0)");
  rectMode(CENTER);
  rotate(angle);       // �ñ���������ת�Ƕ�
  rect(200, 100, 100, 50);
  pop();

  // �����ӽǶȣ�������ת��
  if (rotating) {
    angle += 0.01; // ������ת�ٶȣ����Ը�Сһ�����
  }
}

// �����꿪ʼ��ת����ͣ
function mousePressed() {
  rotating = !rotating;
}
