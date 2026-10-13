let xMax = 400;
let yMax = 600;

let xinsegna = xMax/2;
let yinsegna = yMax/2;

let larghezza = 250;
let altezza = 430;

let bordo = 12;

let t = 0; // variabile tempo per l’oscillazione

function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  background(245, 235, 215);
  text("t:"+t.toFixed(2),20,20);

  push();

  // insegna rettangolare
  rectMode(CENTER);
  fill(255, 248, 225);
  stroke(80, 50, 35);
  strokeWeight(5);
  rect(xinsegna, yinsegna, larghezza, altezza, 25);

  // lucine sul bordo interno
  noStroke();
  if(floor(t) %2 == 0 ){ //floor è un comando che ho trovato con l'AI perchè avevo il problema della velocità con i numeri interi e la divisibilità con i decimali
    fill(255, 205, 90);
  } else if (floor(t)%5 == 0 ){
    fill(240, 115, 135);
  } else {
    fill(160, 195, 115);
  }

  // lucine sul lato superiore e inferiore
for (let i = 0; i < 5; i++) {

  ellipse(
    xinsegna - larghezza/2 + 10 + i* (larghezza-20)/4,
    yinsegna - altezza/2 + 20,
    bordo,
    bordo
  );

  ellipse(
    xinsegna - larghezza/2 + 10 + i* (larghezza-20)/4,
    yinsegna + altezza/2 - 20,
    bordo,
    bordo
  );

}

  // lucine sui lati verticali
for (let i = 0; i < 5; i++) {
  ellipse(
    xinsegna - larghezza/2 + 10,
    yinsegna - altezza/2 + 80 + i*70,
    bordo,
    bordo
  );

  ellipse(
    xinsegna + larghezza/2 - 10,
    yinsegna - altezza/2 + 80 + i*70,
    bordo,
    bordo
  );
}

  // cono del gelato
  fill(210, 145, 75);
  stroke(110, 70, 40);
  strokeWeight(2);

  triangle(
    xinsegna-50, yinsegna+5,
    xinsegna+50, yinsegna+5,
    xinsegna, yinsegna+115
  );
// raggi decorativi intorno alla pallina
stroke(180, 125, 65);
strokeWeight(2);


  // pallina 1
  fill(240, 115, 135);
  stroke(130, 65, 65);
  ellipse(xinsegna-25, yinsegna-5, 65, 65);

  // pallina 2
  fill(160, 195, 115);
  stroke(75, 110, 65);
  ellipse(xinsegna+25, yinsegna-5, 65, 65);

  // pallina 3
  fill(255, 220, 145);
  stroke(160, 115, 65);
  ellipse(xinsegna, yinsegna-50, 65, 65);

  pop();


  
t += 0.1; // velocità del cambio colore


}