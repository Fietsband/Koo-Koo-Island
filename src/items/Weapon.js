Weapon.prototype = Object.create(Item.prototype);
Weapon.prototype.add = function() {
    new InventoryItem(this.identifier, "weapons", null).add();
}

function Weapon(identifier) {
    this.identifier = identifier;
}