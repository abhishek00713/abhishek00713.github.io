//updated
function Wrapper(containerId, timer, imageContainerId, images) {
    // console.log(containerId);
    // console.log(timer);
    // console.log(imageContainerId);
    // console.log(images);
    
    
    var container = document.getElementById(containerId);
    var slider = document.getElementById(imageContainerId);
    var images = document.getElementsByClassName(images);
    
    var next = document.createElement('div');
    next.style.position = 'absolute';
    next.style.cursor = 'pointer';
    next.style.bottom = '50%';
    next.style.width = '40px';
    next.style.height = '39px';
    next.style.right = '5%';
    next.style.background = '#d4d4d4';
    next.style.borderRadius = '50%';
    next.style.padding = '10px';
    next.style.opacity = '0.5';
    var img = document.createElement("img");
    img.src = './img/right.png';
    img.style.height = '40px';
    img.style.width = '40px';

    next.appendChild(img);
    container.appendChild(next);


    var previous = document.createElement('div');
    previous.style.position = 'absolute';
    previous.style.cursor = 'pointer';
    previous.style.bottom = '50%';
    previous.style.width = '40px';
    previous.style.height = '39px';
    previous.style.right = '25%';
    previous.style.background = '#d4d4d4';
    previous.style.borderRadius = '50%';
    previous.style.padding = '10px';
    previous.style.opacity = '0.5';
    previous.style.right = '0';
    previous.style.left = '5%';
    var img = document.createElement("img");
    img.src = './img/left.png';
    img.style.height = '40px';
    img.style.width = '40px';

    previous.appendChild(img);

    container.appendChild(previous);



    var dots_container = document.createElement('div');
    dots_container.style.position = 'absolute';
    dots_container.style.bottom = '5px';
    dots_container.style.left = '45%';
    // document.body.appendChild(dots_container);
    container.appendChild(dots_container);


    var dot = [];
    for (var i = 0; i < images.length; i++) {
        var dots = document.createElement('div');
        dots.style.width = '20px';
        dots.style.height = '20px';
        dots.style.border = '2px solid black';
        dots.style.borderRadius = '50%';
        dots.style.marginRight = '15px';
        dots.style.backgroundColor = 'transparent';
        dots.style.display = 'inline-block';
        dots.style.cursor = 'pointer';
        dots.style.zIndex = i;
        dots_container.appendChild(dots);
        dot.push(dots);

    }


    // var form_container = document.createElement('div');
    // form_container.style.backgroundColor='pink';
    // form_container.style.marginTop='100px';
    // form_container.style.height='500px';
    // form_container.style.width='400px';
    // document.body.appendChild(form_container);
    


    var dot_index = 0;
    for (var j = 0; j < images.length; j++) {
        
        dot[j].addEventListener('click', function(){
            dot_index = this.style.zIndex;
            index = dot_index;
            // console.log(dot_index)
            setSlideIndex(dot_index);
        });

        // dot[j].onclick = (function () {
        //     console.log(j);
        //     setSlideIndex(j);
        // })();

    }



    
    

    
    var dot_slide = false;
    var point = false;
    var width = 800;
    var height = container.clientHeight;

    var max_width = width * images.length;
    var traverse_length = images.length - 2;
    var image_width = width * (images.length - 1);
    // console.log(image_width);
    slider.style.width = max_width + 'px';

    slider.style.height = height;
    var next_turn = 0;
    var previous_turn = 0;
    var mainInterval;
    var initialPos = 0;
    var speed = 10;
    var direction = -1;
    var index = 0;
    var way = 1;
    var PointInterval;
    var pause_turn=1;
    var pause;
    var pause_speed =2000;
    var timer = 10;
    var nextInterval;
    var previousInterval;

    start();

    function start() {
        // console.log('start');
        // clearInterval(mainInterval);
            next_turn=0;
        previous_turn=0;
        pause_turn=0;
        mainInterval = setInterval(slide, timer);

    }

    
    function setSlideIndex(val) {
        previous_turn=0;
        next_turn=0;
        pause_turn=0;
        direction = -1;
        initialPos = val * width * direction;
        // dot_index = val;
        clearInterval(mainInterval);
        clearInterval(nextInterval);
        clearInterval(previousInterval);
        clearInterval(PointInterval);
        
        dot_slide = true;
        
        PointInterval = setInterval(slide,timer);
        


    }

    function slide() {
        
        // console.log('slide suru');
        // clearTimeout(pause);
        
        clearInterval(PointInterval);
        if (dot_slide == false) {
            changeDotsColor();
        }
        else {
            dot_slide=false;
            changeDotIndexColor();
        }


        // console.log(initialPos);
        slider.style.left = initialPos + 'px';
        
        if (initialPos == 0) {
            // console.log('slide ko first loop');
            
            clearInterval(nextInterval);
            
            clearTimeout(pause);
            // console.log('slide first loop');
            direction = -1;
            way = 1;
            
        } else if (initialPos == ((images.length - 1) * width * direction)) {
            console.log('slide ko second loop');
            
            clearTimeout(pause);
            clearInterval(previousInterval);
            console.log(index);
            console.log(images.length);
            if(index <(-images.length)  || index >images.length )
            {   
                console.log('0 banaune');
                index=0;
                console.log(index);
                start();
            }
            // console.log(index);
            

            
            
            
            
            
            
            
            direction = 1;
            way = -1;

        }

        if ((initialPos == index * width * direction) || (initialPos == -(index * width * direction))) {
            
            // console.log('slide ko 3rd loop');
            // console.log(initialPos);    
            clearInterval(mainInterval);
            clearInterval(nextInterval);
            clearInterval(previousInterval);
            clearInterval(PointInterval);
            
            
            if(previous_turn ==0 && next_turn ==0 && pause_turn==0){
            
                // console.log('slide  ko 4th loop suru');
                pause_turn=1;
                pause_slide();
            }
            

        }


        initialPos += speed * direction;
        next_turn=0;
        previous_turn=0;
        
        
        // console.log(initialPos);


    }


    this.set_time = function(value){
        pause_speed = value;
    }

    function pause_slide(){
        // console.log('pause ma pugyo');
        // clearInterval(mainInterval);
        //     clearInterval(nextInterval);
        //     clearInterval(PointInterval);
        //     clearInterval(previousInterval);
        
        if(pause_turn ==1){
             
            clearTimeout(pause);
            
                
                
                if (initialPos == -(image_width)) {
                    
                    clearInterval(nextInterval);
            clearInterval(PointInterval);
            clearInterval(previousInterval);
                    // console.log('pause_first set');      
                    index -= traverse_length +1;
                    pause = setTimeout(start,pause_speed);
                }
                else {
                    clearInterval(nextInterval);
                clearInterval(PointInterval);
                clearInterval(previousInterval);
                    // console.log('pause sexond');
                    pause = setTimeout(start,pause_speed);
                    index++;
                    // if (direction == -1) {

                    //     pause = setTimeout(start,pause_speed);
                    //     index++;
                    // } else {
                    //     pause = setTimeout(start,pause_speed);
                    //     index--;
                    // }


                }
                
        
            }
            else{
                clearInterval(nextInterval);
            clearInterval(PointInterval);
            clearInterval(previousInterval);
                start();
                // console.log('no pause');
            }
            pause_turn=0;
            
            
    }



    next.addEventListener('click', function () {
        // way = 1;
        //     direction = -1;
        clearTimeout(pause);
        
        pause_turn=0;
        
        next_turn++;
        
        if (next_turn == 1) {
            if (initialPos == -(image_width - 10)) {
                // console.log("next clicked", initialPos);
                // index -= traverse_length + 1;
                // next_turn=0;

            }

            else {
                way = 1;
                direction = -1;
                // index++;
            }

        }

        
        clearInterval(mainInterval);
        clearInterval(nextInterval);
        
        nextInterval = setInterval(slide,timer)

    });



    previous.addEventListener('click', function () {
        //  way =-1;
        // direction=1;
        clearTimeout(pause);
        pause_turn=0;
        // console.log('previous suru');
        // console.log(previous_turn);
        previous_turn=0;
        previous_turn++;
        
        // console.log(previous_turn);
        if (previous_turn == 1) {
            if (initialPos == -10) {
                
        clearInterval(mainInterval);
        
        clearInterval(previousInterval);
                // console.log("previous clicked", initialPos);
                index += traverse_length ;
            }
            else {
                clearInterval(mainInterval);
        
        clearInterval(previousInterval);
                way = -1;
                direction = 1;
                index-=2;
            }



        }

        previousInterval = setInterval(slide,timer)
    });

    // submit_btn.addEventListener('click',function(){

    // });




    function changeDotsColor() {
        // console.log("dot suru");
        //esma i<= images.length garera milxa but error
        for (var i = 0; i < images.length; i++) {
            if ((initialPos == i * width * direction * way)) {
                dot[i].style.backgroundColor = "black";
                clearTimeout(pause);
            } else {
                dot[i].style.backgroundColor = 'transparent';
                clearTimeout(pause);
            }

        }

    }
    function changeDotIndexColor() {
        
        for (var i = 0; i < images.length; i++) {
            dot[i].style.backgroundColor = 'transparent';
        }
        // console.log(dot, dot_index)
        dot[dot_index].style.backgroundColor = "black";

        
    }

}

var wrapper = new Wrapper('carousel_container', 10, 'carousel_image_wrapper', 'slider-images');
wrapper.set_time(1000);
// wrapper.start();
var wrapper_1 = new Wrapper('carousel_container_1', 10, 'carousel_image_wrapper_1', 'slider-images_1');
wrapper_1.set_time(500);