

let vak = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

let speler = "blauw";
let winnaar = "";

function setup() {
  createCanvas(400, 400);
}

function draw() {

  if (winnaar == "blauw") {
    background(0, 100, 255);
  } else if (winnaar == "rood") {
    background(255, 0, 0);
  } else if (speler == "blauw") {
    background(200, 220, 255);
  } else {
    background(255, 200, 200);
  }

  strokeWeight(5);

  for (let r = 0; r < 3; r++) {
    for (let k = 0; k < 3; k++) {

      let x = 50 + k * 100;
      let y = 50 + r * 100;

      if (vak[r][k] == "blauw") fill(0, 100, 255);
      else if (vak[r][k] == "rood") fill(255, 0, 0);
      else fill(255);

      rect(x, y, 100, 100);
    }
  }

  fill(0);
  textSize(20);
  textAlign(CENTER);

  if (winnaar == "") {
    text("Beurt: " + speler, 200, 30);
  } else {
    fill(255);
    text(winnaar + " wint!", 200, 30);
    textSize(16);
    text("Klik om opnieuw te spelen", 200, 380);
  }
}

function mousePressed() {

  // Opnieuw spelen
  if (winnaar != "") {
    vak = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
    speler = "blauw";
    winnaar = "";
    return;
  }

  let kolom = floor((mouseX - 50) / 100);
  let rij = floor((mouseY - 50) / 100);

  if (kolom >= 0 && kolom < 3 && rij >= 0 && rij < 3) {

    if (vak[rij][kolom] == "") {

      vak[rij][kolom] = speler;

      // Win controleren
      for (let i = 0; i < 3; i++) {
        if (vak[i][0] == speler && vak[i][1] == speler && vak[i][2] == speler) winnaar = speler;
        if (vak[0][i] == speler && vak[1][i] == speler && vak[2][i] == speler) winnaar = speler;
      }

      if (vak[0][0] == speler && vak[1][1] == speler && vak[2][2] == speler) winnaar = speler;
      if (vak[0][2] == speler && vak[1][1] == speler && vak[2][0] == speler) winnaar = speler;

      if (winnaar == "") {
        if (speler == "blauw") speler = "rood";
        else speler = "blauw";
      }
    }
  }
}