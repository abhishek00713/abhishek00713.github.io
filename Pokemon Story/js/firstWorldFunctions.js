function Camera(map, width, height) {
    
    
    this.x = 0;
    this.y = 0;
    this.SPEED = CAMERA_SPEED; // pixels per second
    this.width = width;
    this.height = height;
    this.maxX = map.cols * map.tsize - width;
    this.maxY = map.rows * map.tsize - height;
    var self =this;    
    
    
}





