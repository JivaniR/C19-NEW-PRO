var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost= createSprite(200,200,50,50);
  ghost.addImage("abc", ghostImg);
  ghost.scale= 0.5;

  doorsGroup= new Group();
  climbersGroup= new Group();
  invisibleBlockGroup= new Group();
}

function draw() {
  background(200);
  
  

  

    if(gameState= "play"){
      if(tower.y > 400){
        tower.y = 300
      }
  
      if(keyDown("Space")){
  
        ghost.velocityY= -5;
  
      }
      ghost.velocityY+= 0.5;
  
      if(keyDown("RIGHT_ARROW")){
  
        ghost.x= ghost.x+1;
      }
  
      if(keyDown("LEFT_ARROW")){
  
        ghost.x= ghost.x-1;
      }
      spawnDoors();

      if(climbersGroup.isTouching(ghost)){
  
        ghost.velocityY= 0;
        
      }
        if(invisibleBlockGroup.isTouching(ghost)|| ghost.y>600){

          ghost.destroy();
        gameState= "end";
      }
    
    
    drawSprites();
    }
    if(gameState=== "end"){
background(0)
      stroke ("yellow");
      fill("yellow");
      textSize(30);
      text("Game over",230,250);
      climbersGroup.destroyEach();
    }
}


function spawnDoors(){

  if(frameCount% 240===0){
door= createSprite(200,-50)
door.addImage("abc",doorImg);
climber= createSprite(200,10);
climber.addImage("abc",climberImg);
invisibleBlock= createSprite(200,15);
invisibleBlock.width= climber.width;
invisibleBlock.height= climber.height;


door.velocityY= 1;
door.x= Math.round(random(120,400));
doorsGroup.add(door);
climber.velocityY= 1;
climber.x= door.x;
climbersGroup.add(climber);
invisibleBlock.x= door.x
invisibleBlock.velocityY= 1
invisibleBlockGroup.add(invisibleBlock);
ghost.depth= door.depth;
ghost.depth+=1;
  }
  
}