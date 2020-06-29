function Ball(parent) {
    this.width = 30;
    this.height = 30;
    this.x;
    this.y;
    this.element = null;
    this.parent = parent;
    
    
    this.dx = 10;
    this.dy = -10;

    this.init = function() {
        var ball = document.createElement('div');
        ball.style.width = this.width + 'px';
        ball.style.height = this.height + 'px';
        ball.style.backgroundColor = getRandomColor();
        ball.style.borderRadius = '50%';
        ball.style.position = 'absolute';
        this.parent.appendChild(ball);
        this.element = ball;
        this.ball_draw();
        return this;
    }

    this.ball_draw = function() {
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
    }

    this.wall_collision = function(width, height) {
        //collision with container
        if (this.x + this.dx > width - this.width || this.x + this.dx < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.dy > height - this.height || this.y + this.dy < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.ball_draw();
    }

    this.setPosition = function(x, y) {
        this.x = x;
        this.y = y;
    }

    

    this.checkCollision = function(balls) {
        for (var i = 0; i < balls.length; i++) {
            console.log('x',this.x);
            console.log('width',this.width);
            console.log('balls x',balls[i].x);
            console.log('ball width',balls[i].width);
            if (this.x + this.width > balls[i].x && this.x < balls[i].x + balls[i].width &&
                this.y + this.height > balls[i].y && this.y < balls[i].y + balls[i].height) {
                this.dx = -this.dx;
                this.dy = -this.dy;
                balls[i].dx = -balls[i].dx;
                balls[i].dy = -balls[i].dy;
            }
        }
    }

}
function getRandomColor()
    {
        return 'rgb('+getRandom(0, 255)+','+getRandom(0, 255)+','+getRandom(0, 255)+')';
    }

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function init(container,ballcount) {

    var balls = [];
    var MAX_WIDTH = container.offsetWidth;
    var MAX_HEIGHT = container.offsetHeight;
    this.container = container;
    this.ballcount = ballcount;
    var self = this;

    this.start = function() {

        for (var i = 0; i < this.ballcount; i++) {
            var ball = new Ball(container).init();

            var ballX = getRandom(0, MAX_WIDTH - ball.width);
            var ballY = getRandom(0, MAX_HEIGHT - ball.height);
            // console.log('ballx',ballX);
            // console.log('bally',ballY);
            ball.setPosition(ballX, ballY);

            
            ball.ball_draw();
            balls.push(ball);

        }
        setInterval(this.move.bind(this), 100)
    }

    this.move = function() {

        for (var i = 0; i < this.ballcount; i++) {
            balls[i].wall_collision(MAX_WIDTH, MAX_HEIGHT);
            balls[i].checkCollision(balls);
        }
    }
}
var container = document.getElementById('container');
new init(container, 20).start();

