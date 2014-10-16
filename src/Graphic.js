Graphic.prototype = {
  addChild: function(domId){
    var gameLevel = dom.findId("game-level");
    var pre = document.createElement("PRE");
    pre.innerHTML = this.asciiString;
    gameLevel.appendChild(pre);
  }
}

function Graphic(asciiString){
  this.asciiString = asciiString.join("\n");
}
