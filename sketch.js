var leftPlatformImg, rightPlatformImg
var bigSImg, smallSImg
var platform1,platform2,platform3,platform4,platform5, platformB, platformS, ladder
var ladderImg
var fireImg, hammerImg
var marioImg, peachImg, dkImg



function preload(){
  leftPlatformImg = loadImage("Images/pLeft.png")
  rightPlatformImg = loadImage("Images/pRight.png")
  midImg = loadImage("Images/pMid.png")
  bigSImg = loadImage("Images/bigS.png")
  smallSImg = loadImage("Images/smallS.png")
  ladderImg = loadImage("Images/ladder.png")
  fireImg = loadImage("Images/fire.png")
  hammerImg = loadImage("Images/hammer.png")
  marioImg = loadImage("Images/Mario.png")
  peachImg = loadImage("Images/peach.jpeg")
  dkImg = loadImage("Images/dk.jpeg")

}





function setup() {
  createCanvas(800, 700);
  platform1 = createSprite(300, 150, 1000, 30);
  platform1.addImage(rightPlatformImg)
  platform1.scale = 0.6

  platform2 = createSprite(500, 280, 1000, 30);
  platform2.addImage(leftPlatformImg)
  platform2.scale = 0.6


  platform3 = createSprite(300, 380, 1000, 30);
  platform3.addImage(rightPlatformImg)
  platform3.scale = 0.6

  platform4 = createSprite(500, 500, 1000, 30);
  platform4.addImage(leftPlatformImg)
  platform4.scale = 0.6

  platform5 = createSprite(300, 650, 1000, 30);
  platform5.addImage(midImg)
  platform5.scale = 0.6

  platformB = createSprite(400, 60, 300, 30);
  platformB.addImage(bigSImg)
  platformB.scale = 0.5

  platformS = createSprite(250, 90, 300, 30);
  platformS.addImage(smallSImg)
  platformS.scale = 0.5

  ladder1 = createSprite(620, 210, 300, 30);
  ladder1.addImage(ladderImg)
  ladder1.scale = 0.5

  ladder2 = createSprite(180, 330, 300, 30);
  ladder2.addImage(ladderImg)
  ladder2.scale = 0.5

  ladder3 = createSprite(620, 440, 300, 30);
  ladder3.addImage(ladderImg)
  ladder3.scale = 0.5

  ladder4= createSprite(180, 550, 300, 30);
  ladder4.addImage(ladderImg)
  ladder4.scale = 0.5

  fire= createSprite(600, 590, 300, 30);
  fire.addImage(fireImg)
  fire.scale = 0.4

  hammer= createSprite(600, 305, 300, 30);
  hammer.addImage(hammerImg)
  hammer.scale = 0.4


  //platform1 = createSprite(400, 200, 50, 50);

}

function draw() {
  background("black");  
  drawSprites();
}