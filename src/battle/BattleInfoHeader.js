BattleInfoHeader.prototype = {
  update: function(text){
    var self = this;
    this.infoHeader.innerHTML = text;
    move(self.infoHeader).set('opacity', 1).duration(0).end(function(){
      self.messageTimeout = setTimeout(function(){
        move(self.infoHeader).duration(200).set('opacity', 0).end(function(){
          self.infoHeader.innerHTML = "";
        });
        clearTimeout(self.messageTimeout);
      }, 2000);
    });
  },

  reset: function(){
    clearTimeout(this.messageTimeout);
    move(this.infoHeader).set('opacity', 1).duration(0).end();
  }
}

function BattleInfoHeader(){
  this.infoHeader = dom.findId("battle-sequence-info-header");
}
