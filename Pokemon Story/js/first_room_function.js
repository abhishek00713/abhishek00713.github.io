var Room={};

Room.getSourceX = function(tile){
    return((tile > TILE_CAPACITY_IN_TILESHEET) ? (tile % TILE_CAPACITY_IN_TILESHEET - 1) * room_map.tsize : (tile - 1) * room_map.tsize);
}
Room.getSourceY = function(tile){
    return((tile > TILE_CAPACITY_IN_TILESHEET) ? Math.floor(tile/TILE_CAPACITY_IN_TILESHEET) * room_map.tsize : 0);
}

Room.drawLayer = function (layer) {
    
    var sourceX ;
    var sourceY ;
 //   console.log('that',that);
    // console.log(that.x);
   

    var startCol = Math.floor(player_camera.x / room_map.tsize);
    
    var endCol = startCol + (30*room_map.tsize / room_map.tsize);
    
    var startRow = Math.floor(player_camera.y / room_map.tsize);
    var endRow = startRow + (30*room_map.tsize / room_map.tsize);
    // var offsetX = -camera.x + startCol * room_map.tsize;
    
    // var offsetY = -camera.y + startRow * room_map.tsize;
    
    
    for (var c = startCol; c <= endCol; c++) {
        
        for (var r = startRow; r <= endRow; r++) {
            
            var tile = room_map.getTile(layer, c, r);

            sourceX= this.getSourceX(tile);
            sourceY= this.getSourceY(tile);

    
            // var x = (c - startCol) * room_map.tsize + offsetX;
            // var y = (r - startRow) * room_map.tsize + offsetY;
            var x = c;
            var y = r;
            
            if (tile !== 0) { // 0 => empty tile
                 context.drawImage(
                    
                    this.tileAtlas, // image
                    
                   sourceX,
                    sourceY, // source y
                    room_map.tsize, // source width
                    room_map.tsize, // source height
                    Math.floor(x*31-player_camera.x),  // target x
                    Math.floor(y*31-player_camera.y), // target y
                    room_map.tsize, // target width
                    room_map.tsize // target height

                );
                // context.strokeRect(Math.round(x),Math.round(y),room_map.tsize,room_map.tsize);
                
            }
            
        }
    }

    
    
        
};

Room.render = function () {
    // draw room_map background layer
    
    this.drawLayer(0);
    
    
    // draw room_map top layer
    this.drawLayer(1);
    
    
    
    

};

Room.tick = function (elapsed) {
    // clear previous frame
    // context.clearRect(0, 0, 620, 620);
    // window.requestAnimationFrame(this.tick);

    

    // compute delta time in seconds -- also cap it
    var delta = (elapsed - this._previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.25); // maximum delta of 250 ms
    this._previousElapsed = elapsed;

    Room.update(delta);
    
    Room.render();
}.bind(Room);


Room.run = function () {
    console.log(this);
    this.init();
    this._previousElapsed = 0;

    
    
    // window.requestAnimationFrame(this.tick);
    
};

Room.init = function () {
    context.clearRect(0,0,620,620);
    Keyboard.listenForEvents(
        [Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN]);
    this.tileAtlas =imageManager.getImage("room");
    
    
    
 
    console.log('init ko',room_map);
    
    
};

