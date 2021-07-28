var shipImg
var seaImg
var ship_sprite

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(1000,400);

  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX=-5;
  sea.scale=0.3;
  
  ship_sprite = createSprite(130,200,30,30);
  ship_sprite.addAnimation("movingship",shipImg);
  ship_sprite.scale=0.25;
}

function draw() {
  background(0);
  sea.velocityX=-3

 
  

  // background.velocityX = 3;
  
 
//code to reset background
 if(sea.x < 0) {
  sea.x = sea.width/8;
  }
drawSprites();
}
