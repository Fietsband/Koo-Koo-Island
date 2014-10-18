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
      self.events.shift();
      self.eventTimeout = setTimeout(function(){
        self.callEvent(i, event);
      }, (event.timeOut || 0));
    });
  },

  invoke: function(){
    $.each(this.events, this.callEvent.bind(this));
    this.clear();
  },

  callEvent: function(i, event){
    if(event.type)    window.Events[event.type].invoke();
    if(event.perform) event.perform();
    clearTimeout(this.eventTimeout);
  }
};

function BattleEventEngine(){
  this.events = [];
  this.eventTimeout = null;
};
