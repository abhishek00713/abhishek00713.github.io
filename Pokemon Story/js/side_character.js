function SideCharacter(context,image){
    this.x=510;
    this.y=810;
    this.width = 30;
    this.height = 50;
    const height_scale = 1.5;
    const width_scale = 1.5;
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

