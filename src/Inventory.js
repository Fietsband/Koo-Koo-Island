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
    this.applyInventorySelectBoxListeners();
    inventoryButton.onclick = function(){
      window.currentGame.inventoryPopUp.show();
    }
  },

  applyInventorySelectBoxListeners: function(){
    this.weaponSelectBox.onchange = this.setSelectedWeapon.bind(this);
    this.armorSelectBox.onchange =  this.setSelectedArmor.bind(this);
  },

  setSelectedWeapon: function(id){
    var identifier = (typeof(id) == "string") ? id : id.target.value;;
    $.setSelectBoxSelected(this.weaponSelectBox, identifier);
    window.currentGame.player.setCurrentWeapon(new Weapon(identifier));
  },

  setSelectedArmor: function(id){
    var identifier = (typeof(id) == "string") ? id : id.target.value;
    $.setSelectBoxSelected(this.armorSelectBox, identifier);
    window.currentGame.player.setCurrentArmor(new Armor(identifier));
  },

  updateGraphicalWeaponPreview: function(identifier){
    var weaponParts = document.querySelectorAll("#inventory-stash .weapons .weapon-preview span");
    $.each(window.Weapons[identifier].large_graphic, function(i, graphicPart){
      weaponParts[i].innerHTML = graphicPart;
    });
  },

  updateGraphicalArmorPreview: function(identifier){
    var armorParts = document.querySelectorAll("#inventory-stash .armor .armor-preview span");
    $.each(window.Armors[identifier].large_graphic, function(i, graphicPart){
      armorParts[i].innerHTML = graphicPart;
    });
  },

  addItem: function(scope, item){
    GameData.player.inventory[scope].push(item);
    item.add();
    this.checkInventory();
  },

  empty: function(){
    GameData.player.inventory.items   = [];
    GameData.player.inventory.weapons = [];
    GameData.player.inventory.armor   = [];
    GameData.player.inventory.magic   = [];
    GameData.player.inventory.skills  = [];
    this.weaponSelectBox.innerHTML    = "";
    this.armorSelectBox.innerHTML     = "";
  }
}

function Inventory(){
  this.weaponSelectBox = document.querySelector("#inventory-stash #select-weapons select");
  this.armorSelectBox = document.querySelector("#inventory-stash #select-armor select");
}
