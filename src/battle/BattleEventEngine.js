BattleEventEngine.prototype = {
  add: function(event){
    this.events.push(event);
  },

  clear: function(){
    this.events = [];
  },

  performEvents: function(){
    var self = this;
    $.each(this.events, function(i, event){
      self.eventTimeout = setTimeout(
        self.callEvent(i, event).bind(self),
        event.timeOut
      );
    });
  },

  invoke: function(){
    $.each(this.events, this.callEvent.bind(this));
  },

  callEvent: function(i, event){
    this.events.shift();
    clearTimeout(this.eventTimeout);
  }
};

function BattleEventEngine(){
  this.events = [];
  this.eventTimeout = null;
};
