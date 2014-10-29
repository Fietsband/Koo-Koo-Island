var Level = (function(){
  Level.prototype = {
    addToGame: function(){
      this.unsetCurrentGame();
      this.setCurrentGame();
    },

    setCurrentGame: function(){
      this.showMap();
      this.setClickMethodsToLevel();
      this.performInitialize();
      window.currentGame.gameMap.disableMapSpot(this.mapSpot);
      window.currentLevel = this;
    },

    unsetCurrentGame: function(){
      if(window.currentLevel){
        window.currentLevel.hideMap();
        window.currentLevel.removeClickAreas();
        window.currentLevel.destroy();
        window.currentGame.gameMap.enableMapSpot(window.currentLevel.mapSpot);
        window.currentLevel = null;
        delete window.currentLevel;
      }
    },

    showMap: function(){
      this.levelDom.style.display = "block";
    },

    hideMap: function(){
      this.levelDom.style.display = "none";
    },

    removeClickAreas: function(){
      this.clickArea = [];
    },

    setClickMethodsToLevel: function(){
      $.each(this.clickAreas, setClickMethodToArea.bind(this));
    },

    performInitialize: function(){
      if(this.levelModule && this.levelModule["initialize"]){
        this.levelModule["initialize"]();
      }
    },

    destroy: function(){
      if(this.levelModule && this.levelModule["destroy"]){
        this.levelModule["destroy"]();
      }
    }
  }

  function setClickMethodToArea(i, area){
    var clickMethod = $.methodize(area);
    new ClickArea(area, this.clickMethods[clickMethod]).toggle();
  }

  function setClickMethods(){
    if(window.LevelClickMethods[this.moduleName]){
      return window.LevelClickMethods[this.moduleName];
    }
    else{
      return {};
    }
  }

  function setClickAreas(){
    if(window.ClickAreas[this.identifier]){
      return window.ClickAreas[this.identifier];
    }
    else{
      return [];
    }
  }

  function setLevelModule(){
    if(window[this.moduleName]){
      return window[this.moduleName];
    }
    else{
      return {};
    }
  }

  function setMapSpot(){
    return window.currentGame.gameMap.findMapSpot(this.mapSpot);
  }

  function Level(identifier, mapSpot){
    this.identifier  = identifier;
    this.mapSpot     = mapSpot || identifier;
    this.levelDom    = dom.find("#game-levels #" + identifier);
    this.moduleName  = $.constantize(identifier);
    this.pointOnMap  = setMapSpot.bind(this)();
    this.levelModule = setLevelModule.bind(this)();
    this.clickAreas  = setClickAreas.bind(this)();
    this.clickMethods= setClickMethods.bind(this)();
  }
  return Level;
})();
