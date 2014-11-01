var Game = (function(){
  Game.prototype = {
    initialize: function(){
      if($.isBrowserCompatible()){
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
        alert("Your browser is not compatible to play this game.");
      }
    },

    setLevels: function(){
      this.levels = {};
      var self = this;
      for(var level in window.Levels){
        this.levels[level] = new Level(level);
        $.each(window.Levels[level], function(i, sublevel){
          self.levels[sublevel] = new Level(sublevel, level);
        });
      };
      window.Levels = null;
      delete window.Levels;

      this.levels.lonely_island.addToGame();
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
      if(GameData.settings.autoSaveEnabled){
        this.autoSaveInterval = setInterval(
          this.save.bind(this),
          this.autoSaveTimeInterval
        );
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

    loadGame: function(base64_string){
      GameStorage.store(this.gid, base64_string);
      window.GameData = JSON.parse(atob(GameStorage.get(this.gid)));
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
      this.trackCurrentProgress();
      this.setupStats();
      this.setupCurrentInventory();
      this.callbacks.loadCallbacks.setupPlayer();
    },

    trackCurrentProgress: function(){
      var self = this;
      $.each(Object.keys(window.GameData.progress), function(i, progressItem){
        if(self.checkProgressOn(progressItem)){
          self.callbacks.loadCallbacks[progressItem]();
        }
      });
    },

    setupCurrentInventory: function(){
      if(this.player.inventory.hasSomethingInInventory()){
        this.callbacks.loadCallbacks.setupInventory();
      }
    },

    setupStats: function(){
      var self = this;
      $.each(["seashell", "oyster", "wood"], function(i, statType){
        if(window.GameData.player[statType + "s"] > 0){
          self.callbacks.loadCallbacks.show_stat(statType);
        }
      });
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

  function createLevel(){

  }

  function Game(){}

  return Game;
})();
