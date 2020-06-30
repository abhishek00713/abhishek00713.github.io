function Bullet(Car_one) {
    this.element = document.createElement('div');

    this.bulletLeft = Car_one.left + 25;
    this.bulletTop = Car_one.top - 25;
    var bulletWidth = 60;
    var bulletHeight = 30;

    this.createBullet = function(parentElement) {
        this.parentElement = parentElement;
        this.element.style.width = bulletWidth + 'px';
        this.element.style.height = bulletHeight + 'px';
        this.element.style.background = 'url(img/bullet.png';
        this.element.style.backgroundRepeat = 'no-repeat';
        this.element.style.backgroundSize = 'cover';
        this.element.style.transform ='rotate(270deg)';
        this.element.style.position = 'absolute';
        this.element.style.left = this.bulletLeft + 'px';
        this.element.style.top = this.bulletTop + 'px';

        this.parentElement.appendChild(this.element);
    }

    this.move = function() {
        this.bulletTop -= 6;
        this.element.style.top = this.bulletTop + 'px';
    }

    this.removeBullet = function(parentElement) {
        parentElement.removeChild(this.element);
    }
}