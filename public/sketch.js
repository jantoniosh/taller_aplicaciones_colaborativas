function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#FF0000");
  noStroke();
  fill("#0000FF");
  ellipse(mouseX, mouseY, 50, 50);
}