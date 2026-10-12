
let vragen = [
  {
    vraag: "Hoeveel botten heeft een volwassen mens?",
    antwoorden: ["206", "300", "150", "250"],
    goed: 0
  },
  {
    vraag: "Hoeveel planeten zijn er in ons zonnestelsel?",
    antwoorden: ["7", "8", "9", "10"],
    goed: 1
  },
  {
    vraag: "Wie schilderde de Mona Lisa?",
    antwoorden: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Rembrandt"],
    goed: 2
  },
  {
    vraag: "Wat is de grootste oceaan?",
    antwoorden: ["Atlantische", "Indische", "Noordelijke IJszee", "Stille"],
    goed: 3
  },
  {
    vraag: "Hoeveel dagen heeft een schrikkeljaar?",
    antwoorden: ["364", "365", "366", "367"],
    goed: 2
  },
  {
    vraag: "Welk land heeft de vorm van een laars?",
    antwoorden: ["Spanje", "Italië", "Frankrijk", "Griekenland"],
    goed: 1
  },
  {
    vraag: "Wat is het grootste land ter wereld?",
    antwoorden: ["China", "Canada", "Rusland", "Brazilië"],
    goed: 2
  },
  {
    vraag: "Wat is het snelste landdier?",
    antwoorden: ["Leeuw", "Jachtluipaard", "Paard", "Tijger"],
    goed: 1
  },
  {
    vraag: "In welk jaar begon WOII?",
    antwoorden: ["1914", "1939", "1945", "1930"],
    goed: 1
  },
  {
    vraag: "Hoeveel spelers heeft een voetbalteam op het veld?",
    antwoorden: ["9", "10", "11", "12"],
    goed: 2
  }
];

let vraagNummer = 0;
let score = 0;
let scherm = "start";
let feedback = "";
let gekozen = -1;

function setup() {
  createCanvas(800, 600);
  
}

function draw() {
  background(235, 242, 255);

  if (scherm == "start") {
    startScherm();
  }

  if (scherm == "quiz") {
    quizScherm();
  }

  if (scherm == "einde") {
    eindScherm();
  }
}

// Het startscherm tekenen
function startScherm() {
  fill(35, 55, 100);
  textAlign(CENTER);
  textSize(42);
  text("KENNIS QUIZ", 400, 200);

  textSize(22);
  text("Test hoeveel jij weet!", 400, 250);

  tekenKnop("START QUIZ", 280, 330, 240, 65);
}

//  quizscherm tekenen //
function quizScherm() {
  fill(35, 55, 100);
  textAlign(CENTER);
  textSize(22);
  text("Vraag " + (vraagNummer + 1) + " van " + vragen.length,
       400, 60);

  textSize(16);
  text("Score: " + score, 400, 95);

  //  vraag uit data object halen //
  let huidigeVraag = vragen[vraagNummer];

  tekenVraag(huidigeVraag.vraag);

  // 4 antwoorden tekenen //
  for (let i = 0; i < huidigeVraag.antwoorden.length; i++) {
    tekenAntwoord(huidigeVraag.antwoorden[i], i);
  }

  // volgende vraag //
  fill(35, 55, 100);
  textSize(20);
  text(feedback, 400, 535);

  if (gekozen != -1) {
    tekenKnop("VOLGENDE", 300, 550, 200, 40);
  }
}

// eindscherm tekenen //
function eindScherm() {
  fill(35, 55, 100);
  textAlign(CENTER);
  textSize(40);
  text("QUIZ KLAAR!", 400, 200);

  textSize(26);
  text("Jouw score: " + score + " / " + vragen.length,
       400, 270);

  textSize(20);

  if (score >= 8) {
    text("Goed gedaan!", 400, 320);
  } else if (score >= 5) {
    text("Netjes gedaan!", 400, 320);
  } else {
    text("Probeer het nog eens!", 400, 320);
  }

  tekenKnop("OPNIEUW SPELEN", 260, 380, 280, 65);
}

// vraag tekenen //
function tekenVraag(vraagTekst) {
  fill(255);
  stroke(180, 195, 220);
  rect(80, 130, 640, 100, 15);

  noStroke();
  fill(35, 55, 100);
  textAlign(CENTER, CENTER);
  textSize(23);
  text(vraagTekst, 100, 145, 600, 70);
}

// antwoord tekenen //
function tekenAntwoord(antwoordTekst, nummer) {
  let x = 100;
  let y = 260 + nummer * 60;

  if (gekozen == nummer) {
    if (feedback == "Goed antwoord!") {
      fill(100, 210, 130);
    } else {
      fill(240, 120, 120);
    }
  } else {
    fill(255);
  }

  stroke(180, 195, 220);
  rect(x, y, 600, 45, 10);

  noStroke();
  fill(35, 55, 100);
  textAlign(CENTER, CENTER);
  textSize(18);
  text(antwoordTekst, x, y, 600, 45);
}

// knop tekenen //
function tekenKnop(tekstKnop, x, y, breedte, hoogte) {
  fill(60, 100, 200);
  noStroke();
  rect(x, y, breedte, hoogte, 12);

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(tekstKnop, x, y, breedte, hoogte);
}

// kijken waar de muis klikt //
function mousePressed() {
  if (scherm == "start") {
    if (mouseX > 280 && mouseX < 520 &&
        mouseY > 330 && mouseY < 395) {
      scherm = "quiz";
    }
  } else if (scherm == "quiz") {
    // een antwoord kiezen als er nog niets gekozen is //
    if (gekozen == -1) {
      for (let i = 0; i < 4; i++) {
        let y = 260 + i * 60;

        if (mouseX > 100 && mouseX < 700 &&
            mouseY > y && mouseY < y + 45) {

          gekozen = i;

          if (gekozen == vragen[vraagNummer].goed) {
            score++;
            feedback = "Goed antwoord!";
          } else {
            feedback = "Helaas, fout antwoord!";
          }
        }
      }
    }

    // volgende vraag //
    if (gekozen != -1 &&
        mouseX > 300 && mouseX < 500 &&
        mouseY > 550 && mouseY < 590) {

      vraagNummer++;
      gekozen = -1;
      feedback = "";

      if (vraagNummer >= vragen.length) {
        scherm = "einde";
      }
    }
  } else if (scherm == "einde") {
    if (mouseX > 260 && mouseX < 540 &&
        mouseY > 380 && mouseY < 445) {

      // resetten om opnieuw te spelen //
      vraagNummer = 0;
      score = 0;
      gekozen = -1;
      feedback = "";
      scherm = "quiz";
    }
  }
}
