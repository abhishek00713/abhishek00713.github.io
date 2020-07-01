function PIPE(parentElement) {
    this.x = 0;
    this.y = 0;

    this.pipeElement = null;
    this.pipeRemoved = false;

    var that = this;
    this.clearPipe = function () {
        that.pipeElement.remove();
        that.pipeRemoved = true;
    };

    this.init = function (pipeImage) {
        this.pipeElement = document.createElement('div');

        this.pipeElement.style.backgroundImage = 'url(' + pipeImage + ')';
        this.pipeElement.style.backgroundRepeat = 'no-repeat';
        this.pipeElement.style.backgroundPosition = 'center';
        this.pipeElement.style.backgroundSize = '100% 100%';

        this.pipeElement.style.height = PIPE_HEIGHT + 'px';
        this.pipeElement.style.width = PIPE_WIDTH + 'px';
        this.pipeElement.style.position = 'absolute';
        this.pipeElement.style.zIndex = 10;

        parentElement && parentElement.appendChild(this.pipeElement);
    };

    this.draw = function () {
        this.pipeElement.style.top = this.y + 'px';
        this.pipeElement.style.left = this.x + 'px';
    };

    
    this.move = function (xInc, yInc) {
        this.y = this.y + yInc;
        this.x = this.x + xInc;
        this.draw();
    };


    this.getPipeTop = function () { return this.y; };
    this.getPipeBottom = function () { return this.y + PIPE_HEIGHT; };
    this.getPipeLeft = function () { return this.x; };
    this.getPipeRight = function () { return this.x + PIPE_WIDTH; };
}