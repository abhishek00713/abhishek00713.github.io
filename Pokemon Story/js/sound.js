function Sound() {
  that = this;

  var initBackground = function () {
    let sound = document.createElement("audio");
    sound.setAttribute("preload", "auto");
    sound.setAttribute("controls", "none");
    sound.style.display = "none";
    document.body.appendChild(sound);
    sound.src = './audio/021-Field04.mid';
    that.bg = sound;
    that.bg.load();
  }

//   var initSwing = function () {
//     let sound = document.createElement("audio");
//     sound.setAttribute("preload", "auto");
//     sound.setAttribute("controls", "none");
//     sound.style.display = "none";
//     document.body.appendChild(sound);
//     sound.src = 'audio/swing.wav';
//     that.swing = sound;
//     that.swing.load();
//   }


  
  initBackground();
  
  this.playBackground = function () {
    this.bg.play();
  }

//   this.playSwing = function () {
//     this.swing.play();

}
