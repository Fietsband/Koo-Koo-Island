var Level = (function(){
  Level.prototype = {
    addToGame: function(){
      unsetCurrentGame.bind(this)();
      setCurrentGame.bind(this)();
    },

    setClickMethodsToLevel: function(){
      $.each(this.clickAreas, setClickMethodToArea.bind(this));
    }
  }

  function setCurrentGame(){
    GameData.player.last_visited = this.identifier;
    showMap.bind(this)();
    this.setClickMethodsToLevel();
    performInitialize.bind(this)();
    window.currentGame.gameMap.disableMapSpot(this.mapSpot);
    window.currentLevel = this;
  }

  function unsetCurrentGame(){
    if(window.currentLevel){
      hideMap.bind(window.currentLevel)();
      removeClickAreas.bind(window.currentLevel)();
      destroy.bind(window.currentLevel)();
      window.currentGame.gameMap.enableMapSpot(window.currentLevel.mapSpot);
      window.currentLevel = null;
      delete window.currentLevel;
    }
  }

  function removeClickAreas(){
    this.clickArea = [];
  }

  function performInitialize(){
    if(this.levelModule && this.levelModule["initialize"]){
      this.levelModule["initialize"]();
    }
  }

  function destroy(){
    if(this.levelModule && this.levelModule["destroy"]){
      this.levelModule["destroy"]();
    }
  }

  function showMap(){
    this.levelDom.style.display = "block";
  }

  function hideMap(){
    this.levelDom.style.display = "none";
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
