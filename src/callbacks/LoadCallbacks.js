LoadCallbacks = {
  show_fish: function(){
    window.Game.callbacks.statsCallbacks.seashell.showFish();
  },

  show_bottle: function(){
    window.Game.callbacks.statsCallbacks.seashell.showMessageInABottle();
  },

  show_shark: function(){
    window.Game.callbacks.statsCallbacks.seashell.addShark();
  },

  show_build_bridge_button: function(){
    window.Game.callbacks.statsCallbacks.wood.showBuildBridgeButton();
  },

  show_stat: function(type){
    var stat_elem = document.getElementById(type + "s");
    var statCount = document.getElementById(type + "-count");
    stat_elem.style.display = "inline-block";
    statCount.innerHTML = GameData.player[type + "s"];
  },

  setup_inventory: function(){
    window.Game.player.inventory.checkInventory();
    $.each(window.GameData.player.inventory, function(i, inventoryItem){
      window.Game.callbacks.loadCallbacks.inventory[inventoryItem.identifier + "_callback"]();
      new InventoryItem(inventoryItem.itemTitle, inventoryItem.identifier, window.Game.callbacks.statsCallbacks.seashell.showMapPopup).add();
    });
  },

  enable_build_bridge_button: function(){
    window.Game.gameMap.showBridge();
    window.Game.gameMap.enableMapSpot("squirrel_city");
  },

  inventory: {
    map_callback: function(){
      window.Game.messageInABottle.clearOnClickMethod();
      document.querySelector(".message-in-a-bottle .message").innerHTML = "&nbsp;";
    }
  }
}
