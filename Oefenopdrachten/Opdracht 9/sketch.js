let ballen = [];
let score = 0;

function setup() {
  createCanvas(400, 400);
  maakBallen();
}

function draw() {
  background(30, 40, 80);

  // Alle ballen tekenen en laten bewegen
  for (let i = 0; i < ballen.length; i++) {

    // Kleur van de bal
    fill(ballen[i].color.r, ballen[i].color.g, ballen[i].color.b);
    noStroke();

    // Bal tekenen
    circle(ballen[i].x, ballen[i].y, ballen[i].size);

    // Richting omdraaien als de bal de rand raakt
    if (ballen[i].x + ballen[i].xSpeed < 0 ||
        ballen[i].x + ballen[i].xSpeed > width) {
      ballen[i].xSpeed *= -1;
    }

    if (ballen[i].y + ballen[i].ySpeed < 0 ||
        ballen[i].y + ballen[i].ySpeed > height) {
      ballen[i].ySpeed *= -1;
    }

    // Bal verplaatsen
    ballen[i].x += ballen[i].xSpeed;
    ballen[i].y += ballen[i].ySpeed;
  }
}