Level.prototype = {
  setClickAreas: function(){
    var self = this;
    $.each(clickAreas[this.identifier], function(i){
      var area = clickAreas[self.identifier][i];
      var clickArea = new ClickArea(area.x, area.y, area.width, area.height, area.method);
      clickArea.append(self.identifier);
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

