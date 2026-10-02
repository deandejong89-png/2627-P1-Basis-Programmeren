let kleurenR = []
let getalR = []
 
function setup() {
  createCanvas(380, 350);
  for (let i = 0; i < 5; i++) {
    kleurenR.push(color(random(255), random(255), random(255)));
  }
  for (let i = 0; i < 12; i++) {
    getalR.push(round(random(0,100)));
  }
}
 
function draw() {
  background(220);
  text("1." ,20, 15);
  text("2.", 20, 100);
  text("3.", 20, 190);
  text("4.", 20, 250);
  text("5.", 120, 15);
  text("6.", 120, 100);
  text("7.", 120, 190);
  text("8.", 120, 280);
  text("9.", 240, 15);
//1: Kleuren in een array
let kleuren = [ "red", "green", "blue", "purple", "yellow"]
for ( let i = 0; i < kleuren.length; i++) {
  fill(kleuren[i])
  text((kleuren[i]),40, 10 + i * 20)
}
//2: Pas de array aan met pop
  kleuren.shift("red");
  kleuren.push("red");
 for ( let i = 0; i < kleuren.length; i++) {
  fill(kleuren[i])
  text((kleuren[i]),40, 100 + i * 20)
}
//3: Twee kleuren weghalen
  kleuren.splice(1,2)
for ( let i = 0; i < kleuren.length; i++) {
  fill(kleuren[i])
  text((kleuren[i]),40, 200 + i * 20)
}
fill(0)
//4: Getallen filteren
let getallen = [400, 240, 10, 490, 30, 60, 244, 500, 301, 300]
let teller = 0;
for (let i = 0; i < getallen.length; i++) {
  if (getallen[i] < 300){
    text(getallen[i], 40, 250 + teller * 10);
    teller++;
  }
  }

 
 

 
}
 
 
 
 
 