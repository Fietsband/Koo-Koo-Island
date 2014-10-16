ClickArea.prototype = {
  clickAreaMethod: function(){
    window[this.klass][this.clickMethod].apply(null, this.args);
  },

  enable: function(){
    var self = this;
    this.applyMethodToclickParts(function(i, clickPart){
      clickPart.classList.remove("disabled");
      clickPart.onclick = self.clickAreaMethod.bind(self);
    });
  },

  disable: function(){
    this.applyMethodToclickParts(function(i, clickPart){
      clickPart.classList.add("disabled");
      clickPart.onclick = null;
    });
    this.removeClickHandler();
  },

  applyMethodToclickParts: function(method){
    $.each(this.clickElement, method.bind(this));
  }
};

function ClickArea(identifier, klass, clickMethod, args){
  this.identifier   = identifier;
  this.klass        = klass;
  this.clickMethod  = clickMethod || function(){};
  this.args         = args;
  this.clickElement = dom.find(identifier, true);
  this.enable();
}
