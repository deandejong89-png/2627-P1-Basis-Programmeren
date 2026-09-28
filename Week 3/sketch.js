function setup() {
createCanvas(400,400)
}

function draw() {
  background(220);

   stroke(0);
  strokeWeight(5);
  noFill();

  // vierkant midden
  rect(50, 50, 300, 300, 10);

  // vakken vertical
  line(150, 50, 150, 350);
  line(250, 50, 250, 350);

  // vakken horizontaal
  line(50, 150, 350, 150);
  line(50, 250, 350, 250);
}