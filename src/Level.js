Level.prototype = {
  addToGame: function(){
    this.setClickAreas();
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
}
