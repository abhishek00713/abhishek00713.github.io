var points = [
    { x: 10, y: 20 },
    { x: 40, y: 40 },
    { x: 60, y: 20 },
    { x: 80, y: 60 },
    { x: 120, y: 40 },
    { x: 150, y: 100 },
    { x: 200, y: 120 }
    
  ];

  var box = document.createElement('div');
  box.setAttribute('id','box');
  box.style.width = '500px';
  box.style.height = '500px';
  box.style.border = '2px solid black';
  box.style.position = 'relative';
  box.style.margin = '100px auto';
  document.body.appendChild(box);

  

  for(var i = 0;i<points.length; i++){
      var point = document.createElement('div');
      point.style.height ='10px';
      point.style.width='10px';
      point.style.borderRadius ='10px';
      point.style.backgroundColor='blue';
      point.style.position='absolute';
      point.style.left = (points[i]['x']) +'px';
      point.style.top =(points[i] ['y']) + 'px';
      document.getElementById('box').appendChild(point);
      
  }
  