
    var GAME_ANIMATION_SPEED_FPS = 60;
    var CONTAINER_WIDTH = 350;
    var CONTAINER_HEIGHT = 512;
    var PIPE_SPACE = CONTAINER_HEIGHT - 141;
    var GAME_SPEED = 1;

    var AccelerationY = 0;
    var GRAVITY = 0.3;
    var BIRD_SPEED_LIMIT = 3;

    var BIRD_HEIGHT = 24;
    var BIRD_WIDTH = 34;
    var BIRD_DEFAULT_X_POSITION = 50;
    var BIRD_DEFAULT_Y_POSITION = CONTAINER_HEIGHT / 2 / 2;

    var OBSTACLE_SPACE = 2 * BIRD_HEIGHT;

    var PIPE_WIDTH = 52;
    var PIPE_HEIGHT = 320;

    var PIPES = [
        './assets/sprites/pipe-green.png',
        './assets/sprites/pipe-red.png',
    ];

    var GAME_MODES = [
        './assets/sprites/background-day.png',
        './assets/sprites/background-night.png',
    ];

    var BIRDS_IMAGE_ARRAY = [
        './assets/sprites/bluebird.gif',
        './assets/sprites/redbird.gif',
        './assets/sprites/yellowbird.gif',
    ];



    (function () {
        var containerBackground = document.getElementById('containerBackground');
        containerBackground.style.height = CONTAINER_HEIGHT + 'px';
        containerBackground.style.width = CONTAINER_WIDTH + 'px';

        var gameBackground = GAME_MODES[getRandom(0, 1)];
        containerBackground.style.backgroundImage = 'url(' + gameBackground + ')';
        containerBackground.style.margin = 'auto auto';
        containerBackground.style.backgroundSize = '100% 100%';
        containerBackground.style.backgroundRepeat = 'repeat-x';
        containerBackground.style.position = 'relative';
        containerBackground.style.overflow = 'hidden';

        var containerBase = document.getElementById('containerBase');
        containerBase.style.position = 'absolute';
        containerBase.style.height = CONTAINER_HEIGHT + 'px';
        containerBase.style.width = CONTAINER_WIDTH + 'px';
        containerBase.style.backgroundImage = 'url(\'./assets/sprites/base.png\')';
        containerBase.style.backgroundSize = '100%';
        containerBase.style.backgroundRepeat = 'repeat-x';
        containerBase.style.backgroundPosition = 'bottom';
        containerBase.style.zIndex = 20;

        var Message_container = document.getElementById('Message_container');
        
        var reset = document.createElement('button');
        reset.innerHTML = 'Reset';
        reset.style.position = 'absolute';
        reset.style.color = 'yellow';
        reset.style.fontSize='30px';
        reset.style.cursor = 'pointer';
        reset.style.backgroundColor='blue';
        reset.style.marginLeft = '5px';
        reset.style.marginTop = '25px';
        reset.style.borderRadius='30%';
        reset.style.textAlign = 'center';

        Message_container.appendChild(reset);

        reset.onclick = function(){
            localStorage.clear();
            localStorage.setItem("highScore",0);
        }

    }());



    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }



    
    function NewGame(fps, parentElement) {
        var total_pipes = [];
        var bird = null;
        var birdCollision = false;

        var pipeimage = PIPES[getRandom(0, 1)];

        var score = 0;
        var distanceTravelled = 0;
        var highScore = localStorage.getItem("highScore") || 0;

        var keyPressed = false;
        var keyPressedCounter = 0;
        var keyPressedId = 0;
        var self = this;

        fps = fps || GAME_ANIMATION_SPEED_FPS;
        var start = 0;
        var frameDuration = 1000 / fps;
        var animationFrameVariable = 0;
        var gameSpeed = gameSpeed || GAME_SPEED;

        
        this.loadImages = function(){
            var preloader = new Preloader();
            preloader.load(this.start,this);
        }
        
        

        this.init = function () {
            this.gameReset();
            this.loadImages();

            bird = new BIRD(parentElement);
            bird.init();
            bird.draw();

            this.generatePipe();
            
            animationFrameVariable = window.requestAnimationFrame(this.start.bind(this));
            
        };

        this.generatePipe = function () {
            var top = getRandom(0, PIPE_SPACE - OBSTACLE_SPACE);
            var bottom = PIPE_SPACE + OBSTACLE_SPACE - top;
            var pipeSize = CONTAINER_WIDTH + PIPE_WIDTH + 10;

            var topPipe = new PIPE(parentElement);
            topPipe.init(pipeimage);
            topPipe.move(pipeSize, -top);
            topPipe.pipeElement.style.transform = 'rotate(180deg)';
            total_pipes.push(topPipe);

            var bottomPipe = new PIPE(parentElement);
            bottomPipe.init(pipeimage);
            bottomPipe.move(pipeSize, bottom);
            total_pipes.push(bottomPipe);
        };

        this.gameReset = function () {
            total_pipes = [];
            bird = null;
            birdCollision = false;

            var gameBackground = GAME_MODES[getRandom(0, 1)];
            parentElement.style.backgroundImage = 'url(' + gameBackground + ')';

            pipeimage = PIPES[getRandom(0, 1)];

            score = 0;
            distanceTravelled = 0;
            highScore = localStorage.getItem("highScore") || 0;

            keyPressed = false;
            keyPressedCounter = 0;
            keyPressedId = 0;

            start = 0;
            animationFrameVariable = 0;

            var GameStartElement = parentElement.firstElementChild;
            parentElement.innerHTML = '';
            parentElement.appendChild(GameStartElement);

            document.getElementById("highScore").innerHTML = '';
            document.getElementById("score").innerHTML = '';
            document.getElementById("message").innerHTML = '';
        };


        this.start = function (timestamp) {
            if (!birdCollision) {
                
                console.log(timestamp);
                console.log(start);
                if (timestamp >= start) {
                    self.pipeDistancing();
                    self.moveBird();
                    self.MovePipe_Background();
                    ScoreDisplay(highScore, score);

                    if (bird.y > PIPE_SPACE || bird.y < -60) {
                        birdCollision = true;
                    }

                   
                    start = timestamp + frameDuration;
                }
                animationFrameVariable = window.requestAnimationFrame(self.start);
            }
            if (birdCollision) {
                
                window.cancelAnimationFrame(animationFrameVariable);
                setHighScore(highScore, score);
                StartButton.style.display = 'block';
            }
        };

        this.pipeDistancing = function () {
            
            if (total_pipes.length != 0) {
                var lastPipe = total_pipes[total_pipes.length - 1];
                if (lastPipe.x < PIPE_WIDTH * 3) {
                    this.generatePipe();
                }
            }
        };

        
        

        this.MovePipe_Background = function () {
            
            distanceTravelled -= gameSpeed;
            
            parentElement.children[0].style.backgroundPositionX = distanceTravelled + 'px';

            var pipeOut = false;
            
            for (var i = 0; i < total_pipes.length; i++) {
                total_pipes[i].x -= gameSpeed;
                total_pipes[i].draw();

                
                if (bird.getBirdLeft() < total_pipes[i].getPipeRight() &&
                    bird.getBirdRight() > total_pipes[i].getPipeLeft() &&
                    (bird.getBirdTop()) < total_pipes[i].getPipeBottom() &&
                    bird.getBirdBottom() > total_pipes[i].getPipeTop()) {
                    birdCollision = true;
                }

            
                if (bird.getBirdLeft() >= total_pipes[i].getPipeRight() && total_pipes[i].getPipeRight() >= BIRD_DEFAULT_X_POSITION) {
                    score += 0.5;
            
                }

            
                if (total_pipes[i].x < -(PIPE_WIDTH * 2)) {
                    total_pipes[i].clearPipe();
                    pipeOut = true;
                }
            }

            
            if (pipeOut) {
                total_pipes = total_pipes.filter(function (obstacle) {
                    return !obstacle.pipeRemoved;
                });
            }
        };

        this.moveBird = function () {
            
            if (keyPressed) {
                bird.accelerationY = -5;
            
            }

            
            if (!keyPressed) {
                bird.accelerationY = 0;
                bird.gravity = 0.3;
            }

            

            
            bird.dy += bird.accelerationY;

            
            bird.dy += bird.gravity;

            
            
            if (bird.dy > bird.speedLimit * 2) {
                bird.dy = bird.speedLimit * 2;
            }
            if (bird.dy < -bird.speedLimit) {
                bird.dy = -bird.speedLimit;
            }

            
            var previous_y = bird.y;

            
            bird.y += bird.dy;

            
            
            if (previous_y > bird.y) {
            
                if (bird.angle > 0) {
                    bird.angle = 0;
                }
            
                if (!(bird.angle < -20)) {
                    bird.angle -= 100 * Math.PI / 180;
                }
            }
            else {
            
                if (!(bird.angle > 90)) {
                    bird.angle += 100 * Math.PI / 180;
                }
            }

            bird.draw();
        };

        this.UserInput = function (event) {

            
            if (keyPressedCounter === 0) {
                keyPressed = true;

            
                keyPressedId = setTimeout(function () {
                    keyPressed = false;
                }, 200);
            }
            
            else {
                keyPressed = false;
            }
            keyPressedCounter++;
        };

        this.UserInputRemoved = function () {
            clearTimeout(keyPressedId);
            keyPressed = false;
            keyPressedCounter = 0;
        };
    }

    function ScoreDisplay(highScore, score) {
        
        document.getElementById("highScore").innerHTML = highScore;
        document.getElementById("score").innerHTML = score;
    }

    
    function setHighScore(highScore, userScore) {
        if (userScore > highScore) {
            localStorage.setItem("highScore", userScore);
            document.getElementById("message").innerHTML = 'Congratulations!!! YOU ARE THE NEW CHAMPION';
        }
    }


    var parentElement = document.getElementById('containerBackground');
    var NewGame = new NewGame(120, parentElement);

    window.addEventListener("keydown", NewGame.UserInput, true);
    window.addEventListener("keyup", NewGame.UserInputRemoved, false);

    

    var StartButton = document.getElementById('game_play');
    StartButton.style.height = CONTAINER_HEIGHT + 'px';
    StartButton.style.width = CONTAINER_WIDTH + 'px';
    StartButton.style.backgroundImage = 'url(\'./assets/sprites/message.png\')';
    StartButton.style.backgroundSize = '100%';
    StartButton.style.zIndex = 20;

    StartButton.addEventListener("click", GameStart);
    

    function GameStart() {
        StartButton.style.display = 'none';
        NewGame.init();
    }
