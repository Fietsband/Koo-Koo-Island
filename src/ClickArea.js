ClickArea.prototype = {
  attachClickHandler: function(){
    this.clickElement.onclick = window[this.klass][this.clickMethod];
  }
};

function ClickArea(identifier, klass, clickMethod){
  this.identifier   = identifier;
  this.klass        = klass;
  this.clickMethod  = clickMethod || function(){};
  this.clickElement = document.getElementById(identifier);
  this.attachClickHandler();
}
