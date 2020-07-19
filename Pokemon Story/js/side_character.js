function SideCharacter(context,image){
    this.x=SIDEX;
    this.y=SIDEY;
    this.width = SIDEWIDTH;
    this.height = SIDEHEIGHT;
    const height_scale = SIDESCALE;
    const width_scale = SIDESCALE;
    const scaledWidth = width_scale * this.width;
    const scaledHeight = height_scale * this.height;
    const img = image;
    this.context = context;
    this.snorlaxwake=false;

    this.setXY = function(x,y){
        this.x =x;
        this.y =y;
    }
    this.drawSideCharacter= function(){
        if(this.snorlaxwake==false){
            this.context.drawImage(img,
                0*this.width +4, 0*this.height, this.width, this.height,
               Math.floor(this.x - player_camera.x), Math.floor(this.y - player_camera.y), scaledWidth, scaledHeight);
        }
        
    }
    this.removeSideCharacter = function(){
        
    }
    
    
}

