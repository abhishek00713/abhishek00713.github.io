
function MainCar(parentElement) {
    this.element = null;
    this.width = 100;
    this.height = 100;
    this.parentElement = parentElement;
    this.left;
    this.top;
    var that = this;

    this.init = function() {
        var box = document.createElement('div');
        box.style.width = this.width + 'px';
        box.style.height = this.height + 'px';
        box.style.background = 'url(img/car.png)';
        box.style.backgroundSize='cover';
        box.style.backgroundRepeat = 'no-repeat';
        box.style.position = 'absolute';
        this.element = box;
        parentElement.appendChild(this.element);

        return this;

    }

    this.draw = function() {
        
        this.left = (that.parentElement.offsetWidth / 2) - (that.width / 2); //220
        this.top = 750;

        this.element.style.left = this.left + 'px';
        console.log('car ko class', this.left);
        this.element.style.top = this.top + 'px';
        
    }

    this.position = function(left) {
        this.left += left;
        
        // console.log('left>>', that.left);
        this.element.style.left = this.left + 'px';
    }

    this.destroy_mainCar = function(carContainer) {
        carContainer.removeChild(this.element);
    }
}



// enemy car


function EnemyCar(parentElement) {
    this.element = null;
    this.parentElement = parentElement;
    this.carTop = -100;
    this.carLeft;
    this.lane;
    var that = this;
    this.init = function() {
        this.element = document.createElement('div');
        this.element.style.width = '80px';
        this.element.style.height = '100px';
        
        
        this.element.style.backgroundRepeat = 'no-repeat';
        this.element.style.transform ='rotate(180deg)';
        this.element.style.position = 'absolute';
        this.carLeft = that.getRandomPosition();

        this.element.style.left = this.carLeft + 'px';

        this.parentElement.appendChild(this.element);

    }

    this.getRandomPosition = function() {
        this.lane = Math.floor(Math.random() * 3) + 1;
        console.log('enemy lane',this.lane);
        if (this.lane === 1) {
            this.element.style.background = 'url(img/car_3.png)';
            this.element.style.transform ='rotate(360deg)';
            this.element.style.backgroundSize='contain';
            this.element.style.backgroundRepeat = 'no-repeat';
            return 80; //enemy car at lane 1 with left = 80
        } else if (this.lane === 2) {
            this.element.style.background = 'url(img/enemy_car.png)';
            return 220;
        } else {
            this.element.style.background = 'url(img/car_2.png)';
            this.element.style.transform ='rotate(360deg)';
            this.element.style.backgroundSize='contain';
            this.element.style.backgroundRepeat = 'no-repeat';
            
            
            
            return 360;
        }
    }

    this.move = function() {
        this.carTop += enemyCarSpeed;
        this.element.style.top = this.carTop + 'px';
    }

    this.destroyCar = function() {
        this.parentElement.removeChild(that.element);
    }
}