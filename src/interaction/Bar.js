Bar.prototype = {
  fillBar: function(){
    move(this.bar)
        .set('width', "100%")
        .ease('in')
        .duration(this.interval)
        .end(this.callback);
  },

  resetBar: function(callback){
    move(this.bar)
        .duration(0)
        .set('width', "0px")
        .end();

    this.setCallback(callback);
    this.fillBar();
  },

  setCallback: function(callback){
    this.callback = callback || (function(){});
  }
}

function Bar(bar, interval){
  this.bar = bar;
  this.interval = interval;
  this.fillBarCallback;
}
