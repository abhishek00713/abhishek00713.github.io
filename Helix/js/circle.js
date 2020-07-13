function Circle(ctx, phase) {
    this.radius = 10;
    this.radiusAmp = 10;
    this.x = 0;
    this.y = 0;

    this.currentX;
    this.currentY = 100;
    this.degree = 180; 
    this.amplitude = 55; 
    this.speed = 2; 
    this.frames = 0;

    var that = this;

    if (phase) {
        this.phase = 0;
    } else this.phase = Math.PI;

    this.drawCircle = function() {

        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    
    this.moveCircle = function() {
        var tempX = (this.speed * this.currentX * Math.PI) / this.degree;

        this.currentX = ++this.currentX % this.degree;

        if (this.currentX <= this.degree) {
            this.currentX++;
            this.y = this.amplitude * Math.cos(tempX + this.phase) + this.currentY; 
            this.radius = this.radiusAmp / 2 * Math.sin(tempX + this.phase) + this.radiusAmp / 2; 
        } else {
            this.currentX = 0;
        }


        this.frames++;
    }

}