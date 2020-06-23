var box = document.createElement('div');
box.setAttribute('id', 'box');
box.style.width = '500px';
box.style.height = '500px';
box.style.border = '2px solid #000'
box.style.margin = '100px auto';
document.body.appendChild(box);

var ball = document.createElement('div');
var ballSize = '50px';
ball.style.height = '50px';
ball.style.width = '50px';
ball.style.backgroundColor = 'blue';
ball.style.borderRadius = '50px';
ball.style.margin='0px auto';
document.getElementById('box').appendChild(ball);

var ballMargin = parseFloat(window.getComputedStyle(ball).getPropertyValue('margin-top'));
var ballHeight = parseFloat(window.getComputedStyle(ball).getPropertyValue('height'));
var boxHeight = parseFloat(window.getComputedStyle(box).getPropertyValue('height'));
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
  ball.style.marginTop = ballMargin + 'px';
  
}, 5);