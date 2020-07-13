function Camera(map, width, height) {
    console.log(map);
    
    this.x = 0;
    this.y = 0;
    this.SPEED = 250; // pixels per second
    this.width = width;
    this.height = height;
    this.maxX = map.cols * map.tsize - width;
    this.maxY = map.rows * map.tsize - height;
    var self =this;    
    
    // this.move = function(delta,dirx,diry){
    //     console.log(this);    
    // // this.x += dirx * this.SPEED * delta;
    // // this.y += diry * this.SPEED * delta;
    
    // // clamp values
    // this.x = Math.max(0, Math.min(this.x, this.maxX));
    // this.y = Math.max(0, Math.min(this.y, this.maxY));
    // }
}






// Game.init = function () {
//     Keyboard.listenForEvents(
//         [Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN]);
//     this.tileAtlas =imageManager.getImage("tiles");
//     this.camera = new Camera(map, 620, 620);
// };

// Game.update = function (delta) {
//     // handle camera movement with arrow keys
//     var dirx = 0;
//     var diry = 0;
//     if (Keyboard.isDown(Keyboard.LEFT)) { dirx = -1; }
//     if (Keyboard.isDown(Keyboard.RIGHT)) { dirx = 1; }
//     if (Keyboard.isDown(Keyboard.UP)) { diry = -1; }
//     if (Keyboard.isDown(Keyboard.DOWN)) { diry = 1; }

//     this.camera.move(delta, dirx, diry);
// };
// Game.getSourceX = function(tile){
//     return((tile > TILE_CAPACITY_IN_TILESHEET) ? (tile % TILE_CAPACITY_IN_TILESHEET - 1) * map.tsize : (tile - 1) * map.tsize);
// }
// Game.getSourceY = function(tile){
//     return((tile > TILE_CAPACITY_IN_TILESHEET) ? Math.floor(tile/TILE_CAPACITY_IN_TILESHEET) * map.tsize : 0);
// }

// Game.drawLayer = function (layer) {
//     var startCol = Math.floor(this.camera.x / map.tsize);
    
//     var endCol = startCol + (this.camera.width / map.tsize);
    
//     var startRow = Math.floor(this.camera.y / map.tsize);
//     var endRow = startRow + (this.camera.height / map.tsize);
//     var offsetX = -this.camera.x + startCol * map.tsize;
//     var offsetY = -this.camera.y + startRow * map.tsize;

//     for (var c = startCol; c <= endCol; c++) {
    
//         for (var r = startRow; r <= endRow; r++) {
            
//             var tile = map.getTile(layer, c, r);
            
    
//             var x = (c - startCol) * map.tsize + offsetX;
//             var y = (r - startRow) * map.tsize + offsetY;
//             if (tile !== 0) { // 0 => empty tile
//                  context.drawImage(
//                     this.tileAtlas, // image
                    
//                     Game.getSourceX(tile),
//                     Game.getSourceY(tile), // source y
//                     map.tsize, // source width
//                     map.tsize, // source height
//                     Math.round(x),  // target x
//                     Math.round(y), // target y
//                     map.tsize, // target width
//                     map.tsize // target height

//                 );
                
//             }
            
//         }
//     }

    
//     player.init();
        
// };

// Game.render = function () {
//     // draw map background layer
    
//     this.drawLayer(0);
    
    
//     // draw map top layer
//     this.drawLayer(1);
    
    
    
    

// };

// Game.drawCharacter = function(canvas,context){
//     this.player = new Characters(canvas,context);

    
    
// };
