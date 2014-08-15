Character.prototype = {
  add: function(){
    this.character.style.display = "inline";
    this.toBeRemovedSpan.style.display = "none";
  }
};

function Character(identifier){
  this.character = document.getElementById(identifier);
  this.characterType = this.character.className;
  this.toBeRemovedSpan = document.getElementById(identifier + "-remove");
}
