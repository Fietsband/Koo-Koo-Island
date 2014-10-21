Flash.prototype = {
  show: function(){
    var self = this;
    this.message.style.display = "block";
    var timeout = setTimeout(function(){
      self.message.style.display = "none";
      clearTimeout(timeout);
    }, this.time);
  }
};

function Flash(identifier, time){
  this.message = dom.findId(identifier);
  this.time = time || 2000;
}
