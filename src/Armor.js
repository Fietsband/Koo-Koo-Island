Armor.prototype = Object.create(Item.prototype);
Armor.prototype.add = function(){}

function Armor(identifier){
  this.identifier = identifier;
}
