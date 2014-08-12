Game.prototype = {
  autoSave: function(){
    var autoSaveInterval;
    var self = this;
    if(this.autoSaveEnabled){
      autoSaveInterval = setInterval(function(){
        self.save();
      }, this.autoSaveTimeInterval);
    }
  },

  save: function(){

  },

  autoSaveTimeInterval: 5000
}

function Game(){
  this.gid = $.guid()
  this.autoSaveEnabled = true;
  this.autoSave();
}

$.domReady(function(){
  window.Game = new Game();
});
