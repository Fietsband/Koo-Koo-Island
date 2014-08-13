var GameData = {}

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
    if(!GameStorage.keyExists("koo-koo-island-gid")){
      GameStorage.store("koo-koo-island-gid", this.gid);
    }
  },

  getOldGameData: function(){
    GameData = JSON.parse(GameStorage.get(this.gid)) || {};
  },

  autoSaveTimeInterval: 5000
}

function Game(){
  if(GameStorage.canStore()){
    this.gid = GameStorage.get("koo-koo-island-gid") || $.guid();
    this.autoSaveEnabled = true;
    this.storeGid();
    this.getOldGameData();
    this.autoSave();
  }
  else{
    // display message that only modern browsers can play this game
  }
}

$.domReady(function(){
  window.Game = new Game();
});
