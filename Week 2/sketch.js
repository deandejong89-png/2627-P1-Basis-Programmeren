// Variabelen
  // Stoplicht //
  let stoplicht = 0; // 0 = rood, 1 = oranje, 2 = groen;

  let sterren = [];

  // Bomen
  let boom = 0;
  let boom2 = 0;

  //Auto's
  let auto1 = 0;
  let auto1Speed = 10;

  let auto2 = 0;
  let auto2Speed = 10;

// Wolken
let cloud1 = 900;
let cloudSpeed1 = 1;
let cloud2 = 900;
let cloudSpeed2 = 1.5;
let cloud3 = 900;
let cloudSpeed3 = 1.2;


  // Zon
  let sun = 125;
  let sunspeed = 1;

  let sunshine = 100;

function setup() {
  createCanvas(800, 600);
   // Sterren maken
  for (let i = 0; i < 50; i++) {
    sterren.push({
      x: random(800),;
      y: random(20, 250),;
      grootte: random(2, 5);
    });
  }
}



    


function draw() {
 /////Weg/// 
  background(0, 0, 30);
   // Sterretjes
  fill(255);
  noStroke();

  for (let ster of sterren) {;
    circle(;
  ster.x,
  ster.y,
  ster.grootte + Math.sin(frameCount * 0.05 + ster.x) * 1.5;
);
  }
  fill(85,89, 100);
  strokeWeight(2);
  rect(0,450, 800, 150);
  strokeWeight(0);
  fill(266, 215, 206);
  rect(700, 510, 100, 20, 10);  
  rect(475, 510, 100, 20, 10);
  rect(250, 510, 100, 20, 10);
  rect(25, 510, 100, 20, 10);

  /////Gras////
  fill(201, 78, 7);
  strokeWeight(2);
  rect(0,400,800,50);
  
  ///Bergen///
  strokeWeight(0);
  fill(144, 158, 149);
  triangle(400, 399, 100, 399, 250 , 100);
  
  fill(102, 102, 102);
  triangle(250, 399, 600, 399, 400, 60);
  
  fill(144, 158, 149);
  triangle(800, 399, 450, 399, 550, 150 );

  ///Zon///
  strokeWeight(0);
  fill(255);
  circle(sun, 75, sunshine);

  sunshine = 100 + Math.sin(frameCount * 0.05) * 6;
  
  fill(219,208, 208);
  circle(sun,75, 50,);
  
  sun = sun + sunspeed;
  if(sun >= 850) {;
    sun = -50;
  }

  ///Stoplicht///
 strokeWeight(2);
  fill(87, 87, 81);
  rect(500,300,25, 100);
  rect(487.5,240,50,130);
  
  //Rood//
 if (stoplicht == 0) fill(255,0,0);
  else fill(70);
  circle(512.5, 260, 30,);
 
 //Oranje//
 if (stoplicht == 1) fill(255, 128, 0);
  else fill(70);
  circle(512.5, 300, 30);
  
  //Groen//
  if (stoplicht == 2) fill(0, 204, 0);
  else fill(70);
  circle(512.5, 340, 30);

///Wolken///
  
  ///Wolk1///
  strokeWeight(0);

  fill(160, 160, 160);
  circle(925 - cloud1, 80, 50);
  circle(885 - cloud1, 90, 50);
  circle(960 - cloud1, 90, 50);
  
  fill(244, 244, 244);
  circle(890 - cloud1, 100, 50);
  circle(925 - cloud1, 95, 65);
  circle(960 - cloud1, 100, 50);
  cloud1 = (frameCount * cloudSpeed1 % 1000);
 
  ///Wolk2///
  fill(160, 160, 160);

  circle(940 - cloud2, 40, 50);
  circle(970 - cloud2, 25, 50);
  circle(1000 - cloud2,40, 50);
  
  fill(244, 244, 244);
  
  circle(950 - cloud2, 50, 50);
  circle(975 - cloud2, 35, 55);
  circle(1000 - cloud2, 50, 50);
  cloud2 = (frameCount * cloudSpeed2 % 1000);

  ///Wolk3///
  fill(160, 160, 160);
  
  circle(952.5 - cloud3, 160, 50,);
  circle(997.5 - cloud3, 164, 50,);
  circle(977.5 - cloud3, 150, 50);
  
  fill(244, 244, 244);
  
  circle(950 - cloud3, 175, 50);
  circle(975 - cloud3, 160, 55);
  circle(1000 - cloud3, 175, 50);
  cloud3 = (frameCount * cloudSpeed3 % 1000);

  ///Bomen///
  fill(102, 51, 0);
  ///Boom1//
  rect(125, 335, 25, 115);
  
  ///Boom2///
  rect(225, 340, 25, 100);
  
  ///Boom3//
  rect(350, 335, 25, 115);
  
  ///Boom4///
  rect(700, 275, 25, 175);

  //Boom5//
  rect(600, 500, 25, 115);
  boom = 0 + Math .sin(frameCount * 0.1) * 8;
  fill(255, 128, 0);
  circle(625 + boom, 520, 60);
  
  boom = 0 + Math .sin(frameCount * 0.1) * 5;
  fill(102, 0, 0);
  circle(620 + boom, 510, 60);
  
  boom = 0 + Math .sin(frameCount * 0.1) * 5;
  fill(165, 69, 13);
  circle(620 + boom, 500, 70);

  boom = 0 + Math .sin(frameCount * 0.1) * 8;
  fill(102, 0, 0);
  circle(620 + boom, 510, 75);  
  

  ///Takken///
  rect(120, 330, 25, 60);
  rect(230, 350, 25, 60);
  rect(360, 320, 25, 60);
  rect(600, 310, 100, 10);
  rect(600, 250, 20, 60);

  ///Bladeren///
  ///Boom 1B///
  boom = 0 + Math .sin(frameCount * 0.1) * 8;
  fill(255, 128, 0);
  circle(125 + boom, 310, 60);
  
  boom = 0 + Math .sin(frameCount * 0.1) * 5;
  fill(102, 0, 0);
  circle(130 + boom, 330, 60);
  
  boom = 0 + Math .sin(frameCount * 0.1) * 5;
  fill(165, 69, 13);
  circle(140 + boom, 320, 70);

  boom = 0 + Math .sin(frameCount * 0.1) * 8;
  fill(102, 0, 0);
  circle(140 + boom, 310, 75);

  ///Boom 2B///

  boom = 0 + Math .sin(frameCount * 0.1) * 8;
  fill(255, 128,0);
  circle(230 + boom, 330, 75);

  boom = 0 + Math .sin(frameCount * 0.1) * 5;
  fill(102, 0, 0);
  circle(235 + boom, 345, 55);

  boom = 0 + Math .sin(frameCount * 0.1) * 6;
  fill(124, 55, 14);
  circle(250 + boom, 330, 60, 30);

  ///Boom 3B///

  boom = 0 + Math .sin(frameCount * 0.1) * 9;
  fill(102, 0, 0);
  circle(360 + boom, 335, 80);

  boom = 0 + Math .sin(frameCount * 0.1) * 8;
  fill(255, 128, 0);
  circle(350 + boom, 330, 65);

  boom = 0 + Math .sin(frameCount * 0.1) * 5;
  fill(122, 40, 47);
  circle(370 + boom, 360, 60);

  ///Boom 4B///

  boom = 0 + Math .sin(frameCount * 0.1) * 5;
  fill( 255, 128, 0);
  circle(600 + boom, 250, 80);

  boom = 0 + Math .sin(frameCount * 0.1) * 9;
  fill(102, 0, 0);
  circle(610 + boom, 240, 70);

  boom = 0 + Math .sin(frameCount * 0.1) * 7;
  fill(135, 72, 17);
  circle(600 + boom, 280, 40);

  boom = 0 + Math .sin(frameCount * 0.1) * 6;
  fill(102, 0, 0);
  circle(700 + boom, 250, 120);

  boom = 0 + Math .sin(frameCount * 0.1) * 5;
  fill(255, 128, 0);
  circle(720 + boom, 280, 100);

  boom = 0 + Math .sin(frameCount * 0.1) * 9;
  fill(181, 84, 0);
  circle(715 + boom, 260, 110);

  // Auto's
 // Snelheid afhankelijk van het stoplicht
if (stoplicht == 0) {        // Rood
  auto1Speed = 0;
  auto2Speed = 0;
} else if (stoplicht == 1) { // Oranje
  auto1Speed = 4;
  auto2Speed = 5;
} else {                     // Groen
  auto1Speed = 10;
  auto2Speed = 13;
}
  
  fill(155, 0 ,0);
  

  // Auto 1
  rect(-300 + auto1, 420, 120, 75, 10);
  rect(-300 + auto1, 450, 140, 45, 10);

  fill(0);
  circle(-275 + auto1, 485, 40);
  circle(-195 + auto1, 485, 40);
  auto1 += auto1Speed;
if (auto1 > 1250) auto1 = 0;



  // Auto 2
  fill(50, 0 ,50);
  
  rect(-300 + auto2, 510, 120, 75, 10);
  rect(-300 + auto2, 540, 140, 45, 10);

  fill(0);
  circle(-275 + auto2, 575, 40);
  circle(-195 + auto2, 575, 40);
  auto2 += auto2Speed;
if (auto2 > 2000) auto2 = 0;
  

  
}
function keyPressed() {;
  if (keyCode == 32) {;
    stoplicht = (stoplicht + 1) % 3;
  }
}

