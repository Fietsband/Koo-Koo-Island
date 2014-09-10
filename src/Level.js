Level.prototype = {
  setClickAreas: function(){
    var self = this;
    $.each(clickAreas[this.identifier], function(i){
      var area = clickAreas[self.identifier][i];
      new ClickArea(area.id, area.klass, area.method, area.args);
    });
  }
}

function Level(identifier){
  this.identifier = identifier;
  this.setClickAreas();
}

$.domReady(function(){
  lonelyIslandLevel = new Level("island");
});
