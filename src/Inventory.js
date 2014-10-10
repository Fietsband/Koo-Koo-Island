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
    var inventoryButton = document.getElementById("open-inventory-button");
    inventoryButton.style.display = "block";
    window.currentGame.inventoryPopUp = new Popup("inventory-popup");
    this.applyInventoryClickHandlers();
    this.applyInventorySelectBoxListeners();
    inventoryButton.onclick = function(){
      window.currentGame.inventoryPopUp.show();
    }
  },

  applyInventoryClickHandlers: function(){
    document.querySelector("#inventory-menu #inventory-weapons-menu-item").onclick = this.showInventoryMenuItem.bind(this, "weapons");
    document.querySelector("#inventory-menu #inventory-armor-menu-item").onclick = this.showInventoryMenuItem.bind(this, "armor");
    document.querySelector("#inventory-menu #inventory-magic-menu-item").onclick = this.showInventoryMenuItem.bind(this, "magic");
    document.querySelector("#inventory-menu #inventory-items-menu-item").onclick = this.showInventoryMenuItem.bind(this, "items");
  },

  applyInventorySelectBoxListeners: function(){
    document.querySelector("#inventory-stash #select-weapons select").onchange = function(){
      this.selected = true;
      window.currentGame.player.setCurrentWeapon(new Weapon(this.value));
    }

    document.querySelector("#inventory-stash #select-armor select").onchange = function(){
      this.selected = true;
      window.currentGame.player.setCurrentArmor(new Armor(this.value));
    }
  },

  showInventoryMenuItem: function(scope){
    $.each(document.querySelectorAll("#inventory-stash .stash"), function(i, menu){
      menu.style.display = "none";
    });

    document.querySelector("#inventory-stash ." + scope).style.display = "block";
  },

  addItem: function(scope, item){
    GameData.player.inventory[scope].push(item);
    item.add();
    this.checkInventory();
  }
}

function Inventory(){
}
