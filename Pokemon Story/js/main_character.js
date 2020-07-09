function Characters(canvas,context, image){
    this.x=300;//130 for collisiom
    this.y=400;//70
    var old_x,old_y;
    var new_x =this.x;
    var new_y = this.y ;
    this.width = 30;
    this.height = 50;
    const scale =2;
    dx=2;
    dy=2;
    var self = this;
    var leftCollision = false;
    var rightCollision = false;
    var topCollision = false;
    var bottomCollision = false;
    const scaledWidth = scale * this.width;
    const scaledHeight = scale * this.height;
    const img = image;
    collision_left =[118,];
    collision_right =[70,];
    collision_top=[150];
    collision_bot =[]
    var column 
    var row 
    // if(this.x % 31 !==0) column++;
    // if(this.y %31 !==0) row++;
    console.log(column, row)
    var tile 

    console.log('tile',tile);
    
    this.drawFrame = function(frameX, frameY, canvasX, canvasY){
        

        // console.log('cy',canvasY);
        // console.log('fx',frameX);
        // console.log('fy',frameY);
        // context.clearRect(canvasX,canvasY,this.width,this.height);
        context.drawImage(img,
            frameX * this.width, frameY * this.height, this.width, this.height,
            canvasX, canvasY, scaledWidth, scaledHeight);
            
    }
    let spriteX = 0;
    let spriteY = 0;

    this.movePlayer = function(keyword){
        old_x = new_x;
        old_y = new_y;
        
        if(keyword == 37){
            
           spriteX =  1;
           spriteY = 1;
            new_x-=dx;
            
            
            this.collisionDetection(new_x,new_y);
            
            this.drawFrame(spriteX,spriteY,new_x,new_y);
            
        
        }
        else if(keyword == 39){
            
            spriteX =  0;
            spriteY = 2;
            new_x+=dx;
            
            
            this.collisionDetection(new_x,new_y);
            
         
            this.drawFrame(spriteX,spriteY,this.x,this.y);
        }
        else if(keyword == 38){
            
            spriteX =  0;
            spriteY = 3;
            new_y-=dy;
            
            
            this.collisionDetection(new_x,new_y);
            this.drawFrame(spriteX,spriteY,this.x,this.y);
        }
        else if(keyword == 40){
            
            spriteX =  0;
            spriteY = 0;
            new_y+=dx;
            
            new_y = this.y;
            this.collisionDetection(new_x,new_y);
            this.drawFrame(spriteX,spriteY,this.x,this.y);
        }
        else{
            
            this.drawFrame(spriteX,spriteY,new_x,new_y);
            
        }


        
       
    }
    this.collisionDetection = function(x,y){
        console.log('x=',x);
        console.log('y=',y);
        tile =0;
        row=0;
        column=0;
        column = Math.round(((x)/31));
        console.log(' column=',column);
        row = Math.round(((y)/31))+2;
        console.log(' row=',row);
        
        tile = map.getTile(1,column,row);
        console.log(' tile=',tile);
        

    } 
    
    

    this.init = function(){
        
        
        this.movePlayer(0);
         
        // this.drawFrame(1, 0, scaledWidth, 0);
        // drawFrame(0, 3, scaledWidth * 2, 0);
        // drawFrame(0, 0, scaledWidth * 3, 0);
        
        // requestAnimationFrame(this.init.bind(this));        
        
    }
    this.init();
    
    

}
