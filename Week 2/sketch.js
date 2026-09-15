// Variabelen
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
}

function draw() {
 /////Weg/// 
  background(0, 0, 30);
  fill(85,89, 100);
  strokeWeight(2)
  rect(0,450, 800, 150);
  strokeWeight(0)
  fill(266, 215, 206)
  rect(700, 510, 100, 20, 10)
  rect(475, 510, 100, 20, 10)
  rect(250, 510, 100, 20, 10)
  rect(25, 510, 100, 20, 10)

  /////Gras////
  fill(201, 78, 7);
  strokeWeight(2)
  rect(0,400,800,50) 
  
  ///Bergen///
  strokeWeight(0)
  fill(144, 158, 149);
  triangle(400, 399, 100, 399, 250 , 100);
  
  fill(102, 102, 102)
  triangle(250, 399, 600, 399, 400, 60);
  
  fill(144, 158, 149)
  triangle(800, 399, 450, 399, 550, 150 );

  ///Zon///
  strokeWeight(0)
  fill(255)
  circle(sun, 75, sunshine)

  sunshine = 100 + Math.sin(frameCount * 0.05) * 6
  
  fill(219,208, 208)
  circle(sun,75, 50,)
  
  sun = sun + sunspeed;
  if(sun >= 850) {
    sun = -50;
  }

  ///Stoplicht///
 strokeWeight(2)
  fill(87, 87, 81)
  rect(500,300,25, 100)
  rect(487.5,240,50,130)
  fill(255,0,0)
  circle(512.5, 260, 30, 1)
  fill(255, 128, 0)
  circle(512.5, 300, 30)
  fill(0, 204, 0)
  circle(512.5, 340, 30)

///Wolken///
  
  ///Wolk1///
  strokeWeight(0)

  fill(160, 160, 160)
  circle(925 - cloud1, 80, 50)
  circle(885 - cloud1, 90, 50)
  circle(960 - cloud1, 90, 50)
  
  fill(244, 244, 244);
  circle(890 - cloud1, 100, 50)
  circle(925 - cloud1, 95, 65)
  circle(960 - cloud1, 100, 50)
  cloud1 = (frameCount * cloudSpeed1 % 1000);
 
  ///Wolk2///
  fill(160, 160, 160)

  circle(940 - cloud2, 40, 50)
  circle(970 - cloud2, 25, 50)
  circle(1000 - cloud2,40, 50)
  
  fill(244, 244, 244)
  
  circle(950 - cloud2, 50, 50)
  circle(975 - cloud2, 35, 55)
  circle(1000 - cloud2, 50, 50)
  cloud2 = (frameCount * cloudSpeed2 % 1000);

  ///Wolk3///
  fill(160, 160, 160)
  
  circle(952.5 - cloud3, 160, 50,)
  circle(997.5 - cloud3, 164, 50,)
  circle(977.5 - cloud3, 150, 50)
  
  fill(244, 244, 244)
  
  circle(950 - cloud3, 175, 50)
  circle(975 - cloud3, 160, 55)
  circle(1000 - cloud3, 175, 50)
  cloud3 = (frameCount * cloudSpeed3 % 1000);

  ///Bomen///
  fill(102, 51, 0)
  ///Boom1//
  rect(125, 335, 25, 115)
  
  ///Boom2///
  rect(225, 340, 25, 100)
  
  ///Boom3//
  rect(350, 335, 25, 115)
  
  ///Boom4///
  rect(700, 275, 25, 175)

  ///Takken///
  rect(120, 330, 25, 60)
  rect(230, 350, 25, 60)
  rect(360, 320, 25, 60)
  rect(600, 310, 100, 10)
  rect(600, 250, 20, 60)

  ///Bladeren///
  ///Boom 1B///
  fill(255, 128, 0)
  circle(125, 310, 60)
  fill(102, 0, 0)
  circle( 130, 330, 60)
  fill(165, 69, 13)
  circle(140, 320, 70)
  fill(102, 0, 0)
  circle(140, 310, 75)

  ///Boom 2B///
  fill(255, 128,0)
  circle(230, 330, 75)
  fill(102, 0, 0)
  circle(235, 345, 55)
  fill(124, 55, 14)
  circle(250, 330, 60, 30)

  ///Boom 3B///
  fill(102, 0, 0)
  circle(360, 335, 80)
  fill(255, 128, 0)
  circle(350, 330, 65)
  fill(122, 40, 47)
  circle(370, 360, 60)

  ///Boom 4B///
  fill( 255, 128, 0)
  circle(600, 250, 80)
  fill(102, 0, 0)
  circle(610, 240, 70)
  fill(135, 72, 17)
  circle(600, 280, 40)
  fill(102, 0, 0)
  circle(700, 250, 120)
  fill(255, 128, 0)
  circle(720, 280, 100)
  fill(181, 84, 0)
  circle(715, 260, 110)
  


        
  
  
  
  
  
  
  
  
  
  
  
}