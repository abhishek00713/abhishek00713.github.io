function Pokemon(context,image){
    this.x=POKEMONX;
    this.y=POKEMONY;
    this.width = POKEMONWIDTH;
    this.height = POKEMONHEIGHT;
    const height_scale =SCALEHEIGHT;
    const width_scale = SCALEWIDTH;
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
            backgroundMusic.pause();
                    pokemonBattle.play();
            this.context.drawImage(img,
                0*this.width +4, 0*this.height, this.width, this.height,
               Math.floor(this.x - player_camera.x), Math.floor(this.y - player_camera.y), scaledWidth, scaledHeight);
        }
        else{
            setTimeout(function(){
                world=player.currentWorld;
            player.changeToNormal();
            pokeballs.throwing =false;
           
            
            },1000);
            
        }
        this.pokedraw=true;
    }
    
    
    
}

