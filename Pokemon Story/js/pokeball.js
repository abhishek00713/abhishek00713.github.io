function PokeBall(context, image) {

    this.maxX = 580;
    this.maxY = 296;
    this.width = 100;
    this.height = 100;
    const height_scale = 1.5;
    const width_scale = 1.5;
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
        if (this.x == this.maxX && this.y == this.maxY) player.pokemonObject.pokedraw = false;
        else {
            console.log(this.x, this.y);
            if (this.x <= this.maxX && this.y >= this.maxY) {
                this.x+=2;
                this.y-=2;

            }
            else {

                this.x = this.maxX;
                this.y = this.maxY;
            }

        }
    }
    


}

