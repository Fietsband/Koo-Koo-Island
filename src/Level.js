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
    var self = this;
    $.each(this.clickAreas, function(i, area){
      var clickMethod = $.methodize(area);
      var clickArea = new ClickArea(area, self.clickMethods[clickMethod]);
      if(clickArea.enabled()){
        clickArea.enable();
      }
    });
  },

  setMapSpot: function(){
    return dom.find("#map-popup #" + this.mapSpot);
  },

  setLevelModule: function(){
    if(window[this.moduleName()]){
      return window[this.moduleName()];
    }
    else{
      return {};
    }
  },

  moduleName: function(){
    return $.constantize(this.identifier);
  },

  setClickMethods: function(){
    if(window.LevelClickMethods[this.moduleName() + "Clicks"]){
      return window.LevelClickMethods[this.moduleName() + "Clicks"];
    }
    else{
      return {};
    }
  },

  setClickAreas: function(){
    if(window.ClickAreas[this.identifier]){
      return window.ClickAreas[this.identifier];
    }
    else{
      return [];
    }
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

function Level(identifier, mapSpot){
  this.identifier  = identifier;
  this.mapSpot     = mapSpot || identifier;
  this.levelDom    = dom.find("#game-levels #" + identifier);
  this.pointOnMap  = this.setMapSpot();
  this.levelModule = this.setLevelModule();
  this.clickAreas  = this.setClickAreas();
  this.clickMethods= this.setClickMethods();
}
