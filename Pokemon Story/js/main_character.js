function Characters(Game,canvas, context, image) {
    
    this.player_x = 200;//130 for collisiom
    this.player_y = 390;//70

    // var old_x =this.player_x;
    // var old_y = this.player_y ;
    this.width = 30;
    this.height = 50;
    const height_scale = 1.5;
    const width_scale = 1.5;
    dx = 2;
    dy = 2;
    var self = this;
    this.characterDirection = -1; // 0 = left, 1 = right, 2= top, 3 = bottom
    const scaledWidth = width_scale * this.width;
    const scaledHeight = height_scale * this.height;
    const img = image;
    var walkableTiles = [-1, 4, 12, 970];
    var doorTiles=[4236,4237,4244,4245,4555,4556,4557,4563,4564,4565];
    var outDoorTiles =[3320,3321,3322,3323];
    this.walk = false;
    var column;
    var row;
    var animation_delta;
    this.characterIndex = 0;
    // if(this.player_x % 31 !==0) column++;
    // if(this.player_y %31 !==0) row++;

    var tile;
    var spriteX = 0;
    var spriteY = 0;

    



    this.drawFrame = function (animationArray) {
        // context.clearRect(this.player_x, this.player_y, this.width,this.height);    
        context.strokeRect(
            this.player_x * 31, this.player_y * 31, scaledWidth, scaledHeight);
        // console.log('cy',canvasY);
        // console.log('fx',frameX);
        // console.log('draw');
        // context.clearRect(canvasX,canvasY,this.width,this.height);

        // this.playerCameraMove(camera_delta);
        // console.log(characterIndex);
        
        if(Number.isNaN(this.characterIndex)) return;
        this.characterIndex += 5*parseFloat(1/60);
        
        var indexX = Math.floor(this.characterIndex) % animationArray.length;
        var indexY = this.characterDirection;

        // indexX = 0;
        // indexY = 0;
        if(this.characterDirection==-1){
            indexX=0;
            indexY=0;
        }    

        context.drawImage(img,
            indexX * this.width +4, indexY * this.height, this.width, this.height,
            Math.floor(this.player_x - player_camera.x), Math.floor(this.player_y - player_camera.y), scaledWidth, scaledHeight);

        this.walk = false;




    }
    this.setDelta = function (input) {
        animation_delta = input;
    }

    this.movePlayer = function (keyword) {


        // console.log('move ko');
        // console.log('old x',old_x);
        // console.log('old y',old_y);


        if (keyword == 37) {


            spriteX = 1;
            spriteY = 1;

            this.player_x -= dx;
            this.walk = this.checkCollision(this.player_x,this.player_y);
            if(this.walk == true){
                if (this.player_x > player_camera.x + 2 * 31) {
                    player_camera.x = this.player_x - 7 * 31;
                    player_camera.x = Math.max(0, Math.min(player_camera.x, player_camera.maxX));
                    player_camera.y = Math.max(0, Math.min(player_camera.y, player_camera.maxY));
                }
                this.characterDirection = 1;
            }
            else{
                this.player_x+=dx;
                this.characterDirection = -1;
            }
            
            
            //  this.drawFrame(spriteX,spriteY);

            
            //    if(this.walk==false){
            //        this.player_x+=dx;
            //    this.drawFrame(spriteX,spriteY);

            //    }
            //    else{
            //        this.drawFrame(spriteX,spriteY);
            //    }


        }
        else if (keyword == 39) {


            spriteX = 0;
            spriteY = 2;

            this.player_x = Math.min(this.player_x + dx, 30 * 31);
            console.log('right',this.player_x);
            this.walk = this.checkCollision(this.player_x,this.player_y);

            this.walk = this.checkCollision(this.player_x,this.player_y);
            if(this.walk==true){
                if (this.player_x > player_camera.x + 7 * 31) {
                    player_camera.x = this.player_x - 7 * 31;
                    player_camera.x = Math.max(0, Math.min(player_camera.x, player_camera.maxX));
                    player_camera.y = Math.max(0, Math.min(player_camera.y, player_camera.maxY));
                }
                this.characterDirection = 2;
            }
            else{
                this.player_x = Math.min(this.player_x - dx, 30 * 31);
                this.characterDirection = -1;
            }
            
            // this.drawFrame(spriteX,spriteY);

            // if(this.walk==false){
            //     // this.player_x-=dx;


            // }
            // else{

            //     this.drawFrame(spriteX,spriteY);
            // }


        }
        //top
        else if (keyword == 38) {


            spriteX = 0;
            spriteY = 3;

            this.player_y -= dy;

            this.walk = this.checkCollision(this.player_x, this.player_y);
            if(this.walk==true){
                if (this.player_y > player_camera.y + 2 * 31) {
                    player_camera.y = this.player_y - 7 * 31;
                    player_camera.x = Math.max(0, Math.min(player_camera.x, player_camera.maxX));
                    player_camera.y = Math.max(0, Math.min(player_camera.y, player_camera.maxY));
                }
                this.characterDirection = 3;
            }
            else{
                this.doorCheck();
                this.player_y += dy;
                this.characterDirection = -1;
            }
            
            // if(this.walk==false){
            //     // this.player_y+=dy;
            //     this.drawFrame(spriteX,spriteY);
            // }
            // else{

            //     this.drawFrame(spriteX,spriteY);
            // }

            
        }
        else if (keyword == 40) {


            spriteX = 0;
            spriteY = 0;

            this.player_y = Math.min(this.player_y + dy, 30 * 31);
            
                this.walk = this.checkCollision(this.player_x, this.player_y);
            if(this.walk==true){
                if (this.player_y > player_camera.y + 7 * 31) {
                    player_camera.y = this.player_y - 7 * 31;
                    player_camera.x = Math.max(0, Math.min(player_camera.x, player_camera.maxX));
                    player_camera.y = Math.max(0, Math.min(player_camera.y, player_camera.maxY));
                    this.characterDirection = 0;
                }
            }
            else{
                this.RoomCollision();    
                this.player_y -=dy;
                this.characterDirection = -1;
                // this.topDoorCheck();
            }
            
            
            
            
            
            // if(this.walk==false){
            //     // this.player_y-=dy;
            //     this.drawFrame(spriteX,spriteY);
            // }
            // else{
            //     this.drawFrame(spriteX,spriteY);
            // }

            
        }
        
        // else{
        //     console.log('else');
        //     this.characterDirection=-1;
        // }


    }

    this.checkCollision = function (x, y) {
        column = 0;
        row = 0;
        console.log('x', x);
        console.log('y', y);
        column = Math.floor((x + 30/2) / 31);
        row = Math.floor((y + 50 /2) / 31);
        console.log('col', column);
        console.log('row', row);
        if(world ==0){
            tile = map.getTile(1, column, row);
            console.log('tile', tile);
        }
        else if(world ==1){
            //hareko room ko laagi harek collision
            tile = room_map.getRoomTile(1, column, row);
        }else if(world ==2){
            //hareko room ko laagi harek collision
            tile = mart.getMartTile(1, column, row);
        }
        else if(world ==3){
            //hareko room ko laagi harek collision
            tile = second_room.getSecondRoomTile(1, column, row);
        }else if (world==4) {
             tile = professor_room.getProfessorTile(1,column,row);
        }else if (world==5) {
            tile = room_four.getRoomFourTile(1,column,row);
        }
        
        
        for (var i = 0; i < walkableTiles.length; i++) {
            if (tile == walkableTiles[i]) {
                return true;
            }



        }
        // console.log('collision');
        
        return false;
    }
    this.doorCheck = function(){
        
        for(var i=0;i<doorTiles.length;i++){
            if(tile == 4563 || tile == 4564){
                // context.clearRect(0,0,canvas.width,canvas.height);
                if(this.player_x >=200 && this.player_x<=300 && this.player_y==314) {
                    console.log('first if');
                    this.player_x=510;
                this.player_y=810;
                world =1;
                return;
                }
                else{
                    console.log('4th hoouse',this.player_x);
                    this.player_x=510;
                this.player_y=810;
                    world =4;
                }
            }
             else if (tile == 1426) {
                this.player_x=510;
                this.player_y=810;
                world =2;
            }else if(tile == 4244 ){
                if(this.player_x >=200 && this.player_x<=300 && this.player_y==748) {
                    console.log('first if');
                    this.player_x=510;
                this.player_y=810;
                world =3;
                return;
                }
                else{
                    
                    this.player_x=510;
                this.player_y=810;
                    world =5;
                }
                
            }
        }
    }
    this.RoomCollision = function(){
        console.log(tile);
        for(var i=0;i<outDoorTiles.length;i++){
            if(tile == 3314 || tile ==3315 || tile == 3322 || tile == 3323){
                // context.clearRect(0,0,canvas.width,canvas.height);
                this.player_x-=70;
                this.player_y-=120;
                world =0;


                
            }
            else if(tile ==20 || tile ==21 || tile ==22)
            {
                
                this.player_y-=85;
                world =0;
            }
            else if(tile ==3348 || tile ==3349 || tile ==3350)
            {
                // this.player_x-= 340;
                // this.player_y-= 150;
                world =0;
            }
            
            //  else if (tile == 1426) {
            //     this.player_x=510;
            //     this.player_y=810;
            //     world =2;
            // }
        }
    }

    
    



    this.playerCameraMove = function (delta) {
        if (this.walk == true) {
            var dirx = 0;
            var diry = 0;
            if (Keyboard.isDown(Keyboard.LEFT)) { dirx = -1; }
            if (Keyboard.isDown(Keyboard.RIGHT)) { dirx = 1; }
            if (Keyboard.isDown(Keyboard.UP)) { diry = -1; }
            if (Keyboard.isDown(Keyboard.DOWN)) { diry = 1; }

            // console.log(camera)
            this.walk = false;
            // camera.move(delta, dirx, diry); 
        }
    }

    this.init = function () {

        // if(this.walk == false){
        //     // console.log('1');
        //     this.drawFrame(spriteX,spriteY);


        // }
        // else{
        //     console.log('2');
        // old_x = new_x;
        // old_y = new_y;

        // }
        //bottom, left, right, top
        
        // context.clearRect(0,0,canvas.width,canvas.height);
        Game.tick(0);
        if(world==1){
            
            Side1.drawSideCharacter();
            Side2.drawSideCharacter();
            Side3.drawSideCharacter();
        }else if(world ==2){
            //hareko room ko laagi harek collision
            Side1.drawSideCharacter();
            Side4.drawSideCharacter();
            Side5.drawSideCharacter();
        }
        else if(world ==3){
            //hareko room ko laagi harek collision
            Side1.drawSideCharacter();
            Side4.drawSideCharacter();
            // Side5.drawSideCharacter();
        }
        else if(world ==4){
            //hareko room ko laagi harek collision
            Side1.drawSideCharacter();
            Side4.drawSideCharacter();
            // Side5.drawSideCharacter();
        }
        else if(world ==5){
            //hareko room ko laagi harek collision
            Side1.drawSideCharacter();
            Side4.drawSideCharacter();
            // Side5.drawSideCharacter();
        }
        this.drawFrame([0, 1, 2, 3]);
        
        // console.log(animation_delta);
        // this.movePlayer(0);

        // this.drawFrame(1, 0, scaledWidth, 0);
        // drawFrame(0, 3, scaledWidth * 2, 0);
        // drawFrame(0, 0, scaledWidth * 3, 0);
        
        requestAnimationFrame(this.init.bind(this));

    }
    


}

