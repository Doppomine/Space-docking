var issImg, iss;
var bgImg;
var spaceCraft, spaceCraftImg;

function preload(){
issImg = loadImage("assets/iss.png");
bgImg = loadImage("assets/spacebg.jpg");
spaceCraftImg = loadAnimation("assets/s1.png","assets/s2.png","assets/s3.png","assets/s4.png");
}

function setup() {
  createCanvas(1200,800);
  
  iss = createSprite(600, 300, 50, 50);
  iss.addImage(issImg)

  spaceCraft = createSprite(200,200)
  spaceCraft.addAnimation("spaceCraft",spaceCraftImg)
  spaceCraft.scale = 0.2
}

function draw() {
  background(bgImg); 
  if(keyDown("RIGHT_ARROW")){
    spaceCraft.x += 5
  } 
  if(keyDown("LEFT_ARROW")){
    spaceCraft.x -= 5
  } 
  if(keyDown("UP_ARROW")){
    spaceCraft.y -= 5
  } 
  if(keyDown("DOWN_ARROW")){
    spaceCraft.y += 5
  } 



  console.log(spaceCraft.x +","+ spaceCraft.y)
  drawSprites();
  
  if(hasDocked()){
    fill("white")
    textSize(32)
    text("Docking successful",300,600 )
    
    
  }
}


function hasDocked (){
 if (spaceCraft.x <550 && spaceCraft.x >500 && spaceCraft.y >350 && spaceCraft.y <400 ){
   return true 

 }


}