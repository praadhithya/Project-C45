class Game{
    constructor(){
        
    }
    getState()
{ var gameStateRef = database.ref('gamestate');
 gameStateRef.on("value",function(data)
 { gamestate = data.val();}) 
}

update(state)
{ database.ref('/').update({ gamestate: state }); 
}

async start()
{ if(gamestate === 0)
    { player = new Player();
      var playerCountRef = await database.ref('playercount').once("value");
       if(playerCountRef.exists()){
          playercount = playerCountRef.val();
         player.getCount(); 
         console.log(playercount);
        }
    form = new Form();
    form.display();
     }
     ground1 = createSprite(500,400,1000,20);
     ground1.addImage("ground",groundImg);
     ground1.x = ground1.width /2;
     ground1.visible = false;

     ground2 = createSprite(500,700,1000,20);
     ground2.addImage("ground",groundImg);
     ground2.x = ground2.width /2;
     ground2.visible = false;
     ground=[ground1,ground2]

     invisibleGround1 = createSprite(500,410,1000,10);
     invisibleGround1.visible = false;

     invisibleGround2 = createSprite(500,700,1000,10);
     invisibleGround2.visible = false;
     invisibleGround = [invisibleGround1,invisibleGround2]

    // obstaclesGroup = new Group()

     trex1 = createSprite (100,400);
     trex1.addAnimation("running",trexImg)
     trex1.visible = false;
     trex2 = createSprite (100,700);
     trex2.addAnimation("running",trexImg)
     trex2.visible = false;
     trexs = [trex1,trex2]
    }

    play(){ 
        form.hide();
           Player.getPlayerInfo();
       
            if(allPlayers !== undefined){ 
             background(180)
             trex1.visible = true;
             trex2.visible = true;
             ground1.visible = true;
             ground2.visible = true;
             var index = 0;
             var x = 50 ;
             
             var y;
              for(var plr in allPlayers){
               index = index + 1 ;
               // x = x + 270;
               // y = displayHeight - allPlayers[plr].distance;
                ground[index-1].velocityX = -(6)// + 3*score/100);

                 trexs[index-1].x = x;
                // trexs[index-1].y = y;
                   if (index === player.index){
                            stroke(10)
                            fill("red")
                            //ellipse(x,y,65,65)
                            trexs[index - 1].shapeColor = "red";
                            if(keyDown("space") && trexs[index-1].y >= 346){
                                console.log(trexs[index-1].y)
                                trexs[index-1].velocityY = -12
                            }

                            //add gravaty
                            trexs[index-1].velocityY = trexs[index-1].velocityY + 0.8
                            if(keyDown("space") && trexs[index].y >= 346){
                                
                                trexs[index].velocityY = -12
                            }
                         //   console.log(trexs[index].y)
                            //reset ground
                            if (ground[index-1].x < 0){
                                ground[index-1].x = ground[index-1].width/2;
                              }
                        //    spawnObstacles1()
                        //    spawnObstacles2()
                        //    spawnClouds()
                         // camera.position.x = displayWidth/2;
                         //  camera.position.y = cars[index-1].y;
                         trexs[index-1].collide(invisibleGround[index-1])
                         
                          }
                         }
                        }
     
                       
    //    if(keyIsDown(UP_ARROW) && player.index !== null)
    //    { player.distance +=50;
    //      player.update(); 
    //    }
    //    if (player.distance > 5300){
    //      gameState = 2
    //      gameState = 2 
    //      player.rank += 1
    //      Player.updateRank(player.rank) 
    //      alert( player.name + "reached the finish line successfully!!!! ur rank is :: " + player.rank);
    //    }
       drawSprites()
    }
}
 //  function spawnObstacles
//  function spawnObstacles1() {
//     if(frameCount % 60 === 0) {
//       var obstacle2 = createSprite(500,400,10,40);
      
//       //obstacle.debug = true;
//       obstacle2.velocityX = -(6 + 3*score/100);
      
//       //generate random obstacles
//       var rand = Math.round(random(1,6));
//       switch(rand) {
//         case 1: obstacle2.addImage(obs1);
//                 break;
//         case 2: obstacle2.addImage(obs2);
//                 break;
//         case 3: obstacle2.addImage(obs3);
//                 break;
//         case 4: obstacle2.addImage(obs4);
//                 break;
//         case 5: obstacle2.addImage(obs5);
//                 break;
//         case 6: obstacle2.addImage(obs6);
//                 break;
//         default: break;
//       }
      
      
//       //assign scale and lifetime to the obstacle           
//       obstacle2.scale = 0.5;
//       obstacle2.lifetime = 100;
//       //add each obstacle to the group
//       obstaclesGroup.add(obstacle2);
//     }
//   }
//   function spawnObstacles2() {
//     if(frameCount % 60 === 0) {
//       var obstacl1 = createSprite(500,700,10,40);
      
//       //obstacle.debug = true;
//       obstacle1.velocityX = -(6 + 3*score/100);
      
//       //generate random obstacles
//       var rand = Math.round(random(1,6));
//       switch(rand) {
//         case 1: obstacle1.addImage(obs1);
//                 break;
//         case 2: obstacle1.addImage(obs2);
//                 break;
//         case 3: obstacle1.addImage(obs3);
//                 break;
//         case 4: obstacle1.addImage(obs4);
//                 break;
//         case 5: obstacle1.addImage(obs5);
//                 break;
//         case 6: obstacle1.addImage(obs6);
//                 break;
//         default: break;
//       }
      
//       //assign scale and lifetime to the obstacle           
//       obstacle1.scale = 0.5;
//       obstacle1.lifetime = 100;
//       //add each obstacle to the group
//       obstaclesGroup.add(obstacle1);
//     }
//   }
 //  function spawnCloudes
//  function spawnClouds() {
//     //write code here to spawn the clouds
//     if (frameCount % 60 === 0) {
//       var cloud = createSprite(600,120,40,10);
//       cloud.y = Math.round(random(120,180));
//       cloud.addImage(cloud);
//       cloudImage.resize(50,50);
//       cloud.scale = 0.5;
//       cloud.velocityX = -3;
      
//        //assign lifetime to the variable
//       cloud.lifetime = 200;
      
//       //adjust the depth
//       cloud.depth = trex.depth;
//       trex.depth = trex.depth + 1;
      
//       //add each cloud to the group
//       cloudsGroup.add(cloud);
//     }
    
//   }