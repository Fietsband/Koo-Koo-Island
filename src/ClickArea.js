ClickArea.prototype = {
  append: function(domId){
    this.clickElement.className = "click-area";
    this.setPosition();
    this.setHeightAndWidth();
    this.attachClickHandler();
    document.getElementById(domId).appendChild(this.clickElement);
  },

  attachClickHandler: function(){
    var self = this;
    this.clickElement.onclick = function(){
      self.clickMethod();
    }
  },

  setPosition: function(){
    this.clickElement.style.left   = this.posX().toString() + "px";
    this.clickElement.style.top    = this.posY().toString() + "px";
  },

  posX: function(){
    return this.attachTo.getBoundingClientRect().x;
  },

  posY: function(){
    return this.attachTo.getBoundingClientRect().y;
  },

  setHeightAndWidth: function(){
    this.clickElement.style.width  = this.areaWidth.toString() + "px";
    this.clickElement.style.height = this.areaHeight.toString() + "px";
  }
};

function ClickArea(identifier, areaWidth, areaHeight, clickMethod){
  this.identifier   = identifier;
  this.areaWidth    = areaWidth;
  this.areaHeight   = areaHeight;
  this.attachTo     = document.getElementById(identifier);
  this.clickMethod  = clickMethod || function(){};
  this.clickElement = document.createElement("DIV");
}
