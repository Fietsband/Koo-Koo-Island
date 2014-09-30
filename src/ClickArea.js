ClickArea.prototype = {
  attachClickHandler: function(){
    var self = this;
    this.applyMethodToclickParts(function(i, clickPart){
      clickPart.onclick = self.clickAreaMethod.bind(self);
    })
  },

  removeClickHandler: function(){
    this.applyMethodToclickParts(function(i, clickPart){
      clickPart.onclick = null;
    });
  },

  clickAreaMethod: function(){
    if(this.klass && this.clickMethod){
      window[this.klass][this.clickMethod].apply(null, this.args)
    }
    else{
      function empty(){};
    }
  },

  enable: function(){
    this.applyMethodToclickParts(function(i, clickPart){
      clickPart.classList.remove("disabled");
    });
    this.attachClickHandler();
  },

  disable: function(){
    this.applyMethodToclickParts(function(i, clickPart){
      clickPart.classList.add("disabled");
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
  this.clickElement = document.querySelectorAll(identifier);
  this.attachClickHandler();
}
