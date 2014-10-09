Weapon.prototype = Object.create(Item.prototype);
Weapon.prototype.add = function(){}

function Weapon(identifier){
  this.identifier = identifier;
}
