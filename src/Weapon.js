Weapon.prototype = Object.create(Item.prototype);
Weapon.prototype.add = function(){
  new InventoryItem(this.itemTitle, this.identifier, "weapons", null).add();
}

function Weapon(identifier, itemTitle){
  this.identifier = identifier;
  this.itemTitle = itemTitle;
}
