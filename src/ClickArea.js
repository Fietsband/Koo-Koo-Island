ClickArea.prototype = {
  attachClickHandler: function(){
    var self = this;
    this.clickElement.onclick = this.clickMethod;
  }
};

function ClickArea(identifier, clickMethod){
  this.identifier   = identifier;
  this.clickMethod  = clickMethod || function(){};
  this.clickElement = document.getElementById(identifier);
  this.attachClickHandler();
}
