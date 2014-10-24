ClickArea.prototype = {
  clickAreaMethod: function(){
    this.clickMethod.apply(null, this.args);
  },

  enabled: function(){
    var enabled = true;
    $.each(this.clickElement, function(i, clickElement){
      if(clickElement.classList.contains("disabled")){
        enabled = false;
        return false;
      }
    });
    return enabled;
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
