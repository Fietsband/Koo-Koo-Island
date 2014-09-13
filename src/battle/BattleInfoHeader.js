BattleInfoHeader.prototype = {
  update: function(text){
    var self = this;
    this.infoHeader.innerHTML = text;
    this.messageTimeout = setTimeout(function(){
      move(self.infoHeader).duration(500).set('opacity', 0).end(function(){
        self.infoHeader.innerHTML = "";
        move(self.infoHeader).set('opacity', 1).duration(0).end();
      });
      clearTimeout(this.messageTimeout);
    }, 2000)
  },

  reset: function(){
    clearTimeout(this.messageTimeout);
    move(this.infoHeader).set('opacity', 1).duration(0).end();
  }
}

function BattleInfoHeader(){
  this.infoHeader = document.getElementById("battle-sequence-info-header");
}
