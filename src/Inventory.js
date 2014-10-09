Inventory.prototype = {
  getInventory: function(){
    return GameData.player.inventory;
  },

  hasSomethingInInventory: function(){
    var inventory = this.getInventory();
    return (inventory.items.length   > 0 ||
            inventory.weapons.length > 0 ||
            inventory.armor.length   > 0 ||
            inventory.magic.length   > 0 ||
            inventory.skills.length  > 0)
  },

  checkInventory: function(){
    if(GameData.player.inventory.items.length > 0){
      this.setupInventoryButton();
    }
  },

  setupInventoryButton: function(){
    var inventoryButton = document.getElementById("open-inventory-button")
    inventoryButton.style.display = "block";
    window.currentGame.inventoryPopUp = new Popup("inventory-popup");
    inventoryButton.onclick = function(){
      window.currentGame.inventoryPopUp.show();
    }
  },

  addItem: function(scope, item){
    GameData.player.inventory[scope].push(item);
    item.add();
    this.checkInventory();
  }
}

function Inventory(){
}
