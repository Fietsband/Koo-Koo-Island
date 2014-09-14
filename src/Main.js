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
    new Flash("saved").show();
    GameStorage.store(this.gid, btoa(JSON.stringify(GameData)));
  },

  storeGid: function(){
    if(!GameStorage.keyExists("koo-koo-island-gid")){
      GameStorage.store("koo-koo-island-gid", this.gid);
    }
  },

  loadGame: function(gid, base64_string){
    GameStorage.store(gid, base64_string);
    GameData = JSON.parse(atob(GameStorage.get(gid)));
  },

  getOldGameData: function(){
    //GameData = JSON.parse(atob(GameStorage.get(this.gid))) || {};
  },

  toggleAutoSave: function(){
    GameData.settings.autoSaveEnabled = !GameData.settings.autoSaveEnabled;
    this.toggleAutoSaveInterval();
  },

  checkProgressOn: function(part){
    return GameData.progress[part] == 1;
  },

  autoSaveInterval: null,
  autoSaveTimeInterval: 5000
}

function Game(){
  if(GameStorage.canStore()){
    GameData.settings.autoSaveEnabled = true;

    this.gid = GameStorage.get("koo-koo-island-gid") || $.guid();
    this.storeGid();
    this.player = new Player();
    this.getOldGameData();
    this.toggleAutoSaveInterval();
  }
  else{
    // display message that only modern browsers can play this game
  }
}

$.domReady(function(){
  window.Game = new Game();
  window.Game.lonelyIslandLevel = new Level("island");
  window.Game.lonelyIslandLevel.addToGame();
});
