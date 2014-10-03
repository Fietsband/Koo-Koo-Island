Level.prototype = {
  addToGame: function(){
    this.unsetCurrentGame();
    this.setCurrentGame();
  },

  setCurrentGame: function(){
    this.showMap();
    this.setClickAreas();
    window.currentGame.gameMap.disableMapSpot(this.mapSpot);
    window.currentLevel = this;
  },

  unsetCurrentGame: function(){
    if(window.currentLevel){
      window.currentLevel.hideMap();
      window.currentLevel.removeClickAreas();
      window.currentLevel.pointOnMap.innerHTML = "O";
      window.currentGame.gameMap.enableMapSpot(window.currentLevel.mapSpot);
      window.currentLevel = null;
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
    var mapIdentifier = this.mapSpot ? this.mapSpot : this.identifier;
    return document.querySelector("#map-popup #" + mapIdentifier);
  },

  levelClickAreas: {}
}

function Level(identifier, mapSpot){
  this.identifier = identifier;
  this.mapSpot = mapSpot || identifier;
  this.levelDom = document.querySelector("#game-levels #" + identifier);
  this.pointOnMap = this.setMapSpot();
}
