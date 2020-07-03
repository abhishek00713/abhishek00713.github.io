function Helix(container, ctx, row, col) {
    container.width = 500;
    container.height = 550;
    var self = this;

    this.row = row;
    this.col = col;

    var circles = [];

    this.top = 100;
    this.left = 150;
    this.circle_gap = 30;

    this.start = function() {

        self.createCircles(false);
        self.createCircles(true);
        self.mainLoop();
    }

    this.createCanvas = function() {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, container.width, container.height);

        

    }

    this.createCircles = function(phase) {
        var newPositionY = this.left;

        for (var i = 0; i < this.row; i++) {
            newPositionY += self.circle_gap;

            var newPositionX = 0;
            var phase_increase = 5;
            var currentPhase = 0;

            
            for (var j = 0; j < this.col; j++) {
            var circle = new Circle(ctx, phase);
            newPositionX += this.circle_gap;
            circle.x= newPositionX;
            circle.y = newPositionY;
            currentPhase+=phase_increase;
            circle.phaseX = currentPhase;
            circle.phaseY = newPositionY; 

            circles.push(circle);

            }
        }
    }



            

    this.mainLoop = function() {
        
        self.createCanvas();

        for (var i = 0; i < circles.length; i++) {
            circles[i].drawCircle();
            circles[i].animateCircle();
        }

        requestAnimationFrame(self.mainLoop);
    }

}

var canvas1 = document.getElementById('helix_container');
var ctx = canvas1.getContext('2d');
var helix = new Helix(canvas1, ctx, 10, 15).start();
    
