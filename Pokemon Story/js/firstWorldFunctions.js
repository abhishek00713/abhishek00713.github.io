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
    
    
}





