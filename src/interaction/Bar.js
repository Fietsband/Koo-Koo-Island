Bar.prototype = {
 fillBar: function(){
    move(this.bar)
        .set('width', "100%")
        .ease('in')
        .duration(this.interval)
        .end();
  },

  resetBar: function(){
    move(this.bar)
        .duration(0)
        .set('width', "0px").end();

    this.fillBar();
  },
}

function Bar(bar, interval){
  this.bar = bar;
  this.interval = interval;
}
