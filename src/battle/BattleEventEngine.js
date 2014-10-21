BattleEventEngine.prototype = {
  add: function(event){
    this.events.push(event);
    this.invokeWithTimeout();
  },

  clear: function(){
    this.infoHeader.reset();
    this.events = [];
  },

  invokeWithTimeout: function(){
    var event = this.events[0];
    if(event){
      var self = this;
      this.eventTimeout = setTimeout(function(){
        self.events.shift();
        self.callEvent(null, event);
        self.invokeWithTimeout();
      }, (event.timeOut || 0));
    }
    else{
      clearTimeout(this.eventTimeout);
    }
  },

  invoke: function(){
    $.each(this.events, this.callEvent.bind(this));
    this.clear();
  },

  callEvent: function(i, event){
    console.log(event);
    if(event.type)    window.Events[event.type].invoke();
    if(event.perform) event.perform();
    if(event.message) this.infoHeader.update(event.message);
    clearTimeout(this.eventTimeout);
  }
};

function BattleEventEngine(){
  this.events = [];
  this.infoHeader   = new BattleInfoHeader();
  this.eventTimeout = null;
};
