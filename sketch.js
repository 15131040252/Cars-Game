var gameStatesketch = 0; 
var playerCountsketch;
var allPlayersketch;
var database;

var formobj
var gameobj 
var playerobj;

var car1 , car2 , car3 , car4;
var cars;
var carimages;

function preload()
{
   track = loadImage("Images/ovaltrack.png")
   car1l_img = loadImage("Images/jackL.png")
   car1d_img = loadImage("Images/jackD.png")
   car1r_img = loadImage("Images/jackR.png")
   car1u_img = loadImage("Images/jackU.png")
   car2l_img = loadImage("Images/lqueenL.png")
   car2d_img = loadImage("Images/lqueenD.png")
   car2r_img = loadImage("Images/lqueenR.png")
   car2u_img = loadImage("Images/lqueenU.png")
   car3l_img = loadImage("Images/franL.png")
   car3d_img = loadImage("Images/franD.png")
   car3r_img = loadImage("Images/franR.png")
   car3u_img = loadImage("Images/franU.png")
   car4l_img = loadImage("Images/chickL.png")
   car4d_img = loadImage("Images/chickD.png")
   car4r_img = loadImage("Images/chickR.png")
   car4u_img = loadImage("Images/chickU.png")
}


function setup(){
    createCanvas(displayWidth-10,displayHeight-30);
    database = firebase.database();  
    
    gameobj = new Game();
    gameobj.readGamestate();
    gameobj.start();
}

function draw()
{
  if(playerCountsketch === 4) 
  {
     gameobj.writeGamestate(1);
  }

  if(gameStatesketch === 1)
  {
     clear();
     gameobj.play();
  }

  if(gameStatesketch === 2)
  {
     gameobj.end();
  }
}