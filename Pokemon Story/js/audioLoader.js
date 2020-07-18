function AudioLoader() {
  this.numberOfLoadedAudios = 0;
  this.audios = [
      './audio/003cry.wav',
      './audio/021-Field04.mid',
      'audio/Battle capture success.ogg',
      'audio/Battle flee.ogg',
      'audio/Battle wild.mid',
      'audio/Cut.ogg',
      'audio/Item get.ogg',
      'audio/Rock Smash.ogg',
      'audio/Title.mid'
      
    ];


  this.loadAudios = function (start) {
    let audio = new Audio();
    for (var i = 0; i < this.audios.length; i++) {
      audio.src = this.audios[i];
      audio.addEventListener("canplay", () => {
        this.numberOfLoadedAudios++;
        if (this.numberOfLoadedAudios == this.audios.length) {
          start();
        }
      });
    }
  }
}