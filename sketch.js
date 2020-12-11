var hr, mn, sc;
var scAngle, mnAngle, hrAngle
var gameState = 0;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,0,60,0,360);
  hrAngle = map(hr,0,0,0,12,0,360);
}

function draw() {
  background(0,255,255);

if(gameState===0){
  push()
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  translate(this.body.position.x,this.body.position.y)
  pop()

  push()
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,100,0);
  translate(this.body.position.x,this.body.position.y)
  pop()

  push()
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,100,0);
  translate(this.body.position.x,this.body.position.y)
  pop()

  
}
  if(hrAngle%12===0){
    gameState = 1;
  }
  else{
    gameState = 0;
  }
  if(gameState===1){
   mousePressed();
  }

  drawSprites();
}
function mousePressed(){
  hrAngle=0;
  mnAngle=0;
  scAngle=0;
  fill("brown")
  textSize(20)
  text("YOU ESCAPED",200,400);
}