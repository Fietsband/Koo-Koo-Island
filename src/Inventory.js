Inventory.prototype = {
  getInventory: function(){
    return GameData.player.inventory;
  },

  checkInventory: function(){
    if(GameData.player.inventory.items.length > 0){
      this.setupInventoryButton();
    }
  },

  setupInventoryButton: function(){
    var inventoryButton = document.getElementById("open-inventory-button")
    inventoryButton.style.display = "block";
    window.Game.inventoryPopUp = new Popup("inventory-popup");
    inventoryButton.onclick = function(){
      window.Game.inventoryPopUp.show();
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
