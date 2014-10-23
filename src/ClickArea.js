ClickArea.prototype = {
  clickAreaMethod: function(){
    if(typeof(this.clickMethod) == "string"){
      window[this.klass][this.clickMethod].apply(null, this.args);
    }
    else{
      this.clickMethod();
    }
  },

  enable: function(){
    if(!this.isDisabled()){
      var self = this;
      this.applyMethodToclickParts(function(i, clickPart){
        clickPart.classList.remove("disabled");
        clickPart.onclick = self.clickAreaMethod.bind(self);
      });
    }
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

function ClickArea(identifier, klass, clickMethod, args, isDisabled){
  this.identifier   = identifier;
  this.klass        = klass;
  this.clickMethod  = clickMethod || function(){};
  this.args         = args;
  this.isDisabled   = isDisabled || function(){ return false };
  this.clickElement = dom.find(identifier, true);
  this.enable();
}
