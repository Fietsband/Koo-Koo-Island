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
    this.clickElement.style.left   = this.posX.toString() + "px";
    this.clickElement.style.top    = this.posY.toString() + "px";
  },

  setHeightAndWidth: function(){
    this.clickElement.style.width  = this.areaWidth.toString() + "px";
    this.clickElement.style.height = this.areaHeight.toString() + "px";
  }
};

function ClickArea(posX, posY, areaWidth, areaHeight, clickMethod){
  this.posX         = posX;
  this.posY         = posY;
  this.areaWidth    = areaWidth;
  this.areaHeight   = areaHeight;
  this.clickMethod  = clickMethod || function(){};
  this.clickElement = document.createElement("DIV");
}

var clickAreas = {
  island: [
    {
      x: 214,
      y: 207,
      width: 12,
      height: 12,
      method: function(){
        console.log("hoi");
      }
    }
  ]
}
