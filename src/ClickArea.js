ClickArea.prototype = {
  attachClickHandler: function(){
    this.clickElement.onclick = this.clickAreaMethod.bind(this);
  },

  clickAreaMethod: function(){
    window[this.klass][this.clickMethod].apply(null, this.args)
  }
};

function ClickArea(identifier, klass, clickMethod, args){
  this.identifier   = identifier;
  this.klass        = klass;
  this.clickMethod  = clickMethod || function(){};
  this.args         = args;
  this.clickElement = document.getElementById(identifier);
  this.attachClickHandler();
}
