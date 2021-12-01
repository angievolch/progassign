function setup() {
  createCanvas(650,400);
  background(51);
  strokeWeight(4);
}

function draw() {
  if (mouseIsPressed) {
    stroke(130);
  } else {
    stroke(230, 38, 90);
  }
  line(mouseX - 75, mouseY, mouseX + 80, mouseY);
  line(mouseX, mouseY - 75, mouseX, mouseY + 80);
}