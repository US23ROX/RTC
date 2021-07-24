const START = 0
const PLAY = 1
const END = 2
var gameState = START;

var guard=[]
var captain
var bgImage
var boat
var invisibleGround;

 
function preload(){
  bgImage = loadImage("bg.png")
  
}

function setup(){
  createCanvas(displayWidth-20, displayHeight-20)
  boat = createSprite(displayWidth-195,displayHeight-80,20,40)
  boat.shapeColor='brown'

  captain = createSprite(displayWidth-195,displayHeight-80,20,20)
  //for(var e = 0;e<4;e++){
    //thug = createSprite(displayWidth-195,displayHeight-80,20,20)
 //s }
  captain.shapeColor='red'
  var ig = 660

  invisibleGround = createSprite(ig,displayHeight/2+160,800,15)
  //invisibleGround.visible = false;
  
  var x = 450
  var pos = 475
  
  var i = 0
  for(i = 0;i<8;i++){
    guard[i] = createSprite(x,displayHeight/2,20,20)
    guard[i].shapeColor='blue'
    x = x + 50;
  }
  for(var u = 0;u<7;u++){
    guard[i] = createSprite(pos,displayHeight/2+50,20,20)
    guard[i].shapeColor='blue'
    pos = pos+50
    i=i+1
  }


}

function draw(){
  background(bgImage);

  if(gameState === START){
    if(keyDown("up")){
      boat.y = boat.y - 7
      captain.y = captain.y-7
    }
    if(keyDown("left")){
      boat.x = boat.x - 7
      captain.x = captain.x-7
    }
    if(boat.isTouching(invisibleGround)){
      gameState = PLAY;
      captain.x = invisibleGround.x
      captain.y = invisibleGround.y-30
       
    }
  }
    
    if(gameState===PLAY){
      for(i = 0;i<15;i++){
        guard[i].velocityX=Math.round(random(-5,5))
        guard[i].velocityY=Math.round(random(-5,5))
      }
      if(keyDown("up")){
        captain.y=captain.y-3
      }
      if(keyDown("left")){
        captain.x=captain.x-3
      }
      if(keyDown("right")){
        captain.x=captain.x+3
      }
      boat.collide(invisibleGround)
      
    }
 
  drawSprites();
}