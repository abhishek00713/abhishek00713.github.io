function Characters(Game, canvas, context, image) {
    //player_info
    this.player_x = 200;
    this.player_y = 390;
    this.width = 30;
    this.height = 50;
    this.height_scale = 1.5;
    this.width_scale = 1.5;
    this.img = image;
    var self = this;

    //Speed
    dx = 2;
    dy = 2;
    var temporary_x;
    var temporary_y;
    this.counter = 0;
    

    
    var grasswalkduration = 100;
    var pokemon_name;
    this.pokemonObject;
    
    
    var random;
    
     // 0 = left, 1 = right, 2= top, 3 = bottom
    this.characterDirection = -1;
    
    
    var world0walkableTiles = [-1, 4, 12, 970];
    var world1walkableTiles = [-1, 970];
    this.currentWorld;
    var doorTiles = [4236, 4237, 4244, 4245, 4555, 4556, 4557, 4563, 4564, 4565];
    var outDoorTiles = [3320, 3321, 3322, 3323];
    this.walk = false;
    var column;
    var row;
    
    this.characterIndex = 0;
    this.balls = 0;
    
    var sideChar = false;
    var tile;
    var spriteX = 0;
    var spriteY = 0;
    var talkcut, talkuncut, talk1, talk2, talk3, talk4, talk5, talk6, talk7, talk8, talk9, talk10, talk11, talk11, talk12, talk13, talk14, talk15, talksmash, talkunsmash, talkwalk, talk16, talk17, talk18, talk19, talksnorlax, talksnorlaxwake, talk20, talk21, talk22, talk23, talk24 = false;
    var talkTime = 0;
    var Cut = 0;
    var Flute = 0;
    var smash = 0;
    var shoes = 0;

    var talk_script = {
        1: ["Fighter: Hey Kid! Go to the woods and find me a Pikachu", " ", "Player : But I don't have any Pokeball", " ", "Fighter: Ask the professor", "            If u bring me a Pikachu , I will give u a rare Pokemon", "            Scram! Before i Karate Chop you"]
        , 2: ["Player: Hello", " ", "Scared Kid : Hello !, Dont go to the woods ,it's scary out there", " ", "Player : I am not scared of anything ", " ", "Scared Kid : Just be careful out there"], 3: ["Player: Bro! What is this place?", " ", "Mr.Clark: This is Clark's Residence? How may I help you?", " ", "Player:I wanted to go to Route 101.", " ", "Mr.Clark:You should visit the professor before enetering the wild"]
        , 4: ["Lady: Hey kid! Stop pushing", " ", "Player : Sorry", " ", "Lady : You need money to buy these items, Dont think of stealing", " ", "Player: I am not"]
        , 5: ["Officer : Kid Have you seen something unusal ?", " ", "Player : No, Sir", " ", "Officer : Watch out for bad people, If u feel anything is wrong ", "             Come to me", " ", "Player : Ok ,Sir"]
        , 6: ["ShopKeeper: Hello! You can find anything you want here", "      we have each and every thing from every city of the world", " ", "Player : Why is the police here? ", " ", "ShopKeeper : we were just robbed !!!!"]
        , 7: ["Kid : My father was a great trainer ", " ", "Player : I am alos going to be the greatest trainer of all time", " ", "Kid: you will never be able to beat my father", " ", "Player: Keep watching , I am going to win "]
        , 8: ["Lady: If u need to go to the route , go to the old folks house", " ", "Player : Why??", " ", "Lady : I heard that there is someone that helps kid ", "          to go pass through the forest", "         Don't tell anyone!!!!!"]
        , 9: ["FatGuy: Hey! Do you know what berry is the best?", " ", "FatGuy: ...Chekko Berries are the best and they test very good to", " ", "Player: Do u have some?", " ", "FatGuy : GO BUY IT!!!"]
        , 10: ["Proffessor: SO you are the one who wants to go to the route", " ", "Player: Yes proffesor", " ", "Proffessor: There are different types of pokemon and different", "             types of pokeball . So here take this", " ", "-----RECEIVED POKEBALLS-----"]
        , 11: ["Assistant: The professor has been working daily ", " ", "Player: is there any new discovery?", " ", "Assistant: These are some top secret research that we can't tell"]
        , 12: ["Assistant2: We have to go to so many different areas and ", "meet several new pokemon", " ", "Player : Have u seen all the pokemons? ", " ", "Assistant2: No, there are still so many types of pokemon left to be discovered"]
        , 13: ["OldGuy: Hey there, you kinda remind me of my grandson", "Where are you headed", " ", "Player: I am going towards route101", " ", "OldGuy: You need this TM to cut the tree", " ", "------RECEIVED TM CUT-----"]
        , 14: ["OldWoman: You are not supposed to be here", "           These area is only for those that have clearance", " ", " Player: Sorry", " ", "OldWoman: Get out of here"]
        , 15: ["NavyGuy: You know i once saw a one eyed giant snake in ", "          the ocean", " ", "Player: Was that a pokemon", " ", "NavyGuy:  I have no idea.... sometimes i think it was all a dream"]
        , 16: ["BikerGuy: Hey kid take this shoe it will help u get over lakes", " ", "Player: Dont u need it?", " ", "BikerGuy: I have a spare one and no space in bag", "", "-------RECEIVED BIKER SHOES---------"]
        , 17: ["TEAMRocket: You are one lucky brat!! I had my whole pokemon wipeout", "             during the robbery", " ", "Player: Now to tell the police", "", "TEAMRocket: Wait take this stolen flute", "", "-----RECEIVED STOLEN FLUTE------"]
        , 18: ["LostGirl: Help me!!! I have lost my pokemon", " ", "Player:Which pokemon?", " ", "LostGirl: Mewtwo", " ", "Player: LOL"]
        , 19: ["Player:You are the trainerRed, aren't u?", " ", "TrainerRed: yeah.. so you are also exploring... ", "             here take this TM it will help u smash boulder", " ", "Player:Thank You", " ", "-----RECEIVED TM--------"]
        , 20: ["Player:Where is the gym leader?", " ", "OldMan: The gym leader has gone to fight with TEAM ROCKET", " ", "Player: Which town?", " ", "OLDMan: Severialian City near the MT.Rush"]
        , 21: ["OldMan: I have lost my way to my house.....Where am I?", " ", "Player: Do u remember?", " ", "OldMan:Do u have some Chesto berries? ", " ", " ", "          !!!!!!!!!!!GET  LOST!!!!!!!!"]
        , 22: ["Lady: Did you hear about the robbery at the game store?", "Player: NO", "Lady: Team Rocket are targeting me now, I am scared"]
        , 23: ["WeirdGuy: Did u see the old guy blocking the way?", " ", "Player: Yeah!!", "", "WeirdGuy: He has lost his wife and neice in these jungle and is alsways searching for them"]
        , 24: ["Lady: They took everything !!!!!", "", "Player: What?", "", "Lady: All my gaming accessories are gone... CURSE YOU TEAM ROCKET!!!!!!!!", "", "Player:I will try to bring them back"]
        , snorlax: ["Player:MOVE SNORLAX!!!! ", "", "Snorlax: Hmmmmmmmmmmmm.. HMmmmmmm", " ", "Player: Wake up u fatty pokemon"]
        , snorlaxwake: ["", "", "", "!!!SNORLAX WOKE UP AND LEFT!!!!!!"]
        , unsmash: ["", "", "", "!!!!! THIS ROCK CAN BE SMASHED BY TMSMASH"]
        , smash: ["", "", "", "!!!!! THE ROCK HAS BEEN SMASHED BY TMSMASH"]

        , walk: ["", "", "", "!!!!! THIS ROAD CAN BE WALKED BY SPECIAL BOOTS"]

        , cut: ["", "", "", "!!!!!!!!THE TREE HAS BEEN CUT DOWN BY THE TM CUT!!!!!!!!"]
        , uncut: ["", "", "", "!!!!!!!!THE TREE CAN BE CUT DOWN BY THE TM CUT!!!!!!!!"]
    };



    //CHARACTER IMAGE IMPLEMENTATION

    this.drawFrame = function (animationArray) {
        const scaledWidth = this.width_scale * this.width;
        const scaledHeight = this.height_scale * this.height
        
        context.strokeRect(
            this.player_x * TILE_SIZE, this.player_y * TILE_SIZE, scaledWidth, scaledHeight);
        

        if (Number.isNaN(this.characterIndex)) return;
        this.characterIndex += 5 * parseFloat(1 / 60);

        var indexX = Math.floor(this.characterIndex) % animationArray.length;
        var indexY = this.characterDirection;

        
        if (this.characterDirection == -1) {
            indexX = 0;
            indexY = 0;
        }
        if (this.Bigboy == true) {
            indexX = 0;
            indexY = 0;
            this.balanceWidthFactor = 0;
        }
        else {
            this.balanceWidthFactor = 4;
        }


        context.drawImage(this.img,
            indexX * this.width + this.balanceWidthFactor, indexY * this.height, this.width, this.height,
            Math.floor(this.player_x - player_camera.x), Math.floor(this.player_y - player_camera.y), scaledWidth, scaledHeight);

        this.walk = false;




    }


    


    // CHANGES THE CHARACTER INTO BATTLE FORM

    this.changeToBigBoy = function () {
        
        this.Bigboy = true;
        this.img = imageManager.getImage("BigCharacter");
        this.height = 128;
        this.width = 128;
        this.player_x = 350;
        this.player_y = 580;
        player_camera.x = 300;
        player_camera.y = 300;
        this.height_scale = 2;
        this.width_scale = 2;




    }

    //CHANGES THE CHARATCER INTO NORMAL FORM

    this.changeToNormal = function () {
        this.Bigboy = false;
        this.img = imageManager.getImage("characters");
        this.player_x = temporary_x;
        this.player_y = temporary_y;
        player_camera.x = temporary_x - 300;
        player_camera.y = temporary_y - 20;
        this.width = 30;
        this.height = 50;
        this.height_scale = 1.5;
        this.width_scale = 1.5;
    }


    //MAIN CHARACTER MOVEMENT 

    this.movePlayer = function (keyword) {
        

        
        if (talkTime === 0) {
            talk1 = false;
            talk2 = false;
            talk3 = false;
            talk4 = false;
            talk5 = false;
            talk6 = false;
            talk7 = false;
            talk8 = false;
            talk9 = false;
            talk10 = false;
            talk11 = false;
            talk12 = false;
            talk13 = false;
            talk14 = false;
            talk15 = false;
            talk16 = false;
            talk17 = false;
            talk18 = false;
            talk19 = false;
            talk20 = false;
            talk21 = false;
            talk22 = false;
            talk23 = false;
            talk24 = false;
            talksnorlax = false;
            talksnorlaxwake = false;
            talkcut = false;
            talkuncut = false;
            talksmash = false;
            talkunsmash = false;
            talkwalk = false;


        } else {
            talkTime--;
        }
        if(keyword ==KEY_Space){
            if(world==13){
                backgroundMusic.play();
            world=0;
            }
            
        }

        else if (keyword === KEY_ENTER) {
            if (world != 12) {
                this.currentWorld = world;
            }


            
            
            world = 12;
            




        }
        else if (keyword == KEY_p) {
            
            pokeballs.setXY(400, 580);

            pokeballs.throwPokeBall();



        }
        else if (keyword == KEY_r) {
            this.changeToNormal();
            pokemonBattle.pause();
            backgroundMusic.pause();
            Run.play();
            world = this.currentWorld;
            
            
            backgroundMusic.play();
        }
        else if (keyword == KEY_ESC) {
            world = this.currentWorld;
        }

        else if (keyword == KEY_LEFT) {

            spriteX = 1;
            spriteY = 1;

            this.player_x -= dx;
            this.walk = this.checkCollision(this.player_x, this.player_y);
            if (this.walk == true) {
                if (this.player_x > player_camera.x + 2 * TILE_SIZE) {
                    player_camera.x = this.player_x - 7 * TILE_SIZE;
                    player_camera.x = Math.max(0, Math.min(player_camera.x, player_camera.maxX));
                    player_camera.y = Math.max(0, Math.min(player_camera.y, player_camera.maxY));
                }
                this.characterDirection = 1;
            }
            else {
                this.player_x += dx;
                this.characterDirection = -1;
            }



        }
        else if (keyword == KEY_RIGHT) {

            smashSound.pause();
            backgroundMusic.play();
            spriteX = 0;
            spriteY = 2;

            this.player_x = Math.min(this.player_x + dx, (TILE_SIZE-1) * TILE_SIZE);
            
            this.walk = this.checkCollision(this.player_x, this.player_y);

            this.walk = this.checkCollision(this.player_x, this.player_y);
            if (this.walk == true) {

                if (this.player_x > player_camera.x + 7 * TILE_SIZE) {
                    player_camera.x = this.player_x - 7 * TILE_SIZE;
                    player_camera.x = Math.max(0, Math.min(player_camera.x, player_camera.maxX));
                    player_camera.y = Math.max(0, Math.min(player_camera.y, player_camera.maxY));
                }
                this.characterDirection = 2;
            }
            else {
                this.player_x = Math.min(this.player_x - dx, (TILE_SIZE-1) * TILE_SIZE);
                this.characterDirection = -1;
            }

            


        }
        //top
        else if (keyword == KEY_UP) {


            spriteX = 0;
            spriteY = 3;

            this.player_y -= dy;

            this.walk = this.checkCollision(this.player_x, this.player_y);
            if (this.walk == true) {
                if (this.player_y > player_camera.y + 2 * TILE_SIZE) {
                    player_camera.y = this.player_y - 7 * TILE_SIZE;
                    player_camera.x = Math.max(0, Math.min(player_camera.x, player_camera.maxX));
                    player_camera.y = Math.max(0, Math.min(player_camera.y, player_camera.maxY));
                }
                this.characterDirection = 3;
            }
            else {
                this.doorCheck();
                this.player_y += dy;
                this.characterDirection = -1;
            }

            


        }
        else if (keyword == KEY_DOWN) {

            snorlaxSound.pause();
            backgroundMusic.play();
            spriteX = 0;
            spriteY = 0;

            this.player_y = Math.min(this.player_y + dy, (TILE_SIZE-1) * TILE_SIZE);

            this.walk = this.checkCollision(this.player_x, this.player_y);
            if (this.walk == true) {
                if (this.player_y > player_camera.y + 7 * TILE_SIZE) {
                    player_camera.y = this.player_y - 7 * TILE_SIZE;
                    player_camera.x = Math.max(0, Math.min(player_camera.x, player_camera.maxX));
                    player_camera.y = Math.max(0, Math.min(player_camera.y, player_camera.maxY));
                    this.characterDirection = 0;
                    if (this.player_y === 852) {

                        this.player_x += 35;
                        this.player_y -= 500;
                        world = 0;
                    }
                }
            }
            else {
                this.RoomCollision();
                this.player_y -= dy;
                this.characterDirection = -1;
                
            }



        }

        


    }




    //COLLISION CHECK 

    this.checkCollision = function (x, y) {
        column = 0;
        row = 0;
        
        column = Math.floor((x + this.width / 2) / TILE_SIZE);
        row = Math.floor((y + this.height / 2) / TILE_SIZE);
        
        if (world == 0) {
            
            tile = map.getTile(1, column, row);

            if (tile == GRASS_TILE) {

                grasswalkduration--;
                if (grasswalkduration == 0) {
                    this.currentWorld = world;
                    random = Math.floor((Math.random() * 5) + 1);
                    temporary_x = x;
                    temporary_y = y;
                    grasswalkduration = Math.floor(Math.random() * 1000+500);
                    
                    this.changeToBigBoy();
                    
                    world = 11;
                    
                    
                    
                    return true;
                }

            }



            for (var i = 0; i < world0walkableTiles.length; i++) {
                if (tile == world0walkableTiles[i]) {


                    return true;
                }
                else if (tile == TREE_TILE) {
                    
                    if (Cut == 1) {
                    
                        sideChar = this.sideCharCollision(x, y);
                        backgroundMusic.pause();
                        cutSound.play()
                        map.removeTile(1, column, row);
                        Cut = 0;
                        backgroundMusic.play();
                        return true;
                    }
                    else {
                    
                        sideChar = this.sideCharCollision(x, y);
                    }

                }

            }
        }
        else if (world == 1) {
            
            tile = room_map.getRoomTile(1, column, row);
            for (var i = 0; i < world1walkableTiles.length; i++) {
                if (tile == world1walkableTiles[i]) {

                    sideChar = this.sideCharCollision(x, y);
                    if (sideChar == false) {
                        
                        return true;
                    }
                    


                }
            }
        } else if (world == 2) {
            
            tile = mart.getMartTile(1, column, row);
            for (var i = 0; i < world1walkableTiles.length; i++) {
                if (tile == world1walkableTiles[i]) {
                    sideChar = this.sideCharCollision(x, y);
                    if (sideChar == false) {
                        
                        return true;
                    }


                }
            }
        }
        else if (world == 3) {
            
            tile = second_room.getSecondRoomTile(1, column, row);
            for (var i = 0; i < world1walkableTiles.length; i++) {
                if (tile == world1walkableTiles[i]) {
                    sideChar = this.sideCharCollision(x, y);
                    if (sideChar == false) {
            
                        return true;
                    }


                }
            }
        } else if (world == 4) {
            tile = professor_room.getProfessorTile(1, column, row);
            for (var i = 0; i < world1walkableTiles.length; i++) {
                if (tile == world1walkableTiles[i]) {
                    sideChar = this.sideCharCollision(x, y);
                    if (sideChar == false) {
            
                        return true;
                    }


                }
            }
        } else if (world == 5) {
            tile = room_four.getRoomFourTile(1, column, row);
            for (var i = 0; i < world1walkableTiles.length; i++) {
                if (tile == world1walkableTiles[i]) {
                    sideChar = this.sideCharCollision(x, y);
                    if (sideChar == false) {
            
                        return true;
                    }


                }
            }
        }
        else if (world == 6) {
            tile = route.getRouteTile(1, column, row);
            if (tile == GRASS_TILE) {
                grasswalkduration--;
                if (grasswalkduration == 0) {
                    this.currentWorld = world;
                    random = Math.floor((Math.random() * 5) + 1);
                    temporary_x = x;
                    temporary_y = y;

                    this.changeToBigBoy();
                    world = 11;
                    grasswalkduration = Math.floor(Math.random() *800+ 200);
                    return true;
                }

            }
            for (var i = 0; i < world1walkableTiles.length; i++) {
                if (tile == world1walkableTiles[i]) {
                    sideChar = this.sideCharCollision(x, y);
                    if (sideChar == false) {
                        
                        return true;
                    }


                }
                else if (tile == ROCK_TILE) {
                    
                    if (smash == 1) {
                        
                        sideChar = this.sideCharCollision(x, y);

                        route.removeRouteTile(1, column, row);
                        smash = 0;
                        
                        return true;
                    }
                    else {
                    
                        sideChar = this.sideCharCollision(x, y);
                    }

                }
                
            }
        }
        else if (world == 7) {
            tile = city_one.getCityOneTile(1, column, row);
            
            for (var i = 0; i < world1walkableTiles.length; i++) {
                if (tile == world1walkableTiles[i]) {
                    sideChar = this.sideCharCollision(x, y);
                    if (sideChar == false) {
            
                        return true;
                    }


                }
            }
        }
        else if (world == 8) {
            tile = city_room_one.getCityRoomOneTile(1, column, row);
            
            for (var i = 0; i < world1walkableTiles.length; i++) {
                if (tile == world1walkableTiles[i]) {
                    sideChar = this.sideCharCollision(x, y);
                    if (sideChar == false) {
            
                        return true;
                    }


                }
            }
        }
        else if (world == 9) {
            tile = city_room_two.getCityTwoTile(1, column, row);
            
            for (var i = 0; i < world1walkableTiles.length; i++) {
                if (tile == world1walkableTiles[i]) {
                    sideChar = this.sideCharCollision(x, y);
                    if (sideChar == false) {
            
                        return true;
                    }


                }
            }
        }
        else if (world == 10) {
            tile = city_room_three.getCityThreeTile(1, column, row);
            
            for (var i = 0; i < world1walkableTiles.length; i++) {
                if (tile == world1walkableTiles[i]) {
                    sideChar = this.sideCharCollision(x, y);
                    if (sideChar == false) {
            
                        return true;
                    }


                }
            }
        }
        

        return false;
    }


    //SIDE CHARACTER COLLISION IMPLEMENTATION

    this.sideCharCollision = function (x, y) {
        
        
        if (world == 0) {
        
            if (x >= 540 && x <= 566 && y >= 98 && Cut == 0) {
        
                talkuncut = true;
                talkTime = 10;
                return true;
            }
            else if (x >= 540 && x <= 566 && y >= 98 && Cut == 1) {
        
                talkcut = true;
                talkTime = 10;
                return true;
            }

        }
        else if (world == 1) {

            
            if (x >= 122 && x <= 174 && y >= 250 && y <= 326) {
                talk1 = true;
                talkTime = 10;
                return true;
            }
            
            else if (x >= 556 && x <= 640 && y >= 50 && y <= 118) {
                talk2 = true;
                talkTime = 10;
                return true;
            }
            
            else if (x >= 562 && x <= 640 && y >= 550 && y <= 618) {
                
                talk3 = true;

                talkTime = 10;
                return true;
            }
        }
        else if (world == 2) {
            if (x >= 560 && x <= 630 && y >= 556 && y <= 614) {

                talk4 = true;

                talkTime = 10;
                return true;
            }
            else if (x >= 560 && x <= 630 && y >= 160 && y <= 206) {

                talk5 = true;

                talkTime = 10;
                return true;
            }
            else if (x >= 92 && x <= 160 && y >= 192 && y <= 226) {

                talk6 = true;

                talkTime = 10;
                return true;
            }
        }
        else if (world == 3) {
            if (x >= 114 && x <= 186 && y >= 260 && y <= 314) {
                talk7 = true;

                talkTime = 10;
                return true;
            }
            else if (x >= 560 && x <= 636 && y >= 100 && y <= 132) {
                talk8 = true;

                talkTime = 10;
                return true;
            }
            else if (x >= 566 && x <= 628 && y >= 544 && y <= 626) {
                talk9 = true;

                talkTime = 10;
                return true;
            }


        }
        else if (world == 4) {
            if (x >= 114 && x <= 180 && y >= 246 && y <= 322) {
                talk10 = true;
                backgroundMusic.pause();
                Item.play();
                talkTime = 10;
                backgroundMusic.play();
                return true;
            }
            else if (x >= 562 && x <= 634 && y >= 162 && y <= 228) {
                talk11 = true;

                talkTime = 10;
                return true;
            }
            else if (x >= 562 && x <= 636 && y >= 596 && y <= 626) {
                talk12 = true;

                talkTime = 10;
                return true;
            }
        }
        else if (world == 5) {
            if (x >= 114 && x <= 180 && y >= 360 && y <= 428) {
                talk13 = true;
                backgroundMusic.pause();
                Item.play();
                talkTime = 10;
                backgroundMusic.play();
                return true;
            }
            else if (x >= 584 && x <= 634 && y >= 100 && y <= 136) {
                talk14 = true;

                talkTime = 10;
                return true;
            }
            else if (x >= 546 && x <= 610 && y >= 548 && y <= 650) {
                talk15 = true;

                talkTime = 10;
                return true;
            }
        }
        else if (world == 6) {
            if (x >= 378 && x <= 380 && y >= 534 && y <= 552 && smash == 0) {
                talkunsmash = true;
                talkTime = 10;
                return true;
            }
            else if (x >= 378 && x <= 380 && y >= 534 && y <= 552 && smash == 1) {
                talksmash = true;
                
                talkTime = 10;
                return true;
            }
            else if (x >= 572 && x <= 668 && y >= 500 & y <= 558 && shoes == 0) {
                talkwalk = true;

                talkTime = 10;
                return true;
            }
            else if (x >= 774 && x <= 846 && y >= 100 && y <= 128) {
                talk16 = true;
                backgroundMusic.pause();
                Item.play();
                talkTime = 10;
                backgroundMusic.play();
                return true;
            }
            else if (x >= 116 && x <= 170 && y >= 100 && y <= 170) {
                talk17 = true;
                backgroundMusic.pause();
                Item.play();
                talkTime = 10;
                backgroundMusic.play();
                
                return true;
            }
            else if (x >= 562 && x <= 626 && y >= 720 && y <= 762) {
                talk18 = true;

                talkTime = 10;
                return true;
            }
            else if (x >= 264 && x <= 314 && y >= 100 && y <= 134) {
                talk19 = true;
                backgroundMusic.pause();
                Item.play();
                talkTime = 10;
                backgroundMusic.play();
                return true;
            }
            else if (x >= 514 && x <= 572 && y >= 348 && y <= 396 && Flute == 0) {
                talksnorlax = true;
                
            
                talkTime = 10;
                return true;
            }
            else if (x >= 514 && x <= 572 && y >= 348 && y <= 396 && Flute == 1) {
                backgroundMusic.pause();
                Flutesound.play();
                
                talksnorlaxwake = true;

                talkTime = 10;
                Flutesound.pause();
                backgroundMusic.play();
                return false;
            }
        }
        else if (world == 7) {
            //7

            if (x >= 686 && x <= 752 && y >= 378 && y <= 428) {

                talk20 = true;

                talkTime = 10;
                return true;
            }
            else if (x >= 436 && x <= 494 && y >= 130 && y <= 134) {
                talk21 = true;

                talkTime = 10;
                return true;
            }
        }
        else if (world == 8) {
            if (x >= 430 && x <= 492 && y >= 68 && y <= 122) {
                talk22 = true;

                talkTime = 10;
                return true;
            }
        }
        else if (world == 9) {
            if (x >= 432 && x <= 496 && y >= 68 && y <= 124) {
                talk23 = true;

                talkTime = 10;
                return true;
            }
        }
        else if (world == 10) {
            if (x >= 434 && x <= 492 && y >= 450 && y <= 522) {
                talk24 = true;

                talkTime = 10;
                return true;
            }
        }
        return false;
    }




    //TALK SCRIPT IMPLEMENTATION

    this.drawScript = function () {
        if (talkTime === 0) return;
        context.beginPath();

        context.lineWidth = "5";

        context.fillStyle = "black";

        context.fillRect(0, 0, 620, 180);

        context.stroke();

        context.font = "20px Arial";

        if (talkcut == true) {
            for (let i = 0; i < talk_script["cut"].length; i++) {

                
                context.fillStyle = "white";
                context.fillText(talk_script["cut"][i], 30, 30 + i * 20)

            }
        }
        else if (talkuncut == true) {
            for (let i = 0; i < talk_script["uncut"].length; i++) {

                
                context.fillStyle = "white";
                context.fillText(talk_script["uncut"][i], 30, 30 + i * 20)

            }
        }
        else if (talk1 == true) {
            for (let i = 0; i < talk_script["1"].length; i++) {

                
                context.fillStyle = "white";
                context.fillText(talk_script["1"][i], 30, 30 + i * 20)

            }

        }
        else if (talk2 == true) {
            for (let i = 0; i < talk_script["2"].length; i++) {

                
                context.fillStyle = "white";
                context.fillText(talk_script["2"][i], 30, 30 + i * 20)

            }

        }
        else if (talk3 == true) {


            for (let i = 0; i < talk_script["3"].length; i++) {
                
                
                context.fillStyle = "white";
                context.fillText(talk_script["3"][i], 30, 30 + i * 20)
                
            }
        }
        else if (talk4 == true) {


            for (let i = 0; i < talk_script["4"].length; i++) {
                
                
                context.fillStyle = "white";
                context.fillText(talk_script["4"][i], 30, 30 + i * 20)
                
            }
        }
        else if (talk5 == true) {


            for (let i = 0; i < talk_script["5"].length; i++) {
                
                
                context.fillStyle = "white";
                context.fillText(talk_script["5"][i], 30, 30 + i * 20)
                
            }
        }
        else if (talk6 == true) {


            for (let i = 0; i < talk_script["6"].length; i++) {
                
                
                context.fillStyle = "white";
                context.fillText(talk_script["6"][i], 30, 30 + i * 20)
                
            }
        }
        else if (talk7 == true) {


            for (let i = 0; i < talk_script["7"].length; i++) {
                
                context.fillStyle = "white";
                context.fillText(talk_script["7"][i], 30, 30 + i * 20)
                
            }
        }
        else if (talk8 == true) {


            for (let i = 0; i < talk_script["8"].length; i++) {
                
                context.fillStyle = "white";
                context.fillText(talk_script["8"][i], 30, 30 + i * 20)
                
            }
        }
        else if (talk9 == true) {


            for (let i = 0; i < talk_script["9"].length; i++) {
                
                context.fillStyle = "white";
                context.fillText(talk_script["9"][i], 30, 30 + i * 20)
                
            }
        }
        else if (talk10 == true) {


            for (let i = 0; i < talk_script["10"].length; i++) {
                
                context.fillStyle = "white";
                context.fillText(talk_script["10"][i], 30, 30 + i * 20)
                
            }
            this.balls = 10;
        }
        else if (talk11 == true) {


            for (let i = 0; i < talk_script["11"].length; i++) {
                
                context.fillStyle = "white";
                context.fillText(talk_script["11"][i], 30, 30 + i * 20)
                
            }
        }
        else if (talk12 == true) {


            for (let i = 0; i < talk_script["12"].length; i++) {
                
                context.fillStyle = "white";
                context.fillText(talk_script["12"][i], 30, 30 + i * 20)
                
            }
        }
        else if (talk13 == true) {


            for (let i = 0; i < talk_script["13"].length; i++) {
                
                context.fillStyle = "white";
                context.fillText(talk_script["13"][i], 30, 30 + i * 20)
                
            }
            Cut = 1;
        }
        else if (talk14 == true) {


            for (let i = 0; i < talk_script["14"].length; i++) {
                
                context.fillStyle = "white";
                context.fillText(talk_script["14"][i], 30, 30 + i * 20)
                
            }
        }
        else if (talk15 == true) {


            for (let i = 0; i < talk_script["15"].length; i++) {
                
                context.fillStyle = "white";
                context.fillText(talk_script["15"][i], 30, 30 + i * 20)
                
            }
        }
        else if (talk16 == true) {


            for (let i = 0; i < talk_script["16"].length; i++) {
                
                context.fillStyle = "white";
                context.fillText(talk_script["16"][i], 30, 30 + i * 20)
                
            }
            shoes = 1;
            world1walkableTiles.push(73, 74, 75);
        }
        else if (talkunsmash == true) {


            for (let i = 0; i < talk_script["unsmash"].length; i++) {
                
                context.fillStyle = "white";
                context.fillText(talk_script["unsmash"][i], 30, 30 + i * 20)
                
                
            }
        }
        else if (talksmash == true) {

            backgroundMusic.pause();
            smashSound.play();
            for (let i = 0; i < talk_script["smash"].length; i++) {
                
                context.fillStyle = "white";
                context.fillText(talk_script["smash"][i], 30, 30 + i * 20)
                
            }
            
        }
        else if (talk17 == true) {


            for (let i = 0; i < talk_script["17"].length; i++) {
                
                context.fillStyle = "white";
                context.fillText(talk_script["17"][i], 30, 30 + i * 20)
                
            }
            Flute = 1;
        }
        else if (talk18 == true) {


            for (let i = 0; i < talk_script["18"].length; i++) {
                
                context.fillStyle = "white";
                context.fillText(talk_script["18"][i], 30, 30 + i * 20)
                
            }
        }
        else if (talk19 == true) {


            for (let i = 0; i < talk_script["19"].length; i++) {
                
                context.fillStyle = "white";
                context.fillText(talk_script["19"][i], 30, 30 + i * 20)
                
            }
            smash = 1;
        }
        else if (talksnorlax == true) {
            backgroundMusic.pause();
            snorlaxSound.play();
            for (let i = 0; i < talk_script["snorlax"].length; i++) {
                
                context.fillStyle = "white";
                context.fillText(talk_script["snorlax"][i], 30, 30 + i * 20)
                
            }
            
            
        }
        else if (talksnorlaxwake == true) {

            snorlax.snorlaxwake=true;
            for (let i = 0; i < talk_script["snorlaxwake"].length; i++) {
                
                
                context.fillStyle = "white";
                context.fillText(talk_script["snorlaxwake"][i], 30, 30 + i * 20)
                
            }


        }
        else if (talkwalk == true) {


            for (let i = 0; i < talk_script["walk"].length; i++) {
                
                context.fillStyle = "white";
                context.fillText(talk_script["walk"][i], 30, 30 + i * 20)
                
            }


        }
        else if (talk20 == true) {


            for (let i = 0; i < talk_script["20"].length; i++) {
                
                context.fillStyle = "white";
                context.fillText(talk_script["20"][i], 30, 30 + i * 20)
                
            }
        }
        else if (talk21 == true) {


            for (let i = 0; i < talk_script["21"].length; i++) {
                
                context.fillStyle = "white";
                context.fillText(talk_script["21"][i], 30, 30 + i * 20)
                
            }
        }
        else if (talk22 == true) {


            for (let i = 0; i < talk_script["22"].length; i++) {
                
                context.fillStyle = "white";
                context.fillText(talk_script["22"][i], 30, 30 + i * 20)
                
            }

        }

        else if (talk23 == true) {


            for (let i = 0; i < talk_script["23"].length; i++) {
                
                context.fillStyle = "white";
                context.fillText(talk_script["23"][i], 30, 30 + i * 20)
                
            }

        }
        else if (talk24 == true) {


            for (let i = 0; i < talk_script["24"].length; i++) {
                
                context.fillStyle = "white";
                context.fillText(talk_script["24"][i], 30, 30 + i * 20)
                
            }

        }


    }



    //DOOR COLLISION CHECK
    this.doorCheck = function () {
        if (this.player_y == -26 && world == 0) {
            this.player_x = 550;
            this.player_y = 810;
            world = 6;
        }
        else if (world == 6 && this.player_y <= -24) {
            this.player_x = 450;
            this.player_y = 720;
            world = 7;

        }
        else {


            for (var i = 0; i < doorTiles.length; i++) {
                if (tile == 4563 || tile == 4564) {
                    
                    if (this.player_x >= 200 && this.player_x <= 300 && this.player_y == 314) {

                        this.player_x = 510;
                        this.player_y = 810;
                        world = 1;
                        return;
                    }
                    else {

                        this.player_x = 480;
                        this.player_y = 770;

                        world = 4;
                    }
                }
                else if (tile == 1426) {
                    this.player_x = 510;
                    this.player_y = 810;
                    world = 2;
                }
                else if (tile == 4244 || tile == 4245) {

                    if (this.player_x >= 200 && this.player_x <= 300 && this.player_y == 748) {
                        
                        this.player_x = 400;
                        this.player_y = 810;
                        world = 5;
                        return;

                    }
                    else {

                        this.player_x = 420;
                        this.player_y = 810;
                        world = 3;

                    }

                }
                else if (tile == 1738 || tile == 1739) {
                    this.player_x = 420;
                    this.player_y = 810;
                    world = 8;
                }
                else if (tile == 1539 || tile == 1540) {
                    this.player_x = 420;
                    this.player_y = 810;
                    world = 9;
                }
                else if (tile == 1483 || tile == 1484) {
                    this.player_x = 420;
                    this.player_y = 810;
                    world = 10;
                }
            
             else if (tile == 1426) {
                this.player_x=510;
                this.player_y=810;
                world =2;
            }else if(tile == 4244 ){
                if(this.player_x >=200 && this.player_x<=300 && this.player_y==748) {
                    
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
    }



    //ROOM COLLISION CHECK
    this.RoomCollision = function () {


        
        for (var i = 0; i < outDoorTiles.length; i++) {
            if (tile == 3314 || tile == 3315 || tile == 3322 || tile == 3323) {


                this.player_x -= 50;
                this.player_y -= 120;
                world = 0;



            }
            else if (tile == 20 || tile == 21 || tile == 22) {
                this.player_x -= 10;
                this.player_y -= 80;
                world = 0;
            }
            else if (tile == 3364 || tile == 3365 || tile == 3366) {
                this.player_x -= 40;
                this.player_y -= 15;
                world = 0;
            }
            else if (tile == 3360 || tile == 3361 || tile == 3362 || tile == 3363) {
                this.player_x += 70;
                this.player_y -= 15;
                world = 0;
            }
            else if (tile == 3340 || tile == 3341 || tile == 3342) {

                this.player_x += 70;
                this.player_y -= 110;
                world = 0;
            }
            else if (tile == 3316 || tile == 3317 || tile == 3318) {
                
                this.player_x -= 40;
                this.player_y -= 15;
                world = 7;
            }
            else if (tile == 3241 || tile == 3242 || tile == 3243) {
                
                this.player_x += 80;
                this.player_y -= 30;
                
                world = 7;
            }
            else if (tile == 3217 || tile == 3218 || tile == 3219) {
                
                this.player_x -= 40;
                this.player_y -= 120;
                world = 7;
            }

        }

    }




   
//Game loop

    this.init = function () {
        this.counter++;
        

        Game.tick();

        if (world == 1) {




            Side1.drawSideCharacter();
            Side2.drawSideCharacter();
            Side3.drawSideCharacter();


        } else if (world == 2) {

            Side4.drawSideCharacter();
            Side5.drawSideCharacter();
            Side6.drawSideCharacter();
        }
        else if (world == 3) {

            Side7.drawSideCharacter();
            Side8.drawSideCharacter();
            Side9.drawSideCharacter();
        }
        else if (world == 4) {

            Side10.drawSideCharacter();
            Side11.drawSideCharacter();
            Side12.drawSideCharacter();
        }
        else if (world == 5) {

            Side13.drawSideCharacter();
            Side14.drawSideCharacter();
            Side15.drawSideCharacter();
        }
        else if (world == 6) {

            Side16.drawSideCharacter();
            Side17.drawSideCharacter();
            Side18.drawSideCharacter();
            Side19.drawSideCharacter();
            snorlax.drawSideCharacter();
        }
        else if (world == 7) {
            Side20.drawSideCharacter();
            Side21.drawSideCharacter();
        }
        else if (world == 8) {

            Side22.drawSideCharacter();
        }
        else if (world == 9) {

            Side23.drawSideCharacter();
        }
        else if (world == 10) {

            Side24.drawSideCharacter();
        }
        else if (world == 11) {
            PlayerStand.drawPokemonCharacter();
            PokemonStand.drawPokemonCharacter();
            if (random == 1) {
                this.pokemonObject = Pokemon1;
                pokemon_name = "BULBASAUR";
                Pokemon1.drawPokemonCharacter();
            }
            else if (random == 2) {
                this.pokemonObject = Pokemon2;
                pokemon_name = "CATERPIE";
                Pokemon2.drawPokemonCharacter();
            }
            else if (random == 3) {
                this.pokemonObject = Pokemon3;
                pokemon_name = "BUTTERFREE";
                Pokemon3.drawPokemonCharacter();
            }
            else if (random == 4) {
                this.pokemonObject = Pokemon4;
                pokemon_name = "WEEDLE";
                Pokemon4.drawPokemonCharacter();
            }
            else if (random == 5) {
                this.pokemonObject = Pokemon5;
                pokemon_name = "METAPOD";
                Pokemon5.drawPokemonCharacter();
            }
            
            
            





            context.beginPath();

            context.lineWidth = "5";

            context.fillStyle = "Green";

            context.fillRect(20, 30, 180, 40);

            context.stroke();

            context.font = "20px Arial";
            context.fillStyle = "White";


            context.fillText(pokemon_name, 40, 55);


        }
        else if(world ==5){

            Side1.drawSideCharacter();
            Side4.drawSideCharacter();

        }
        this.drawFrame([0, 1, 2, 3]);
        if (world == 12) {
            context.fillStyle = "#ADD8E6";
            context.fillRect(0, 0, canvas.width, canvas.height);

            context.beginPath();

            context.lineWidth = "5";

            context.fillStyle = "green";

            context.fillRect(10, 20, 350, 370);

            context.stroke();

            context.font = "40px Arial";
            context.fillStyle = "white";
            var txt = "OBJECTIVE";
            context.fillText(txt, 50, 70)

            context.font = "20px Arial";
            context.fillStyle = "white";
            var txt = "Ask the old man for TMCUT.";
            context.fillText(txt, 30, 120);
            var txt = "Ask the proffessor for POKEBALLS.";
            context.fillText(txt, 30, 170);
            var txt = "Get TMSMASH from the woods.";
            context.fillText(txt, 30, 220);
            var txt = "Get the boots to cross the water.";
            context.fillText(txt, 30, 270);
            var txt = "Get the flute to wake snorlax.";
            context.fillText(txt, 30, 320);
            var txt = "Bring  the old man's cherry";
            context.fillText(txt, 30, 370);


            context.beginPath();

            context.lineWidth = "5";

            context.fillStyle = "purple";

            context.fillRect(370, 20, 230, 370);

            context.stroke();

            context.font = "40px Arial";
            context.fillStyle = "white";
            var txt = "ITEMS";
            context.fillText(txt, 430, 70)

            context.font = "20px Arial";
            context.fillStyle = "white";
            var txt = "TMCUT                "+Cut;
            context.fillText(txt, 400, 120);
            var txt = "POKEBALLS       "+this.balls;
            context.fillText(txt, 400, 170);
            var txt = "TMSMASH          "+smash;
            context.fillText(txt, 400, 220);
            var txt = "BOOTS               "+shoes;
            context.fillText(txt, 400, 270);
            var txt = "FLUTE                "+Flute;
            context.fillText(txt, 400, 320);
            var txt = "CHERRY            0 ";
            context.fillText(txt, 400, 370);

            context.beginPath();

            context.lineWidth = "5";

            context.fillStyle = "red";

            context.fillRect(10, 400, 590, 200);

            context.stroke();
            
            context.font = "40px Arial";
            context.fillStyle = "yellow";
            var txt = "!!!HINT!!!";
            context.fillText(txt, 230, 450);
            context.font = "20px Arial";
            context.fillStyle = "yellow";
            var txt ="USE THE ARROW KEYS TO MOVE THE PLAYER";
            context.fillText(txt, 80, 490);
            var txt ="USE ITEMS TO COMPLETE THE OBJECTIVE";
            context.fillText(txt, 80, 530);
            var txt ="PRESS ESC KEY TO CLOSE THIS HELP";
            context.fillText(txt, 80, 570);


        }
        this.drawScript();
        pokeballs.updatePokeBall();

        pokeballs.drawPokeBall();
        

        requestAnimationFrame(this.init.bind(this));

    }



}

