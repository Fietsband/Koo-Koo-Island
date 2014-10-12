Armor.prototype = Object.create(Item.prototype);
Armor.prototype.add = function(){
  new InventoryItem(this.itemTitle, this.identifier, "armor", null).add();
}

function Armor(identifier, itemTitle){
  this.identifier = identifier;
  this.itemTitle = itemTitle;
}
