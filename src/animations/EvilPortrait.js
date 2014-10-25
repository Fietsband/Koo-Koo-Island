window.Animations.EvilPortrait = {
  start: function(){
    var self = this;
    this.elements = dom.find("span.evil-painting", true);
    this.colours = ["#FF0000", "#FFFF00", "#FF00FF", "#00FF55", "#000000"];

    $.each(this.elements, self.animate.bind(self));
  },

  animate: function(row_count, painting_row){
    var self = this;
    $.each(this.colours, function(i, color){
      self.colorTimeout = setTimeout(
        self.animateRow.bind(self, painting_row, row_count, i, color),
        i * 2000
      );
    });
  },

  animateRow: function(painting_row, row_count, color_count, color){
    var self = this;

    function endOfAnimation(){
      return (color_count == (self.colours.length - 1) &&
              row_count == (self.elements.length - 1))
    }

    move(painting_row)
      .set("color", color)
      .duration(3000)
      .end(function(){
        if(endOfAnimation()){
          window.currentLevel.levelModule.initiateBossFight();
        }
      });

    if(endOfAnimation()){
      clearTimeout(self.colorTimeout);
    }
  }
}
