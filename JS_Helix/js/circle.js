function Circle(ctx, phase) {
    this.circle_radius = 10;
    this.radiusAmp = 10;
    this.x = 0;
    this.y = 0;

    this.phaseX;
    this.phaseY = 100;
    this.degree = 180; 
    this.amplitude = 50; 
    this.circleSpeed = 2; 
    this.frames = 0;



    if (phase) {
        this.phase = 0;
    } else this.phase = Math.PI;

    this.drawCircle = function() {

        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.arc(this.x, this.y, this.circle_radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    
    this.animateCircle = function() {
        var tempX = (this.circleSpeed * this.phaseX * Math.PI) / this.degree;

        this.phaseX = ++this.phaseX % this.degree;

        if (this.phaseX <= this.degree) {
            this.phaseX++;
            this.y = this.amplitude * Math.cos(tempX + this.phase) + this.phaseY; 
            this.circle_radius = this.radiusAmp / 2 * Math.sin(tempX + this.phase) + this.radiusAmp / 2; 
        } else {
            this.phaseX = 0;
        }


        this.frames++;
    }

}