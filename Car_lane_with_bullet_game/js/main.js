var enemyCarSpeed = 5;
var counter = 0;
var that = this;

function PowerUp(parentElement) {
    this.parentElement = parentElement;

    this.y = -100;
    this.x;

    var that = this;
    this.x = 331;

    this.create = function() {
        this.powerUpDiv = document.createElement('div');
        this.powerUpDiv.style.width = '60px';
        this.powerUpDiv.style.height = '60px';
        this.powerUpDiv.style.background = 'url(img/power.png)';
        this.powerUpDiv.style.backgroundRepeat = 'no-repeat';
        this.powerUpDiv.style.position = 'absolute';
        this.powerUpDiv.style.backgroundSize = 'cover';
        this.powerUpDiv.style.borderRadius = '50%';
        this.powerUpDiv.style.zIndex = '10';
        this.x = that.getPosition();
        this.powerUpDiv.style.left = this.x + 'px';
        this.powerUpDiv.style.top = this.y + 'px';

        this.parentElement.appendChild(this.powerUpDiv);

    }

    this.update = function() {
        this.y += 5;
        this.powerUpDiv.style.top = this.y + 'px';
    }

    this.removePowerUp = function() {
        this.parentElement.removeChild(this.powerUpDiv);
    }

    this.getPosition = function() {
        this.lane = Math.floor(Math.random() * 3) + 1;
        if (this.lane === 1) {
            return 80; //enemy car at lane 1 with left = 80
        } else if (this.lane === 2) {
            return 220;
        } else {
            return 360;
        }
    }
}


function Game() {
    var carContainer;
    var road;
    var Car_one;
    var enemyCar;
    var move = 0;
    var that = this;
    var interval;

    var enemyCars = [];
    var high_score = 0;
    var score = 0;
    var gameOver;
    var remove_power = false;
    var bullet;
    var bulletArray = [];
    var bulletCount = 10;
    var bomb = true;

    var powerUp;
    var powerUpArray = [];

    this.init = function() {

        this.reset = document.createElement('button');
        this.reset.innerHTML = 'Reset';
        this.reset.style.position = 'absolute';
        this.reset.style.color = 'yellow';
        this.reset.style.fontSize='44px';
        this.reset.style.cursor = 'pointer';
        this.reset.style.backgroundColor='blue';
        this.reset.style.marginLeft = '5px';
        this.reset.style.marginTop = '25px';
        this.reset.style.borderRadius='30%';
        this.reset.style.textAlign = 'center';

        
        carContainer = document.getElementById('car_container');
        this.start_text = document.createElement('h3');
        this.start_text.innerHTML = 'Press SPACE BAR for<br> missiles <br> Use  ARROW KEYS to go left and right';
        this.start_text.style.textAlign = 'center';
        this.start_text.style.fontSize = '28px';
        this.start_text.style.position = 'absolute';
        this.start_text.style.top = '66%';
        this.start_text.style.backgroundColor = 'red';
        this.start_text.style.color = 'white';
        this.start_text.style.padding = '0 75px';
        
        //highscore
        high_score = localStorage.getItem("high_score");
        this.high_score_text = document.createElement('h2');
        this.high_score_text.innerHTML = 'High Score<br>'+high_score;
        this.high_score_text.style.textAlign = 'center';
        this.high_score_text.style.fontSize = '30px';
        this.high_score_text.style.position = 'absolute';
        this.high_score_text.style.top = '54%';
        this.high_score_text.style.left = '38%';
        this.high_score_text.style.color='yellow';

        //Start Button
        this.startBtn = document.createElement('button');
        this.startBtn.innerHTML = 'Start <br> Game';
        this.startBtn.style.padding = '10px 30px'
        this.startBtn.style.fontSize = '50px';
        this.startBtn.style.cursor = 'pointer';
        this.startBtn.style.position = 'absolute';
        this.startBtn.style.top = '34%';
        this.startBtn.style.left = '33%';
        this.startBtn.style.borderRadius='60%';
        this.startBtn.style.background = 'green';

        //Score Board
        this.score = document.createElement('h2');
        this.score.innerHTML = 'Score<br> ' + score;
        this.score.style.position = 'absolute';
        this.score.style.color = 'black';
        this.score.style.backgroundColor='red';
        this.score.style.marginLeft = '5px';
        this.score.style.marginTop = '5px';
        this.score.style.textAlign = 'center';
        this.score.style.display = 'none';

        //Bullet Track
        this.bullet = document.createElement('h2');
        this.bullet.innerHTML = 'Bullets<br> ' + bulletCount;
        this.bullet.style.position = 'absolute';
        this.bullet.style.color = 'black';
        this.bullet.style.left = '470px';
        this.bullet.style.marginTop = '5px';
        this.bullet.style.backgroundColor='red';
        this.bullet.style.textAlign = 'center';
        this.bullet.style.float = 'right';
        this.bullet.style.display = 'none';
        

        carContainer.appendChild(this.start_text);
        carContainer.appendChild(this.startBtn);
        carContainer.appendChild(this.score);
        carContainer.appendChild(this.bullet);
        carContainer.appendChild(this.high_score_text);
        carContainer.appendChild(this.reset);

        this.reset.onclick = function(){
            localStorage.clear();
            localStorage.setItem("high_score",0);
        }
        

        this.startBtn.onclick = function() {
            carContainer.removeChild(that.startBtn);
            carContainer.removeChild(that.start_text);
            carContainer.removeChild(that.high_score_text);
            carContainer.removeChild(that.reset);
            that.score.style.display = 'block';
            that.bullet.style.display = 'block';

            that.startGame();
        }

    }

    this.startGame = function() {
        Car_one = new MainCar(carContainer).init();
        Car_one.draw(); 
        
        road = document.getElementsByClassName('road')[0];

        document.addEventListener('keydown', that.move_mainCar);

        interval = setInterval(that.gameLoop, 10);
    }

    this.gameLoop = function() {
        that.bullet_move();
        that.road_move();
        that.random_obstacle();
        that.newscore();
        that.Powerups();
        
        that.checkCollision();
    }

    this.road_move = function() {
        move += 5;
        road.style.backgroundPositionY = move + 'px';

        counter++;
        //speeding up
        if (counter == 2000) {
            enemyCarSpeed += 1;
        }
        if (counter == 4000) {
            enemyCarSpeed += 2;
        }
        if (counter == 6000) {
            enemyCarSpeed += 4;
        }
        if (counter == 8000) {
            enemyCarSpeed += 5;
        }

    }

    this.move_mainCar = function(event) {
        
        //left arrow
        if (event.keyCode === 37 && Car_one.left != 80) {
            Car_one.position(-140); // left = 80
            
        }
        //right arrow
        if (event.keyCode === 39 && Car_one.left != 360) {
            Car_one.position(140); // left = 360
        }

        //for bulltes
        if (event.keyCode == 32 && bulletCount > 0) {
            bullet = new Bullet(Car_one);
            bulletArray.push(bullet);
            if (bomb) {
                bullet.createBullet(carContainer);
                bulletCount--;
                that.bullet.innerHTML = 'Bullets<br> ' + bulletCount;
                bomb = false;
                setTimeout(function() {
                    bomb = true;
                }, 500);
            }

        }
    } 

    this.random_obstacle = function() {
        if (Math.abs(move) % 300 == 0) {
            enemyCar = new EnemyCar(carContainer);
            enemyCars.push(enemyCar);
            enemyCar.init();
        }
        
        for (var i = 0; i < enemyCars.length; i++) {
        
            enemyCars[i].move();
        
        }
    }

    this.newscore = function() {
        for (var i = 0; i < enemyCars.length; i++) {
            if (enemyCars[i].carTop >= 810) {
                enemyCars[i].destroyCar();
                enemyCars.splice(i, 1);
                score++;
                that.score.innerHTML = 'Score<br>' + score;
            }
        }
    }

    this.bullet_move = function() {
        for (var i = 0; i < bulletArray.length; i++) {
            bulletArray[i].move();
        }
    }


    this.Powerups = function() {
        if (Math.abs(move) % 700 == 0) {
            if (bulletCount <= 4) {
                powerUp = new PowerUp(carContainer);
                powerUpArray.push(powerUp);
                powerUp.create();
                // if(remove_power == true){
                //     this.powerUp.removePowerUp();
                // }
                
            }

        }
        for (var i = 0; i < powerUpArray.length; i++) {
            powerUpArray[i].update();
        }
        
    }

    this.checkCollision = function() {
        var myCarLeft = Car_one.left;
        var myCarTop = Car_one.top;

        for (i = 0; i < enemyCars.length; i++) {
            
            if (myCarLeft + Car_one.width > enemyCars[i].carLeft && myCarLeft < enemyCars[i].carLeft + 100 &&
                myCarTop + Car_one.height > enemyCars[i].carTop && myCarTop < enemyCars[i].carTop + 100) {
                    remove_power=true;
                clearInterval(interval);
                that.gameOver();
            }
            for (var j = 0; j < bulletArray.length; j++) {
                if (bulletArray[j].bulletLeft + 30 >= enemyCars[i].carLeft && bulletArray[j].bulletLeft <= enemyCars[i].carLeft + 100 &&
                    bulletArray[j].bulletTop + 30 >= enemyCars[i].carTop && bulletArray[j].bulletTop <= enemyCars[i].carTop + 100) {
            
                    enemyCars[i].destroyCar();
                    enemyCars.splice(i, 1);

                    bulletArray[j].removeBullet(carContainer);
                    bulletArray.splice(j, 1);
                    score = score + 1;
                    that.score.innerHTML = 'Score<br>' + score;
                }
            }
        }
        for (i = 0; i < powerUpArray.length; i++) {
            // console.log(enemyCars[i].carLeft);
            if (myCarLeft + Car_one.width > powerUpArray[i].x && myCarLeft < powerUpArray[i].x + 100 &&
                myCarTop + Car_one.height > powerUpArray[i].y && myCarTop < powerUpArray[i].y + 100) {

                powerUpArray[i].removePowerUp(carContainer);
                powerUpArray.splice(i, 1);
                bulletCount += 2;
                that.bullet.innerHTML = 'Bullets <br> ' + bulletCount;
            }
        }
    }



    this.gameOver = function() {
        gameOver = document.getElementsByClassName('game-over')[0];

        gameOver.style.display = 'block';

        this.gameOverTxt = document.createElement('h1');
        this.gameOverTxt.innerHTML = 'GAME OVER!';
        this.gameOverTxt.style.textAlign = 'center';
        this.gameOverTxt.style.margin = '35% auto 4%';
        this.gameOverTxt.style.fontSize = '75px';
        this.gameOverTxt.style.color = '#9afffb';
        gameOver.appendChild(this.gameOverTxt);

        this.currentScoreTxt = document.createElement('h2');
        this.currentScoreTxt.innerHTML = 'Score: ' + score;
        this.currentScoreTxt.style.textAlign = 'center';
        this.currentScoreTxt.style.fontWeight = 'lighter';
        this.currentScoreTxt.style.margin = '4% auto';
        this.currentScoreTxt.style.color = '#9afffb';
        gameOver.appendChild(this.currentScoreTxt);

        this.playAgainBtn = document.createElement('button');
        this.playAgainBtn.innerHTML = 'Play Again';
        this.playAgainBtn.style.padding = '20px';
        this.playAgainBtn.style.borderRadius = '50%';
        this.playAgainBtn.style.fontSize = '32px';
        this.playAgainBtn.style.cursor = 'pointer';
        this.playAgainBtn.style.backgroundColor = 'yellow';
        this.playAgainBtn.style.color = 'blue';

        gameOver.appendChild(this.playAgainBtn);

        this.final_highscore = document.createElement('h2');
        this.final_highscore.style.position='absolute';
        this.final_highscore.style.backgroundColor='blue';
        this.final_highscore.style.padding = '20px'
        this.final_highscore.style.color='red';
        
        this.final_highscore.style.marginTop='20px';
        this.final_highscore.style.fontSize = '42px';
        this.final_highscore.style.display='none';
        
        
        gameOver.appendChild(this.final_highscore);

        if(score>= high_score){
            this.final_highscore.innerHTML = 'CONGRATS!! YOU ARE THE NEW CHAMPION';
            this.final_highscore.style.display='block';
            localStorage.setItem("high_score",score);
        }

        this.playAgainBtn.onclick = that.playAgain;
    }

    this.playAgain = function() {
        gameOver.style.display = 'none';
        gameOver.removeChild(that.gameOverTxt);
        gameOver.removeChild(that.currentScoreTxt);
        gameOver.removeChild(that.playAgainBtn);
        // clearInterval(interval);

        for (var i = 0; i < enemyCars.length; i++) {
            enemyCars[i].destroyCar();
        }
        Car_one.destroy_mainCar(carContainer);

        enemyCars = [];
        counter = 0;
        move = 0;
        enemyCarSpeed = 5;

        score = 0;
        that.score.innerHTML = 'Score<br> ' + score;

        bulletCount = 10;
        that.bullet.innerHTML = 'Bullets <br> ' + bulletCount;

        that.startGame();
    }
}







var new_game = new Game();
new_game.init();