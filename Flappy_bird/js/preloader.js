const totalSprites =[
    './assets/sprites/pipe-green.png',

    

    'assets/sprites/redbird-upflap.png',
    'assets/sprites/redbird-midflap.png',
    'assets/sprites/redbird-downflap.png',

    'assets/sprites/bluebird-upflap.png',
    'assets/sprites/bluebird-midflap.png',
    'assets/sprites/bluebird-downflap.png',

    'assets/sprites/yellowbird-upflap.png',
    'assets/sprites//yellowbird-midflap.png',
    'assets/sprites/yellowbird-downflap.png',

    'assets/sprites/background-day.png',
    'assets/sprites/background-night.png',

    'assets/sprites/pipe-green.png',
    'assets/sprites/pipe-red.png',

    'assets/sprites/base.png',
    'assets/sprites/gameover.png',
    'assets/sprites/message.png',


    'assets/sprites/bluebird.gif',
        'assets/sprites/redbird.gif',
        'assets/sprites/yellowbird.gif',
];

function Preloader(){
    
        this.total = totalSprites.length;
        this.loaded = 0;
    

    this.load=function(callback,that){
        totalSprites.forEach((sprite)=>{
            var img = new Image();
            img.src=sprite;
            img.onload = () =>{
                this.loaded++;
                if(this.loaded>= this.total){
                    callback(that);
                }
            }
        });
    }
};