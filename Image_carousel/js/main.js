var container =  document.getElementById('carousel_container');
var slider =  document.getElementById('carousel_image_wrapper');
var images = document.getElementsByClassName('slider-images');
var next = document.createElement('div');
next.style.position= 'absolute';
next.style.cursor='pointer';
next.style.bottom= '50%';    
next.style.width='40px';
next.style.height='39px';
next.style.right='5%';
next.style.background= '#d4d4d4';
next.style.borderRadius= '50%';
next.style.padding= '10px';
next.style.opacity= '0.5';
var img = document.createElement("img");
img.src ='./img/right.png';
img.style.height='40px';
img.style.width='40px';

next.appendChild(img);
container.appendChild(next);


var previous = document.createElement('div');
previous.style.position= 'absolute';
previous.style.cursor='pointer';
previous.style.bottom= '50%';    
previous.style.width='40px';
previous.style.height='39px';
previous.style.right='25%';
previous.style.background= '#d4d4d4';
previous.style.borderRadius= '50%';
previous.style.padding= '10px';
previous.style.opacity= '0.5';
previous.style.right='0';
previous.style.left='5%';
var img = document.createElement("img");
img.src ='./img/left.png';
img.style.height='40px';
img.style.width='40px';

previous.appendChild(img);

container.appendChild(previous);



var dots_container = document.createElement('div');
dots_container.style.position='absolute';
dots_container.style.bottom = '153px';
dots_container.style.left = '45%';
document.body.appendChild(dots_container);



dot = [];
for(var i=0; i<images.length;i++){
    var dots = document.createElement('div');
    dots.style.width ='20px';
    dots.style.height ='20px';
    dots.style.border = '2px solid black';
    dots.style.borderRadius ='50%';
    dots.style.marginRight ='15px';
    dots.style.backgroundColor = 'transparent';
    dots.style.display = 'inline-block';
    dots.style.cursor ='pointer';
    dots.setAttribute('onclick', 'setSlideIndex(' + i + ')')
    dots_container.appendChild(dots);
    dot.push(dots);
    
}

function setSlideIndex(val){
            
        direction=-1;
        initialPos = val * width * direction;
        console.log(initialPos);
        
    clearInterval(mainInterval);
    clearInterval(nextInterval);
    clearInterval(previousInterval);
    PointInterval=setInterval(slide);
        
    
}



var width = 800;
var height = container.clientHeight;

var max_width= width * images.length ;
var traverse_length = images.length -2;
var image_width = width *(images.length-1);
// console.log(image_width);
slider.style.width = max_width + 'px';

slider.style.height = height;

var mainInterval;
var initialPos = 0;
var speed = 1;
var direction = -1;
var index = 0;
var way = 1;
var PointInterval;

var nextInterval;
var previousInterval;

start();

function start() {
    mainInterval = setInterval(slide);
}

function slide() {
    
    clearInterval(PointInterval);
    changeDotsColor();
    // console.log(initialPos);
    slider.style.left = initialPos + 'px';
    
    if (initialPos == 0) {
        
        direction = -1;
        way = 1;
    } else if (initialPos == ((images.length - 1) * width * direction)) {
        
        
        direction = 1;
        way = -1;
        
    }

    if ((initialPos == index * width * direction) || (initialPos == -(index * width * direction))) {
        
        
        // console.log(initialPos);    
    clearInterval(mainInterval);
        clearInterval(nextInterval);
        clearInterval(previousInterval);

        if (direction == -1) {
            index++;
        } else {
            index--;
        }

 
        
    }

    
    initialPos += speed * direction;
    // console.log(initialPos);
    
    
}



next.addEventListener('click', function () {
    way = 1;
        direction = -1;
     
    if (initialPos == -(image_width -1) ) {
        index-=traverse_length;   

    }
        
    
    clearInterval(mainInterval);
    clearInterval(nextInterval);
    nextInterval = setInterval(slide)

});



previous.addEventListener('click', function () {
    way =-1;
    direction=1;

    if (initialPos == -1 ) {
     
        index+=traverse_length;
    }
    
    

    clearInterval(mainInterval);
 
    clearInterval(previousInterval); 

    previousInterval = setInterval(slide)
});

    


function changeDotsColor() {
    for (var i = 0; i < dot.length; i++) {
        if ((initialPos == i * width * direction * way )) {
            dot[i].style.backgroundColor = "red";
        } else {
            dot[i].style.backgroundColor = 'transparent';
            }
            
    }
     
}