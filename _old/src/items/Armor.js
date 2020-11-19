Armor.prototype = Object.create(Item.prototype);
Armor.prototype.add = function() {
    new InventoryItem(this.identifier, "armors", null).add();
}

function Armor(identifier, itemTitle) {
    this.identifier = identifier;
}