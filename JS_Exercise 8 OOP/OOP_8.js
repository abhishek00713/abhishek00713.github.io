// Point class
function Point(x, y) {
    // Properties
    this.x = x;
    this.y = y;
    
    this.color = 'blue';
    this.point = document.createElement("div");

    // Methods
    this.getX = function () {
      return this.x;
    };
  
    this.getY = function () {
      return this.y;
    };

  
    this.setColor = function(color){
        this.color = color;    }
  
    this.setX = function (x) {
      this.x = x;
    };
  
    this.setY = function (y) {
      this.y = y;
    };
  
    
  
  
    this.getDomNode = function() {
      return this.point;
    }
  
    this.applyStyles = function(domPoint) {
      domPoint.style.top = this.y + "px";
      domPoint.style.left = this.x + "px";
      domPoint.style.height = "40px";
      domPoint.style.width = "40px";
      domPoint.style.borderRadius = "50%";
      domPoint.style.position = "absolute";
      domPoint.style.backgroundColor = this.color;
    }
  
    this.applyStyles(this.point);
  }
  
  // Container class
  function Container(width, height, points) {
    // Properties
    this.height = height;
    this.width = width;
    this.points = points;
  
    // Methods
    this.getHeight = function () {
      return this.height;
    };
  
    this.getWidth = function () {
      return this.width;
    };
  
    this.setHeight = function () {
      this.height = height;
    };
  
    this.setWidth = function () {
      this.width = width;
    };
  
    addClickEvent = function(point){
      // Adding Event Listener
      point.getDomNode().addEventListener('click', function(){
        
        point.setColor('green');
        point.applyStyles(this);
      });
    };
  
    renderPoint = function (point, container) {
      // Attaching the point to the container
      container.appendChild(point.getDomNode());
    };
  
    this.render = function (x, y) {
      var box = document.createElement("div");
      box.style.height = this.height + "px";
      box.style.width = this.width + "px";
      box.style.border = "1px solid black";
      box.style.position = "absolute";
      box.style.top = (y || 0) + "px";
      box.style.left = (x || 0) + "px";
      box.style.overflow = "hidden";
      
  
      this.points.forEach(function (point) {
        addClickEvent(point);
        renderPoint(point, box);
      });
  
      document.body.appendChild(box);
    };
  }
  
  points = [];
  
  
  for (let i = 0; i < 20; i++) {
    x = Math.random() * 600;
    y = Math.random() * 600;
    
    point = new Point(x, y);
  
    points.push(point);
  }
  
  container = new Container(600, 600, points);
  container.render(50, 50);