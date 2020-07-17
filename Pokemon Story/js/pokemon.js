function Pokemon(context,image){
    this.x=510;
    this.y=810;
    this.width = 350;
    this.height = 350;
    const height_scale = 1.5;
    const width_scale = 1.5;
    const scaledWidth = width_scale * this.width;
    const scaledHeight = height_scale * this.height;
    const img = image;
    this.context = context;
    this.pokedraw=true;
    this.setXY = function(x,y){
        this.x =x;
        this.y =y;
    }
    this.drawPokemonCharacter= function(){
        if(this.pokedraw==true){
            this.context.drawImage(img,
                0*this.width +4, 0*this.height, this.width, this.height,
               Math.floor(this.x - player_camera.x), Math.floor(this.y - player_camera.y), scaledWidth, scaledHeight);
        }
        else{
            setTimeout(function(){
                world=player.currentWorld;
            player.changeToNormal();
            pokeballs.throwing =false;
            // setTimeout(function(){
            //     console.log('firebase',fireKey);
            //     fireKey(window);
                
            // },100)
            
            },1000);
            
        }
        
    }
    this.removeSideCharacter = function(){
        this.context.clearRect(550,350,30,50);
    }
    
    
}

