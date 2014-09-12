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
  this.message = document.getElementById(identifier);
  this.time = time || 2000;
}
