
var world = 13;

var player_camera = {x:0,y:0,maxX:300,maxY:300};
var main_player;







//
// Game object
//

var Keyboard = new Keyboard();
var Game = {};

Game.run = function () {
    
    this.init();
    

    

    
};


Game.init = function () {
    Keyboard.listenForEvents(
        [Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN,Keyboard.ENTER,Keyboard.Space,Keyboard.ESC,Keyboard.p,Keyboard.r]);
    this.tileAtlas =imageManager.getImage("tiles");
    
    
    
 
    
    
    
};


Game.getSourceX = function(tile){
    return((tile > TILE_CAPACITY_IN_TILESHEET) ? (tile % TILE_CAPACITY_IN_TILESHEET - 1) * map.tsize : (tile - 1) * map.tsize);
}
Game.getSourceY = function(tile){
    return((tile > TILE_CAPACITY_IN_TILESHEET) ? Math.floor(tile/TILE_CAPACITY_IN_TILESHEET) * map.tsize : 0);
}

//TILE DRAWING

Game.drawLayer = function (layer) {
    
    var sourceX ;
    var sourceY ;
 
   

    var startCol = Math.floor(player_camera.x / map.tsize);
    
    var endCol = startCol + TOTAL_COL;
    
    var startRow = Math.floor(player_camera.y / map.tsize);
    var endRow = startRow + TOTAL_ROW;
    
    
    
    for (var c = startCol; c <= endCol; c++) {
        
        for (var r = startRow; r <= endRow; r++) {
            
            if(world ==0) {
                
                var tile = map.getTile(layer,c,r);
    
            } else if (world==1){
                
                var tile = room_map.getRoomTile(layer,c,r);
                
            }
            else if(world ==2){
                var tile = mart.getMartTile(layer,c,r);
            }else if (world==3) {
                var tile = second_room.getSecondRoomTile(layer,c,r);
            }
            else if (world==4) {
                var tile = professor_room.getProfessorTile(layer,c,r);
            }
            else if (world==5) {
                var tile = room_four.getRoomFourTile(layer,c,r);
            }else if (world==6) {
                var tile = route.getRouteTile(layer,c,r);
            }
            else if (world==7) {
                var tile = city_one.getCityOneTile(layer,c,r);
            }
            else if (world==8) {
                var tile = city_room_one.getCityRoomOneTile(layer,c,r);
            }
            else if (world==9) {
                var tile = city_room_two.getCityTwoTile(layer,c,r);
            }
            else if (world==10) {
                var tile = city_room_three.getCityThreeTile(layer,c,r);
            }
            else if(world ==11){
                var tile =0;
            }
            else if(world ==12){
                var tile =0;
            }
            else if(world ==13){
                var tile =0;
            }
            

            sourceX= this.getSourceX(tile);
            sourceY= this.getSourceY(tile);

    
            
            var x = c;
            var y = r;
            
            if (tile !== 0) { 
                 context.drawImage(
                    
                    this.tileAtlas, // image
                    
                   sourceX,
                    sourceY, // source y
                    map.tsize, // source width
                    map.tsize, // source height
                    Math.floor(x*TILE_SIZE-player_camera.x),  // target x
                    Math.floor(y*TILE_SIZE-player_camera.y), // target y
                    map.tsize, // target width
                    map.tsize // target height

                );
                
                
            }
            
        }
    }

    
    
        
};

Game.render = function () {
    
    if(world ==11){
    context.fillStyle = "#90EE90";
    context.fillRect(0, 0, canvas.width,canvas.height);

   context.beginPath();

    context.lineWidth = "5";

    context.fillStyle = "green";

    context.fillRect(0, 540, 410, 250);

    context.stroke();

    context.font = "40px Arial";
    context.fillStyle = "white";
    var txt="What will you do?";
    context.fillText(txt, 30,600)


    //POKEBALL COUNT
    context.beginPath();

    context.lineWidth = "5";

    context.fillStyle = "Gold";

    context.fillRect(411, 330, 230, 100);

    context.stroke();

    context.font = "29px Arial";
    context.fillStyle = "white";
    var txt="POKEBALL";
    var txt1="Left : "+player.balls;
    context.fillText(txt, 440,375)
    context.fillText(txt1, 470,420)



    
    
    


//PLAYER CHOICES 
   
   context.beginPath();

    context.lineWidth = "5";

    context.fillStyle = "blue";

    context.fillRect(411, 540, 230, 250);

    context.stroke();

    context.font = "29px Arial";
    context.fillStyle = "yellow";
    var txt="POKEBALL (P)";
    var txt1="RUN (R)"
    context.fillText(txt, 415,575)
    context.fillText(txt1, 470,610)

    }

//MAIN TITLE
    else if(world ==13){
        context.drawImage(backimg,0,0,canvas.width,canvas.height);
        context.font = "29px Arial";
    context.fillStyle = "yellow";
    var txt="Press Enter for help";
    context.fillText(txt, 20,40)
    }

    
    // draw map bot layer
    this.drawLayer(0);
    
    
    // draw map top layer
    this.drawLayer(1);
    
    
    
    

};


//FETCH IMAGES
Game.tick = function () {
    
    if(world ==0 ){
        
        this.tileAtlas =imageManager.getImage("tiles");
    } else if (world==1) {
        this.tileAtlas =imageManager.getImage("room");
    } else if (world==2) {
        this.tileAtlas =imageManager.getImage("mart");
    }else if (world==3) {
        this.tileAtlas =imageManager.getImage("room");
    }else if (world==4) {
        this.tileAtlas =imageManager.getImage("room");
    }else if (world==5) {
        this.tileAtlas =imageManager.getImage("room");
    }
    else if (world==5) {
        this.tileAtlas =imageManager.getImage("room");
    }else if(world ==6){
        this.tileAtlas =imageManager.getImage("tiles");
    }else if(world ==7){
        this.tileAtlas =imageManager.getImage("tiles");
    }else if(world ==8){
        this.tileAtlas =imageManager.getImage("room");
    }else if(world ==9){
        this.tileAtlas =imageManager.getImage("room");
    }else if(world ==10){
        this.tileAtlas =imageManager.getImage("room");
    }

    
    
    Game.render();
}.bind(Game);



Game.moveCharacter = function(input){
    
player.movePlayer(input);    
    
    
        
    
}



//
// start up function
//
var canvas;
var context;
canvas = document.getElementById('pokemon_container');
context = canvas.getContext('2d');
var player;

var Side1,Side3;
var pokeballs;
var Backgroundsound;
var intro;
var backimg;


function onDone(){
    
    //start screen img
    backimg=imageManager.getImage("backimg")
    
    //player_obj
    player = new Characters(Game,canvas, context, imageManager.getImage("characters"));

      

    //pokeballs
    pokeballs = new PokeBall(context, imageManager.getImage("PokemonBall"));

    //side_characters
    Side1 = new SideCharacter(context,imageManager.getImage("sideOne"));
    Side1.setXY(150,300);
    Side2 = new SideCharacter(context,imageManager.getImage("sideTwo"));
    Side2.setXY(600,100);
    Side3 = new SideCharacter(context,imageManager.getImage("sideThree"));
    Side3.setXY(600,600);
    Side4 = new SideCharacter(context,imageManager.getImage("sideFour"));
    Side4.setXY(130,190);
    Side5 = new SideCharacter(context,imageManager.getImage("sideFive"));
    Side5.setXY(600,190);
    Side6 = new SideCharacter(context,imageManager.getImage("sideSix"));
    Side6.setXY(600,600);
    Side7 = new SideCharacter(context,imageManager.getImage("sideSeven"));
    Side7.setXY(150,300);
    Side8 = new SideCharacter(context,imageManager.getImage("sideEight"));
    Side8.setXY(600,100);
    Side9 = new SideCharacter(context,imageManager.getImage("sideNine"));
    Side9.setXY(600,600);
    Side10 = new SideCharacter(context,imageManager.getImage("sideTen"));
    Side10.setXY(150,300);
    Side11 = new SideCharacter(context,imageManager.getImage("sideEleven"));
    Side11.setXY(600,200);
    Side12 = new SideCharacter(context,imageManager.getImage("sideTwelve"));
    Side12.setXY(600,600);
    Side13 = new SideCharacter(context,imageManager.getImage("sideThirteen"));
    Side13.setXY(150,400);
    Side14 = new SideCharacter(context,imageManager.getImage("sideFourteen"));
    Side14.setXY(600,100);
    Side15 = new SideCharacter(context,imageManager.getImage("sideFifteen"));
    Side15.setXY(580,600);
    snorlax = new SideCharacter(context,imageManager.getImage("snorlax"));
    snorlax.setXY(550,350);
    Side16 = new SideCharacter(context,imageManager.getImage("sideSixteen"));
    Side16.setXY(800,100);
    Side17 = new SideCharacter(context,imageManager.getImage("sideSeventeen"));
    Side17.setXY(280,100);
    Side18 = new SideCharacter(context,imageManager.getImage("sideEighteen"));
    Side18.setXY(600,720);
    Side19 = new SideCharacter(context,imageManager.getImage("sideNineteen"));
    Side19.setXY(150,100);
    Side20 = new SideCharacter(context,imageManager.getImage("sideTwenty"));
    Side20.setXY(720,400);
    Side21 = new SideCharacter(context,imageManager.getImage("sideTwentyone"));
    Side21.setXY(465,110);
    Side22 = new SideCharacter(context,imageManager.getImage("sideTwentytwo"));
    Side22.setXY(465,90);
    Side23 = new SideCharacter(context,imageManager.getImage("sideTwentythree"));
    Side23.setXY(465,90);
    Side24 = new SideCharacter(context,imageManager.getImage("sideTwentyfour"));
    Side24.setXY(465,490);
    

    //Pokemon
    PokemonStand  = new Pokemon(context,imageManager.getImage("PokemonStand"));
    PokemonStand.setXY(500,350);
    PlayerStand  = new Pokemon(context,imageManager.getImage("PlayerStand"));
    PlayerStand.setXY(190,745);
    Pokemon1 = new Pokemon(context,imageManager.getImage("Pokemon1"));
    Pokemon1.setXY(550,286);
    Pokemon2 = new Pokemon(context,imageManager.getImage("Pokemon2"));
    Pokemon2.setXY(550,286);
    Pokemon3 = new Pokemon(context,imageManager.getImage("Pokemon3"));
    Pokemon3.setXY(550,270);
    Pokemon4 = new Pokemon(context,imageManager.getImage("Pokemon4"));
    Pokemon4.setXY(550,286);
    Pokemon5 = new Pokemon(context,imageManager.getImage("Pokemon5"));
    Pokemon5.setXY(550,286);
    Pokemon6 = new Pokemon(context,imageManager.getImage("Pokemon6"));
    Pokemon6.setXY(550,260);
    Pokemon7 = new Pokemon(context,imageManager.getImage("Pokemon7"));
    Pokemon7.setXY(550,286);
    Pokemon8 = new Pokemon(context,imageManager.getImage("Pokemon8"));
    Pokemon8.setXY(550,286);
    Pokemon9 = new Pokemon(context,imageManager.getImage("Pokemon9"));
    Pokemon9.setXY(550,270);
    Pokemon10 = new Pokemon(context,imageManager.getImage("Pokemon10"));
    Pokemon10.setXY(550,286);
    PokemonBall = new Pokemon(context,imageManager.getImage("PokemonBall"));
    PokemonBall.setXY(50,560);

    

    
    Game.run(); 
    player.init();
    
}

var imageManager = new ImageManager();
imageManager.load({

    //tileset
    "tiles":"tilesheet/tile_3.png"
    ,"characters":"Sprites/main_boy_run.png"
    ,"BigCharacter":"Sprites/main_boy_battle.png"
    ,"room":"tilesheet/room_tileset.png"
    ,"mart":"tilesheet/Mart interior.PNG"

    //side_characters_images
    ,"sideOne":"Sprites/side_char_1.png"
    ,"sideTwo":"Sprites/side_char_2.png"
    ,"sideThree":"Sprites/side_char_3.png"
    ,"sideFour":"Sprites/side_char_4.png"
,"sideFive":"Sprites/side_char_5.png"
,"sideSix":"Sprites/side_char_6.png"
,"sideSeven":"Sprites/side_char_7.png"
,"sideEight":"Sprites/side_char_8.png"
,"sideNine":"Sprites/side_char_9.png"
,"sideTen":"Sprites/side_char_10.png"
,"sideEleven":"Sprites/side_char_11.png"
,"sideTwelve":"Sprites/side_char_12.png"
,"sideThirteen":"Sprites/side_char_13.png"
,"sideFourteen":"Sprites/side_char_14.png"
,"sideFifteen":"Sprites/side_char_15.png"
,"snorlax":"Sprites/side_char_snorlax.png"
,"sideSixteen":"Sprites/side_char_16.png"
,"sideSeventeen":"Sprites/side_char_17.png"
,"sideEighteen":"Sprites/side_char_18.png"
,"sideNineteen":"Sprites/side_char_19.png"
,"sideTwenty" : "Sprites/side_char_20.png"
,"sideTwentyone" : "Sprites/side_char_21.png"
,"sideTwentytwo" : "Sprites/side_char_22.png"
,"sideTwentythree" : "Sprites/side_char_23.png"
,"sideTwentyfour" : "Sprites/side_char_24.png"


//pokemon_images
,"Pokemon1" : "Sprites/pokemon_1.png"
,"Pokemon2" : "Sprites/pokemon_2.png"
,"Pokemon3" : "Sprites/pokemon_3.png"
,"Pokemon4" : "Sprites/pokemon_4.png"
,"Pokemon5" : "Sprites/pokemon_5.png"
,"Pokemon6" : "Sprites/pokemon_6.png"
,"Pokemon7" : "Sprites/pokemon_7.png"
,"Pokemon8" : "Sprites/pokemon_8.png"
,"Pokemon9" : "Sprites/pokemon_9.png"
,"Pokemon10" : "Sprites/pokemon_10.png"
,"PokemonBall" : "Sprites/pokebal.png"
,"PokemonStand" : "Sprites/grass.png"
,"PlayerStand" : "Sprites/player_stand.png"

//TITLE IMAGE
,"backimg" : "Sprites/backimg.jpg"
}, onDone);



