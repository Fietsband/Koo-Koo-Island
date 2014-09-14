ClickArea.prototype = {
  attachClickHandler: function(){
    this.clickElement.onclick = this.clickAreaMethod.bind(this);
  },

  removeClickHandler: function(){
    this.clickElement.onclick = null;
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
    this.clickElement.classList.remove("disabled");
    this.attachClickHandler();
  },

  disable: function(){
    this.clickElement.classList.add("disabled");
    this.removeClickHandler();
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
