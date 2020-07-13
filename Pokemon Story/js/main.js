// 
//
// Asset loader
//
var world = 0;
var that ;
var Loader = {
    images: {}
};
var main_player;


//
// Keyboard handler
//

var Keyboard = {};

Keyboard.LEFT = 37;
Keyboard.RIGHT = 39;
Keyboard.UP = 38;
Keyboard.DOWN = 40;

Keyboard._keys = {};

Keyboard.listenForEvents = function (keys) {
    window.addEventListener('keydown', this._onKeyDown.bind(this));
    window.addEventListener('keyup', this._onKeyUp.bind(this));

    keys.forEach(function (key) {
        this._keys[key] = false;
        // console.log(this._keys[key]);
    }.bind(this));
    
    
}

Keyboard._onKeyDown = function (event) {
    var keyCode = event.keyCode;
    
    if (keyCode in this._keys) {
        event.preventDefault();
        this._keys[keyCode] = true;
        
        
        // console.log('keys',this._keys);
        // console.log('code',keyCode);
        
        Game.moveCharacter(keyCode);    


    }
    
};

Keyboard._onKeyUp = function (event) {
    var keyCode = event.keyCode;
    player.characterDirection =-1;
    if (keyCode in this._keys) {
        event.preventDefault();
        this._keys[keyCode] = false;
    }
};

Keyboard.isDown = function (keyCode) {
    if (!keyCode in this._keys) {
        throw new Error('Keycode ' + keyCode + ' is not being listened to');
    }
    
    
    return this._keys[keyCode];
};

//
// Game object
//

var Game = {};

Game.run = function () {
    console.log(this);
    this.init();
    this._previousElapsed = 0;

    
    
    // window.requestAnimationFrame(this.tick);
    
};


Game.init = function () {
    Keyboard.listenForEvents(
        [Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN]);
    this.tileAtlas =imageManager.getImage("tiles");
    
    
    
 
    console.log('init ko',map);
    
    
};

Game.update = function (delta) {
    // handle camera movement with arrow keys
    // var dirx = 0;
    // var diry = 0;
    // if (Keyboard.isDown(Keyboard.LEFT)) { dirx = -1; }
    // if (Keyboard.isDown(Keyboard.RIGHT)) { dirx = 1; }
    // if (Keyboard.isDown(Keyboard.UP)) { diry = -1; }
    // if (Keyboard.isDown(Keyboard.DOWN)) { diry = 1; }

    // // console.log(camera)
    // camera.move(delta, dirx, diry); 
    // console.log(camera.move());

    // player.setDelta(delta);
};
Game.getSourceX = function(tile){
    return((tile > TILE_CAPACITY_IN_TILESHEET) ? (tile % TILE_CAPACITY_IN_TILESHEET - 1) * map.tsize : (tile - 1) * map.tsize);
}
Game.getSourceY = function(tile){
    return((tile > TILE_CAPACITY_IN_TILESHEET) ? Math.floor(tile/TILE_CAPACITY_IN_TILESHEET) * map.tsize : 0);
}

Game.drawLayer = function (layer) {
    
    var sourceX ;
    var sourceY ;
 //   console.log('that',that);
    // console.log(that.x);
   

    var startCol = Math.floor(player_camera.x / map.tsize);
    
    var endCol = startCol + (30*map.tsize / map.tsize);
    
    var startRow = Math.floor(player_camera.y / map.tsize);
    var endRow = startRow + (30*map.tsize / map.tsize);
    // var offsetX = -camera.x + startCol * map.tsize;
    
    // var offsetY = -camera.y + startRow * map.tsize;
    
    
    for (var c = startCol; c <= endCol; c++) {
        
        for (var r = startRow; r <= endRow; r++) {
            
            if(world ==0) {
                var tile = map.getTile(layer, c, r);
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
            }
            
            
            

            sourceX= this.getSourceX(tile);
            sourceY= this.getSourceY(tile);

    
            // var x = (c - startCol) * map.tsize + offsetX;
            // var y = (r - startRow) * map.tsize + offsetY;
            var x = c;
            var y = r;
            
            if (tile !== 0) { // 0 => empty tile
                 context.drawImage(
                    
                    this.tileAtlas, // image
                    
                   sourceX,
                    sourceY, // source y
                    map.tsize, // source width
                    map.tsize, // source height
                    Math.floor(x*31-player_camera.x),  // target x
                    Math.floor(y*31-player_camera.y), // target y
                    map.tsize, // target width
                    map.tsize // target height

                );
                // context.strokeRect(Math.round(x),Math.round(y),map.tsize,map.tsize);
                
            }
            
        }
    }

    
    
        
};

Game.render = function () {
    // draw map background layer
    
    this.drawLayer(0);
    
    
    // draw map top layer
    this.drawLayer(1);
    
    
    
    

};

Game.tick = function (elapsed) {
    // clear previous frame
    // context.clearRect(0, 0, 620, 620);
    // window.requestAnimationFrame(this.tick);this.tileAtlas =imageManager.getImage("tiles");
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

    // compute delta time in seconds -- also cap it
    var delta = (elapsed - this._previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.25); // maximum delta of 250 ms
    this._previousElapsed = elapsed;

    Game.update(delta);
    
    Game.render();
}.bind(Game);



Game.moveCharacter = function(input){
    
player.movePlayer(input);    
    
    
        
    
}

// };

//
// start up function
//
var canvas;
var context;
canvas = document.getElementById('pokemon_container');
context = canvas.getContext('2d');
var player;
var camera;
var Side1;

// console.log(camera)

function onDone(){
    player = new Characters(Game,canvas, context, imageManager.getImage("characters"));
    camera = new Camera(map, 620, 620);    
    Side1 = new SideCharacter(context,imageManager.getImage("sideOne"));
    Side1.setXY(150,300);
    Side2 = new SideCharacter(context,imageManager.getImage("sideTwo"));
    Side2.setXY(600,100);
    Side3 = new SideCharacter(context,imageManager.getImage("sideTwo"));
    Side3.setXY(600,600);
    Side4 = new SideCharacter(context,imageManager.getImage("sideThree"));
    Side4.setXY(100,80);
    Side5 = new SideCharacter(context,imageManager.getImage("sideFour"));
    Side5.setXY(750,350);
    
    // that = camera;
    // console.log(that);

    
    
    // alert("Loading successful");
    // console.log(imageManager.getImage("tiles"));
    Game.run(); 
    player.init();
}

var imageManager = new ImageManager();
imageManager.load({"tiles":"./tilesheet/tile_3.png", "characters":"./Sprites/main_boy_run.png","room":"./tilesheet/room_tileset.png","mart":"./tilesheet/Mart interior.png","sideOne":"./Sprites/side_char_1.png","sideTwo":"./Sprites/side_char_2.png","sideThree":"./Sprites/side_char_3.png","sideFour":"./Sprites/side_char_4.png"}, onDone);
var player_camera = {x:0,y:0,maxX:300,maxY:300};