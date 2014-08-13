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
    GameStorage.store(this.gid, JSON.stringify(GameData));
  },

  storeGid: function(){
    GameStorage.store("koo-koo-island-gid", this.gid);
  },

  autoSaveTimeInterval: 5000
}

function Game(){
  if(GameStorage.canStore()){
    this.gid = GameStorage.get("koo-koo-island-gid") || $.guid();
    this.storeGid();
    this.autoSaveEnabled = true;
    this.autoSave();
  }
  else{
    // display message that only modern browsers can play this game
  }
}

GameData = {}

$.domReady(function(){
  window.Game = new Game();
});
