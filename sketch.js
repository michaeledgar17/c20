var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(500, 100,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
fixedRect.velocityX=4
movingRect.velocityX=-2
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  console.log(movingRect.x - fixedRect.x);
    console.log (fixedRect.width/2 + movingRect.width/2);

    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
 if( movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
 
    fixedRect.velocityY=-(fixedRect.velocityY)
    movingRect.velocityY=-(movingRect.velocityY)


 }
  
 if ( movingRect.x- fixedRect.x< fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
    fixedRect.velocityX=-(fixedRect.velocityX)
    movingRect.velocityX=-(movingRect.velocityX)
 
  }
  drawSprites();
}  



