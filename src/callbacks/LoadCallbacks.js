LoadCallbacks = {
  show_fish: function(){
    window.LonelyIsland.showFish();
  },

  show_bottle: function(){
    window.LonelyIsland.showMessageInABottle();
  },

  show_shark: function(){
    window.LonelyIsland.addShark();
  },

  show_build_bridge_button: function(){
    window.LonelyIsland.showBuildBridgeButton();
  },

  show_stat: function(type){
    var stat_elem = document.getElementById(type + "s");
    var statCount = document.getElementById(type + "-count");
    stat_elem.style.display = "inline-block";
    statCount.innerHTML = GameData.player[type + "s"];
  },

  setup_inventory: function(){
    window.currentGame.player.inventory.checkInventory();
    for(var inventoryScope in window.GameData.player.inventory){
      $.each(window.GameData.player.inventory[inventoryScope], function(i, inventoryItem){
        if(window.currentGame.callbacks.loadCallbacks.inventory[inventoryItem.identifier + "_callback"]){
          window.currentGame.callbacks.loadCallbacks.inventory[inventoryItem.identifier + "_callback"]();
        }
        new InventoryItem(inventoryItem.itemTitle, inventoryItem.identifier, inventoryScope, window.currentGame.callbacks.loadCallbacks.inventory[inventoryItem.identifier + "_click_handler"]).add();
      });
    }
  },

  setup_player: function(){
    window.currentGame.player.loadCurrentArmor();
    window.currentGame.player.loadCurrentWeapon();
  },

  enable_build_bridge_button: function(){
    window.currentGame.gameMap.showBridge();
    window.currentGame.gameMap.enableMapSpot("squirrel_city");
  },

  inventory: {
    map_callback: function(){
      window.currentGame.messageInABottle.clearOnClickMethod();
      document.querySelector(".message-in-a-bottle .message").innerHTML = "&nbsp;";
    },

    map_click_handler: function(){
      window.currentGame.callbacks.statsCallbacks.seashell.showMapPopup;
    }
  }
}
