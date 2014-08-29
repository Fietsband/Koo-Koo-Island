Inventory.prototype = {
  getInventory: function(){
    return GameData.player.inventory;
  },

  checkInventory: function(){
    if(GameData.player.inventory.length > 0){
      var inventoryButton = document.getElementById("open-inventory-button")
      inventoryButton.style.display = "block";
      // show inventory popup link
    }
  },

  addItem: function(item){
    GameData.player.inventory.push(item);
    this.checkInventory();
    this.getInventory();
  }
}

function Inventory(){
}
