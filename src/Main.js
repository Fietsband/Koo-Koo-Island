Game.prototype = {
  initialize: function(){
    if(GameStorage.canStore()){
      GameData.settings.autoSaveEnabled = true;

      this.gid        = GameStorage.get("koo-koo-island-gid") || $.guid();
      this.player     = new Player();
      this.gameMap    = new GameMap();
      this.setLevels();
      this.setCallbacks();
      this.storeGid();
      this.getOldGameData();
      this.toggleAutoSaveInterval();
    }
    else{
      // display message that only modern browsers can play this game
    }
  },

  setLevels: function(){
    this.levels = {};
    this.levels.island                     = new Level("island");
    this.levels.underwater_shack           = new Level("underwater_shack", "island");
    this.levels.squirrel_city              = new Level("squirrel_city");
    this.levels.squirrel_city_first_level  = new Level("squirrel_city_first_level_house", "squirrel_city");
    this.levels.squirrel_city_second_level = new Level("squirrel_city_second_level_house", "squirrel_city");
    this.levels.squirrel_city_attic_level  = new Level("squirrel_city_attic_level_house", "squirrel_city");
    this.levels.island.addToGame();
  },

  setCallbacks: function(){
    this.callbacks                      = {};
    this.callbacks.loadCallbacks        = LoadCallbacks;
    this.callbacks.experienceCallbacks  = ExperienceCallbacks;
    this.callbacks.statsCallbacks       = StatsCallbacks;

    if(ENV == "production"){
      delete LoadCallbacks, ExperienceCallbacks, StatsCallbacks;
    }
  },

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
    GameStorage.store(this.gid, this.getCurrentGame());
  },

  storeGid: function(){
    if(!GameStorage.keyExists("koo-koo-island-gid")){
      GameStorage.store("koo-koo-island-gid", this.gid);
      this.save();
    }
  },

  loadGame: function(gid, base64_string){
    GameStorage.store("koo-koo-island-gid", gid);
    GameStorage.store(gid, base64_string);
    window.GameData = JSON.parse(atob(GameStorage.get(gid)));
    this.toggleLoadCallbacks();
  },

  getOldGameData: function(){
    if(ENV == "production"){
      window.GameData = JSON.parse(atob(GameStorage.get(this.gid))) || {};
    }
    this.toggleLoadCallbacks();
  },

  getCurrentGame: function(){
    return btoa(JSON.stringify(window.GameData));
  },

  toggleLoadCallbacks: function(){
    var self = this;
    $.each(Object.keys(window.GameData.progress), function(i, progressItem){
      if(self.checkProgressOn(progressItem)){
        self.callbacks.loadCallbacks[progressItem]();
      }
    });

    $.each(["wood", "seashell", "wood"], function(i, statType){
      if(window.GameData.player[statType + "s"] > 0){
        self.callbacks.loadCallbacks.show_stat(statType);
      }
    });

    if(self.player.inventory.hasSomethingInInventory()){
      self.callbacks.loadCallbacks.setup_inventory();
    }

    self.callbacks.loadCallbacks.setup_player();
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

function Game(){}
