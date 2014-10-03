LoadCallbacks = {
  show_fish: function(){
    window.currentGame.callbacks.statsCallbacks.seashell.showFish();
  },

  show_bottle: function(){
    window.currentGame.callbacks.statsCallbacks.seashell.showMessageInABottle();
  },

  show_shark: function(){
    window.currentGame.callbacks.statsCallbacks.seashell.addShark();
  },

  show_build_bridge_button: function(){
    window.currentGame.callbacks.statsCallbacks.wood.showBuildBridgeButton();
  },

  show_stat: function(type){
    var stat_elem = document.getElementById(type + "s");
    var statCount = document.getElementById(type + "-count");
    stat_elem.style.display = "inline-block";
    statCount.innerHTML = GameData.player[type + "s"];
  },

  setup_inventory: function(){
    window.currentGame.player.inventory.checkInventory();
    console.log(GameData.items);
    for(var inventoryScope in window.GameData.player.inventory){
      $.each(window.GameData.player.inventory[inventoryScope], function(i, inventoryItem){
        window.currentGame.callbacks.loadCallbacks.inventory[inventoryItem.identifier + "_callback"]();
        new InventoryItem(inventoryItem.itemTitle, inventoryItem.identifier, window.currentGame.callbacks.statsCallbacks.seashell.showMapPopup).add();
      });
    }
  },

  enable_build_bridge_button: function(){
    window.currentGame.gameMap.showBridge();
    window.currentGame.gameMap.enableMapSpot("squirrel_city");
  },

  inventory: {
    map_callback: function(){
      window.currentGame.messageInABottle.clearOnClickMethod();
      document.querySelector(".message-in-a-bottle .message").innerHTML = "&nbsp;";
    }
  }
}
