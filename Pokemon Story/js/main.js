// 
//
// Asset loader
//

var Loader = {
    images: {}
};
var main_player;

// Loader.loadImage = function (key, src) {
//     var img = new Image();

//     var d = new Promise(function (resolve, reject) {
//         img.onload = function () {
//             this.images[key] = img;
//             resolve(img);
//         }.bind(this);

//         img.onerror = function () {
//             reject('Could not load image: ' + src);
//         };
//     }.bind(this));

//     img.src = src;
//     return d;
// };

// Loader.getImage = function (key) {
//     return (key in this.images) ? this.images[key] : null;
// };

//
// Keyboard handler
//

var Keyboard = {};

Keyboard.LEFT = 37;
Keyboard.RIGHT = 39;
Keyboard.UP = 38;
Keyboard.DOWN = 40;

Keyboard._keys = {};

Keyboard.listenForEvents = function (keys) {
    window.addEventListener('keydown', this._onKeyDown.bind(this));
    window.addEventListener('keyup', this._onKeyUp.bind(this));

    keys.forEach(function (key) {
        this._keys[key] = false;
        console.log(this._keys[key]);
    }.bind(this));
    
    
}

Keyboard._onKeyDown = function (event) {
    var keyCode = event.keyCode;
    
    if (keyCode in this._keys) {
        event.preventDefault();
        this._keys[keyCode] = true;
        
        
        // console.log('keys',this._keys);
        // console.log('code',keyCode);
        
        Game.moveCharacter(keyCode);    


    }
    
};

Keyboard._onKeyUp = function (event) {
    var keyCode = event.keyCode;
    
    if (keyCode in this._keys) {
        event.preventDefault();
        this._keys[keyCode] = false;
    }
};

Keyboard.isDown = function (keyCode) {
    if (!keyCode in this._keys) {
        throw new Error('Keycode ' + keyCode + ' is not being listened to');
    }
    
    
    return this._keys[keyCode];
};

//
// Game object
//

var Game = {};

Game.run = function () {
    console.log('bback');
    this.init();
    this._previousElapsed = 0;

    
    
    window.requestAnimationFrame(this.tick);
    
};

Game.tick = function (elapsed) {
    // clear previous frame
    context.clearRect(0, 0, 620, 620);
    window.requestAnimationFrame(this.tick);

    

    // compute delta time in seconds -- also cap it
    var delta = (elapsed - this._previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.25); // maximum delta of 250 ms
    this._previousElapsed = elapsed;

    this.update(delta);
    
    this.render();
}.bind(Game);



Game.moveCharacter = function(input){
    
player.movePlayer(input);    
    
    
        
    
}

// };

//
// start up function
//
var canvas;
var context;
canvas = document.getElementById('pokemon_container');
context = canvas.getContext('2d');
var player;

function onDone(){
    player = new Characters(canvas, context, imageManager.getImage("characters"));
    alert("Loading successful");
    console.log(imageManager.getImage("tiles"));
    Game.run(); 
}

var imageManager = new ImageManager();
imageManager.load({"tiles":"./tilesheet/tile_3.png", "characters":"./Sprites/main_boy_run.png"}, onDone);
