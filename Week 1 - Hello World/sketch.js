function setup() {
  createCanvas(750, 500);
}

function draw() {
  background(220);
  fill(0);
  text("1. Dean de jong, ", 50, 50);
  text("2.", 50, 100);
  fill(255,0,0);
  strokeWeight(0);
  rect(75,100,100,25 );
  fill(255);
  rect(75,125,100,25)
  fill(0,0,255)
  rect(75,150,100,25);
  fill(0);
  text("3.", 50, 200);
  fill(255);
  strokeWeight(5);
  rect(70,225,90,90);
  strokeWeight(0)
  fill(0);
  rect(70,225,30,30);
  fill(0);
  rect(130, 225,30,30);
  fill(0);
  rect(100, 255, 30, 30);
  fill(0);
  rect(70,285,30,30);
  fill(0);
  rect(130,285,30,30);
  text("4.",50,350);
  strokeWeight(3.5);
  fill(220);
  rect(75, 375, 50,50);
  fill(0);
  line(75, 375, 100, 350);
  line(125,375,100, 350);
  fill(0);
  strokeWeight(0);
  text("5.",250, 50);
  fill(100);
  rect(275,50,50,175);
  fill(225,0,0);
  circle(300,75,35);
  fill(255,165,0);
  circle(300,125,35);
  fill(0,128,0);
  circle(300,175,35);
  fill(150);
  rect(287.5,225,25,60);
  fill(0);
  text("6.", 250,300);
  fill(255);
  strokeWeight(5);
  rect(275, 300, 100, 100,10);
  fill(0);
  circle(300,325,20);
  circle(325,350,20);
  circle(350,375,20);
  //Mario//
  strokeWeight(0)
  text("7.", 350, 50);
  //rood//
  fill(255, 0, 0);
  rect(420, 50, 60, 10);
  rect(410, 60, 100, 10);
  rect(410, 120, 70, 10);
  rect(400, 130, 100, 10);
  rect(390, 140, 120, 10);
  rect(410, 150, 80, 10);
  //huidskleur//
  fill(255, 219, 172);
  rect(440, 70, 30, 50);
  rect(470, 90, 10, 10);
  rect(470, 110, 30, 10);
  rect(420, 100, 20, 20);
  rect(430, 80, 10, 10);
  rect(410, 80, 10, 20);
  rect(490, 90, 30, 10);
  rect(480, 80, 30, 10);
  rect(480, 70, 10, 10);
  rect(490, 150, 20, 30);
  rect(390, 150, 20, 30);
  rect(410, 160, 80, 10);
  //zwart//
  fill(0)
  rect(470, 100, 40, 10);
  rect(480, 90, 10, 10);
  rect(470, 70, 10, 20);
  //bruin//
  fill(141, 85, 36)
  rect(410, 70, 30, 10);
  rect(420, 80, 10, 20);
  rect(430, 90, 10, 10);
  rect(400, 80, 10, 20);
  rect(400, 100, 20, 10);
  rect(470, 190, 30, 20);
  rect(400, 190, 30, 20);
  rect(500, 200, 10, 10);
  rect(390, 200, 10, 10);
  //blauw//
  fill(0, 0, 255)
  rect(420, 150, 60, 20);
  rect(430, 140, 40, 10);
  rect(410, 170, 80, 10);
  rect(410, 180, 30, 10);
  rect(460, 180, 30, 10);
  rect(430, 120, 10, 20);
  rect(460, 130, 10, 20);
  //geel//
  fill(255, 255, 0)
  rect(460, 150, 10, 10);
  rect(430, 150, 10, 10);
   fill(0)
  text("8.", 350,250,10,20)
  noStroke();
strokeWeight(1)
let pixelSize = 8;
  

let art = [
  "KKKKKBBBBBBBBBKKKKK",
  "KKKKBBBBBBBBBBBKKKK",
  "KKKBBBBBBBBBBBBBKKK",
  "KKBBBBBBBBBBBBBBBKK",
  "KKBBBBBBBBBBBBBBBBK",
  "KBBBBCCBBBBBBBBBBBK",
  "KBBBCCCCBCCCCBBBBBK",
  "KBBBCCDCCCCDCCBBBBB",
  "BBBCCCDCCCCDCCBBCBB",
  "BBBCCCDCCCCDCCBCCBB",
  "BBBCCCCCCCCCCCCCBBB",
  "BBBCPPCDCCDCPPCBBBB",
  "BBBBPPCCDDCCPPBBBBB",
  "BBBBBBCCCCCCBBBBBBB",
  "KBKBBBBBBCCBBBBBKBK",
  "KKKKKKKKBCCBKKKBKKK",
  "KKKKKKKBBBBBBBKKKKK",
  "KKKKBBBGBBBBGBBBKKK",
  "KKKBGBGGGGGGGGBGBKK",
  "KKBGBCCCCCCCCCBBGBK",
  "KKBGBCCCCCCCCCCBGBK",
  "KKBBBGGGGGGGGGGBBBK",
  "KKBCBBBBBBBBBBBBCbK",
  "KKBBBBBBBBBBBBBBBBK",
  "KKKKBBBBBBBBBBBBKKK",
  "KKKKBBBBBKBBBBBBKKK",
  "KKKKBBBBBKBBBBBBKKK",
  "KKKKKKBBBKBBBBKKKKK",
  "KKKKKKBBBKBBBBKKKKK",
  "KKKKKBBBBKBBBBBKKKK"
];

let startX = (width - 19 * pixelSize) / 1.5;
let startY = (height - 30 * pixelSize) / 1;

for (let y = 0; y < art.length; y++) {
  for (let x = 0; x < art[y].length; x++) {

    let pixel = art[y][x];

    if (pixel == "K") {
      fill(0, 0, 0);
    } 
    else if (pixel == "B") {
      fill(97, 31, 7);
    } 
    else if (pixel == "D") {
      fill(75, 37, 16);
    } 
    else if (pixel == "C") {
      fill(255, 247, 179);
    } 
    else if (pixel == "P") {
      fill(255, 183, 212);
    } 
    else if (pixel == "G") {
      fill(76, 209, 27);
    }

    rect(
      startX + x * pixelSize,
      startY + y * pixelSize,
      pixelSize,
      pixelSize
    );
  }
}
    
  
        

}
  
        

