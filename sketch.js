var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  
  movingRect = createSprite(400, 200, 80, 50);
  movingRect.shapeColor = "blue";
  
  fixedRect = createSprite(200, 300, 50, 80);
  fixedRect.shapeColor="red";
}

function draw() {
  background(0);  
  movingRect.y=mouseY;
  movingRect.x=mouseX;

  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y < movingRect.width/2+fixedRect.width/2
    && fixedRect.y-movingRect.y < movingRect.width/2+fixedRect.width/2
    
    )
  
  
    {
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor="yellow";
  }
  else
  {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor="red";
  }

  drawSprites();
}