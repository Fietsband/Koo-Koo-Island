BattleInfoHeader.prototype = {
  update: function(text){
    this.infoHeader.innerHTML = text;
    this.showText();
  },

  showText: function(){
    clearTimeout(this.messageTimeout);
    move(this.infoHeader)
      .set('opacity', 1)
      .duration(0)
      .end(this.endMessageCallback.bind(this));
  },

  endMessageCallback: function(){
    var self = this;
    this.messageTimeout = setTimeout(function(){
      self.hide();
    }, 2000);
  },

  hide: function(){
    move(this.infoHeader)
        .duration(200)
        .set('opacity', 0)
        .end(self.clear);
    clearTimeout(this.messageTimeout);
  },

  clear: function(){
    this.infoHeader.innerHTML = "";
  },

  reset: function(){
    clearTimeout(this.messageTimeout);
    move(this.infoHeader)
      .set('opacity', 1)
      .duration(0)
      .end();
  }
}

function BattleInfoHeader(){
  this.infoHeader = dom.findId("battle-sequence-info-header");
}
