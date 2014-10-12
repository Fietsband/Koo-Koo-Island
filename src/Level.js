Level.prototype = {
  addToGame: function(){
    this.unsetCurrentGame();
    this.setCurrentGame();
  },

  setCurrentGame: function(){
    this.showMap();
    this.setClickAreas();
    this.performInitialize();
    window.currentGame.gameMap.disableMapSpot(this.mapSpot);
    window.currentLevel = this;
  },

  unsetCurrentGame: function(){
    if(window.currentLevel){
      window.currentLevel.hideMap();
      window.currentLevel.removeClickAreas();
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
    this.levelClickAreas = {};
  },

  setClickAreas: function(){
    var self = this;
    $.each(window.clickAreas[this.identifier], function(i, area){
      var levelClickArea = new ClickArea(area.id, area.klass, area.method, area.args);
      self.levelClickAreas[area.id] = levelClickArea;
    });
  },

  setMapSpot: function(){
    return document.querySelector("#map-popup #" + this.mapSpot);
  },

  setLevelModule: function(){
    if(window.Levels[this.identifier]){
      return window[window.Levels[this.identifier]];
    }
    else{
      return {};
    }
  },

  performInitialize: function(){
    if(this.levelModule && this.levelModule["initialize"]){
      this.levelModule["initialize"]();
    }
  },

  levelClickAreas: {}
}

function Level(identifier, mapSpot){
  this.identifier  = identifier;
  this.mapSpot     = mapSpot || identifier;
  this.levelDom    = document.querySelector("#game-levels #" + identifier);
  this.pointOnMap  = this.setMapSpot();
  this.levelModule = this.setLevelModule();
}
