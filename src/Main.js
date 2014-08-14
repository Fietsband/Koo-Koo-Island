Game.prototype = {
  toggleAutoSaveInterval: function(){
    var self = this;
    if(GameData.settings.autoSaveEnabled){
      this.autoSaveInterval = setInterval(function(){
        self.save();
      }, this.autoSaveTimeInterval);
    }
    else{
      clearInterval(this.autoSaveInterval);
    }
  },

  save: function(){
    var saved = new Flash("saved");
    saved.show();
    GameStorage.store(this.gid, btoa(JSON.stringify(GameData)));
  },

  storeGid: function(){
    if(!GameStorage.keyExists("koo-koo-island-gid")){
      GameStorage.store("koo-koo-island-gid", this.gid);
    }
  },

  getOldGameData: function(){
    //GameData = JSON.parse(GameStorage.get(this.gid)) || {};
  },

  toggleAutoSave: function(){
    GameData.settings.autoSaveEnabled = !GameData.settings.autoSaveEnabled;
    this.toggleAutoSaveInterval();
  },

  autoSaveInterval: null,
  autoSaveTimeInterval: 5000
}

function Game(){
  if(GameStorage.canStore()){
    GameData.settings.autoSaveEnabled = true;

    this.gid = GameStorage.get("koo-koo-island-gid") || $.guid();
    this.storeGid();
    this.getOldGameData();
    this.toggleAutoSaveInterval();
  }
  else{
    // display message that only modern browsers can play this game
  }
}

$.domReady(function(){
  window.Game = new Game();
});
