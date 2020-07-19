function PokeBall(context, image) {

    this.maxX = POKEBALLMAXX;
    this.maxY = POKEBALLMAXY;
    this.width = POKEBALLWIDTH;
    this.height = POKEBALLHEIGHT;
    const height_scale = SCALEHEIGHT;
    const width_scale = SCALEWIDTH;
    const scaledWidth = width_scale * this.width;
    const scaledHeight = height_scale * this.height;
    const img = image;
    this.context = context;
    this.throwing = false;
    this.setXY = function (x, y) {
        this.x = x;
        this.y = y;
    }
    this.drawPokeBall = function () {
        if (this.throwing == false) return;
        this.context.drawImage(img,
            0 * this.width + 4, 0 * this.height, this.width, this.height,
            Math.floor(this.x - player_camera.x), Math.floor(this.y - player_camera.y), scaledWidth, scaledHeight);
    }
    this.throwPokeBall = function () {

        if (player.balls == 0) return;
        else {
            player.balls--;
            this.throwing = true;


        }
    }
    this.updatePokeBall = function () {

        if (this.throwing == false) return;
        if (this.x == this.maxX && this.y == this.maxY) 
        {   Capture.play();
            pokemonBattle.pause();
            backgroundMusic.pause();
            
            player.pokemonObject.pokedraw = false;
            
        }
        
        else {
            
            if (this.x <= this.maxX && this.y >= this.maxY) {
                this.x+=2;
                this.y-=2;

            }
            else {

                this.x = this.maxX;
                this.y = this.maxY;
            }

        }
        backgroundMusic.play();
    }
    


}

