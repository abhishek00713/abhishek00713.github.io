
function Keyboard (){
    this.LEFT = KEY.left;
    this.RIGHT = KEY.right;
    this.UP = KEY.up;
    this.DOWN = KEY.down;
    this.ENTER = KEY.enter;
    this.ESC = KEY.esc;
    this.p = KEY.p;
    this.r = KEY.r;
    this.Space =KEY.space;
    
    this.keys = {};
    
    this.listenForEvents = function (keys) {
        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));
    
        keys.forEach(function (key) {
            this.keys[key] = false;
            
        }.bind(this));
        
        
    }
    
    this.onKeyDown = function (event) {
        var keyCode = event.keyCode;
        
        if (keyCode in this.keys) {
            event.preventDefault();
            this.keys[keyCode] = true;
            
            
            
            
            Game.moveCharacter(keyCode);    
    
    
        }
        
    };
    
    this.onKeyUp = function (event) {
        var keyCode = event.keyCode;
        player.characterDirection =-1;
        if (keyCode in this.keys) {
            
            this.keys[keyCode] = false;
        }
    };
    
    this.isDown = function (keyCode) {
        if (!keyCode in this.keys) {
            throw new Error('Keycode ' + keyCode + ' is not being listened to');
        }
        
        
        return this.keys[keyCode];
    };


}
