



function Balls(container,speed,startPosition){
      this.start = startPosition;
      this.speed = speed;
      this.color = "blue";
      this.ball = document.createElement("div");
      this.applyStyles = function(domPoint) {
        domPoint.style.top = this.y + "px";
        domPoint.style.left = this.x + "px";
        domPoint.style.height = "40px";
        domPoint.style.width = "40px";
        domPoint.style.borderRadius = "50%";
        domPoint.style.position = "absolute";
        domPoint.style.margin='0px auto';
        domPoint.style.backgroundColor = this.color;
        

      }
    
      this.applyStyles(this.ball);

      this.getDomNode = function() {
        return this.ball;
      }

      this.bounce = function(ball,container){
      
      var ballMargin = parseFloat(window.getComputedStyle(ball.getDomNode()).getPropertyValue('margin-top'));
      var ballHeight = parseFloat(window.getComputedStyle(ball.getDomNode()).getPropertyValue('height'));
      var boxHeight = parseFloat(window.getComputedStyle(container.element).getPropertyValue('height'));
      console.log(ballMargin);




var down = true;
setInterval(function () {
  if (ballMargin === 0) {
    
    down = true;
  } else if (ballMargin === (boxHeight - ballHeight)) {
    
    down = false;
  }

  if (down) {
    ballMargin += 1
    
  } else {
    ballMargin -= 1;
    
  }
  ball.getDomNode().style.marginTop = ballMargin + 'px';
  
}, 5);

      }
}

function Containers(height,width){
  
      this.height = height;
    this.width = width;


    renderPoint = function (container,ball) {
      // Attaching the point to the container
      container.appendChild(ball.getDomNode());
    }

  this.render = function(ball) {
    this.element = document.createElement('div');
    this.element.className = 'playground';
    this.element.style.position = 'relative';
    this.element.style.height = this.height + 'px';
    this.element.style.width = this.width + 'px';
    this.element.style.border = '2px solid #888';
    this.element.style.float = 'left';  
    this.element.style.margin ='10px';
    document.body.appendChild(this.element);
    renderPoint(this.element,ball);
  }

}

var speed = 10;
for(let i=100;i<500;i+=100){
  
  let container = new Containers(i,100);
  let ball = new Balls(container,speed,0);
  console.log(this);
  
  container.render(ball);
  
  ball.bounce(ball,container);

}

