class Game
{
   constructor(){}
   
   readGamestate()
   {
     var gameStateref = database.ref("gamestate");
     gameStateref.on("value" ,function(data)
     {
        gameStatesketch = data.val();
     })
   }

   writeGamestate(gstate)
   {
      var writeGamestateref = database.ref("/");
      writeGamestateref.update({"gamestate" : gstate});
   }

   async start()
   {
      if(gameStatesketch === 0)
      {
         playerobj = new Player();
         var playercountref = await database.ref("playercount").once("value");
         if(playercountref.exists())
         {
            playerCountsketch = playercountref.val();
            playerobj.readCount();
         }
         
         formobj = new Form();
         formobj.display();

      }

         car1 = createSprite(100 , 200, 10 , 10);
         car1.addImage(car1l_img);
         car1.scale = 0.2;
         car2 = createSprite(200 , 200 , 10 , 10);
         car2.addImage(car2l_img);
         car2.scale = 0.25;
         car3 = createSprite(300 , 200 , 10 , 10);
         car3.addImage(car3l_img);
         car3.scale = 0.3;
         car4 = createSprite(400 , 200 , 10 , 10);
         car4.addImage(car4l_img);
         car4.scale = 0.25;
         
         cars = [car1 , car2 , car3 , car4]
         carimages = [[car1l_img , car2l_img , car3l_img , car4l_img] , [car1d_img , car2d_img , car3d_img , car4d_img] , [car1r_img , car2r_img , car3r_img , car4r_img] , [car1u_img , car2u_img , car3u_img , car4u_img]]
   }

   play()
   {
      formobj.disappear();
      playerobj.readPlayerinfo();
      playerobj.readCarsEnd();

      if(allPlayersketch !== undefined)
      {
         
         background("#c68767");
         imageMode(CENTER);
         image(track , displayWidth/2 ,displayHeight/2 , displayWidth-60 , displayHeight);
         console.log(displayWidth);
         console.log(displayHeight);
         var carIndex = 0;
         var x = displayWidth/2+50;
         var y = -40;

         cars[carIndex].x = x
         cars[carIndex].y = y

        //allplayers = [[Hitansh,20], [Ram, 150], [Gopal, 300], [Meena, 150]]
      
        for(var plr in allPlayersketch)
        {
          carIndex += 1 ;
          x += 50 - allPlayersketch[plr].distanceX;
          y += 80 - allPlayersketch[plr].distanceY;

                    
          if(carIndex === playerobj.index) 
          {
            stroke(10);
            fill("red");
            ellipse(x , y , 60 , 60);
            camera.position.x = displayWidth/2;
            camera.position.y = cars[carIndex - 1].y;

            cars[carIndex - 1].x = x
            cars[carIndex - 1].y = y
  
            console.log(allPlayersketch[plr]);
         
          if(keyDown("LEFT_ARROW") && playerobj.index !== null)
          {
            cars[carIndex - 1].addImage(carimages[0][carIndex-1]);
            playerobj.distanceX += 5;
            playerobj.writePlayerinfo();
            
            console.log(allPlayersketch[plr].distanceX);
            console.log(x);
          }

           if(playerobj.distanceX>590 && keyDown("DOWN_ARROW") && playerobj.index !== null)
           {
            cars[carIndex - 1].addImage(carimages[1][carIndex-1]);
            playerobj.distanceY -= 4;
            playerobj.writePlayerinfo();

            console.log(allPlayersketch[plr].distanceY);
            console.log(y);
           }

           if(playerobj.distanceY>-1000 && keyDown("RIGHT_ARROW") && playerobj.index !== null)
           {
            cars[carIndex - 1].addImage(carimages[2][carIndex-1]);
            playerobj.distanceX -= 5;
            playerobj.writePlayerinfo();
           }

           if(playerobj.distanceX>-1000 && keyDown("UP_ARROW") && playerobj.index !== null)
           {
            cars[carIndex - 1].addImage(carimages[3][carIndex-1]);
            playerobj.distanceY += 4;
            playerobj.writePlayerinfo();
           }
         }
         }  
         
      }
      drawSprites();   
   }

   end()
   {
      console.log("Game Ended");
      console.log(playerobj.rank);
   }
}