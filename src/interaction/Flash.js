Flash.prototype = {
  show: function(){
    var self = this;
    this.message.style.display = "block";
    var timeout = setTimeout(function(){
      self.message.style.display = "none";
      clearTimeout(timeout);
    }, 2000);
  }
};

function Flash(identifier){
  this.message = document.getElementById(identifier);
}
