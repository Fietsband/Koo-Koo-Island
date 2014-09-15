Level.prototype = {
  addToGame: function(){
    this.unsetCurrentGame();
    this.setCurrentGame();
  },

  setCurrentGame: function(){
    this.showMap();
    this.setClickAreas();
    window.currentLevel = this;
  },

  unsetCurrentGame: function(){
    if(window.currentLevel){
      window.currentLevel.hideMap();
      window.currentLevel.removeClickAreas();
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
}
