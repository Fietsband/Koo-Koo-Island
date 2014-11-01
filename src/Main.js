var Game = (function(){
  var autoSaveInterval = null;
  var autoSaveTimeInterval = 5000;

  Game.prototype = {
    initialize: function(){
      if($.isBrowserCompatible()){
        GameData.settings.autoSaveEnabled = true;

        this.gid        = GameStorage.get("koo-koo-island-gid") || $.guid();
        this.player     = new Player();
        this.gameMap    = new GameMap();

        setLevels.call(this);
        loadCurrentLevel.call(this);
        setCallbacks.call(this);
        storeGid.call(this);
        getOldGameData.call(this);
        toggleAutoSaveInterval.call(this);
      }
      else{
        alert("Your browser is not compatible to play this game.");
      }
    },

    save: function(){
      new Flash("saved").show();
      GameStorage.store(this.gid, this.getCurrentGame());
    },

    loadGame: function(base64_string){
      GameStorage.store(this.gid, base64_string);
      window.GameData = JSON.parse(atob(GameStorage.get(this.gid)));
      toggleLoadCallbacks.call(this);
    },

    getCurrentGame: function(){
      return btoa(JSON.stringify(window.GameData));
    },

    toggleAutoSave: function(){
      GameData.settings.autoSaveEnabled = !GameData.settings.autoSaveEnabled;
      toggleAutoSaveInterval.call(this);
    },

    checkProgressOn: function(part){
      return GameData.progress[part] == 1;
    }
  }

  function loadCurrentLevel(){
    this.levels[GameData.player.last_visited].addToGame();
  }

  function setLevels(){
    this.levels = {};
    var self = this;
    for(var level in window.Levels){
      this.levels[level] = new Level(level);
      $.each(window.Levels[level], function(i, sublevel){
        self.levels[sublevel] = new Level(sublevel, level);
      });
    };
  }

  function setCallbacks(){
    this.callbacks                      = {};
    this.callbacks.loadCallbacks        = LoadCallbacks;
    this.callbacks.experienceCallbacks  = ExperienceCallbacks;
    this.callbacks.statsCallbacks       = StatsCallbacks;

    if(ENV == "production"){
      delete LoadCallbacks, ExperienceCallbacks, StatsCallbacks;
    }
  }

  function storeGid(){
    if(!GameStorage.keyExists("koo-koo-island-gid")){
      GameStorage.store("koo-koo-island-gid", this.gid);
      this.save();
    }
  }

  function getOldGameData(){
    if(ENV == "production"){
      window.GameData = JSON.parse(atob(GameStorage.get(this.gid))) || {};
    }
    toggleLoadCallbacks.call(this);
  }

  function toggleAutoSaveInterval(){
    if(GameData.settings.autoSaveEnabled){
      autoSaveInterval = setInterval(
        this.save.bind(this),
        autoSaveTimeInterval
      );
    }
    else{
      clearInterval(autoSaveInterval);
    }
  }

  function toggleLoadCallbacks(){
    trackCurrentProgress.call(this);
    setupStats.call(this);
    setupCurrentInventory.call(this);
    this.callbacks.loadCallbacks.setupPlayer();
  }

  function trackCurrentProgress(){
    var self = this;
    $.each(Object.keys(window.GameData.progress), function(i, progressItem){
      if(self.checkProgressOn(progressItem)){
        self.callbacks.loadCallbacks[progressItem]();
      }
    });
  }

  function setupCurrentInventory(){
    if(this.player.inventory.hasSomethingInInventory()){
      this.callbacks.loadCallbacks.setupInventory();
    }
  }

  function setupStats(){
    var self = this;
    $.each(["seashell", "oyster", "wood"], function(i, statType){
      if(window.GameData.player[statType + "s"] > 0){
        self.callbacks.loadCallbacks.show_stat(statType);
      }
    });
  }

  function Game(){}

  return Game;
})();
