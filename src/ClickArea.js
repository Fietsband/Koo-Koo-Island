ClickArea.prototype = {
  clickAreaMethod: function(){
    this.clickMethod.apply(null, this.args);
  },

  toggle: function(){
    this.enabled() ? this.enable() : this.disable();
  },

  enabled: function(){
    return dom.find(this.identifier + ".disabled", true).length == 0;
  },

  enable: function(){
    var self = this;
    this.applyMethodToclickParts(function(i, clickPart){
      clickPart.onclick = self.clickAreaMethod.bind(self);
    });
  },

  disable: function(){
    this.applyMethodToclickParts(function(i, clickPart){
      clickPart.onclick = null;
    });
  },

  applyMethodToclickParts: function(method){
    $.each(this.clickElement, method.bind(this));
  }
};

function ClickArea(identifier, clickMethod, arguments){
  this.identifier   = identifier;
  this.clickMethod  = clickMethod || function(){};
  this.arguments    = arguments || [];
  this.clickElement = dom.find(identifier, true);
}
