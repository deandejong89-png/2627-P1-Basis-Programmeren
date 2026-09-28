// Arrays voor de vormen
let x = [];
let y = [];
let grootte = [];
let rood = [];
let groen = [];
let blauw = [];
let vorm = [];
let snelheid = [];

function setup() {
  createCanvas(800, 600);

  // Eerste kunstwerk maken
  maakKunst();
}

function draw() {
  background(240);

  // Alle vormen tekenen
  for (let i = 0; i < x.length; i++) {

    fill(rood[i], groen[i], blauw[i], 180);
    noStroke();

    // Vierkant of cirkel tekenen
    if (vorm[i] == 0) {
      rect(x[i], y[i], grootte[i], grootte[i]);
    } else {
      circle(x[i], y[i], grootte[i]);
    }

    // Beweging
    y[i] += snelheid[i];

    // Terug naar boven als de vorm uit beeld is
    if (y[i] > height) {
      y[i] = 0;
    }
  }

  // Tekst onderaan
  fill(0);
  textSize(18);
  text("Druk op BACKSPACE voor nieuwe kunst", 20, height - 20);
}

// Nieuwe kunst maken
function maakKunst() {

  // Arrays leegmaken
  x = [];
  y = [];
  grootte = [];
  rood = [];
  groen = [];
  blauw = [];
  vorm = [];
  snelheid = [];

  // Willekeurig aantal vormen
  let aantal = floor(random(30, 81));

  // Gegevens opslaan in arrays
  for (let i = 0; i < aantal; i++) {
    x.push(random(width));
    y.push(random(height));
    grootte.push(random(20, 80));

    rood.push(random(255));
    groen.push(random(255));
    blauw.push(random(255));

    vorm.push(floor(random(2))); // 0 = vierkant, 1 = cirkel
    snelheid.push(random(0.5, 3));
  }
}

// Backspace maakt nieuwe kunst
function keyPressed() {
  if (keyCode === BACKSPACE) {
    maakKunst();
    return false;
  }
}