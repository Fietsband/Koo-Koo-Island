Level.prototype = {
  addToGame: function(){
    this.unsetCurrentGame();
    this.setCurrentGame();
  },

  setCurrentGame: function(){
    this.showMap();
    this.setClickAreas();
    window.Game.gameMap.disableMapSpot(this.identifier);
    window.currentLevel = this;
  },

  unsetCurrentGame: function(){
    if(window.currentLevel){
      window.currentLevel.hideMap();
      window.currentLevel.removeClickAreas();
      window.currentLevel.pointOnMap.innerHTML = "O";
      window.Game.gameMap.enableMapSpot(window.currentLevel.identifier);
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

  levelClickAreas: {}
}

function Level(identifier){
  this.identifier = identifier;
  this.levelDom = document.querySelector("#game-levels #" + identifier);
  this.pointOnMap = document.querySelector("#map-popup #" + identifier);
}
