var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
 
}

function setup(){
  
  createCanvas(400,400);
  path = createSprite(200,400)
path.addImage(pathImg);

path.scale=1.2;

boy = createSprite(200,200);
boy.addAnimation("Jake",boy.boyImg);

boy.World.mouseX = 0,5;
boy.scale=0.07;
  
collide(leftBoundary);
leftBoundary=createSprite(0,0,100,800);


collide(rightBoundary);
rightBoundary=createSprite(410,0,100,800);

}

function draw() {
  background(0);
  path.velocityY = 4;
  
 boy = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftEdge);
    boy.collide(rightEdge);
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
