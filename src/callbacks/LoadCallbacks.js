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

  hide_seashell: function(){
    window.LonelyIsland.disableSeashell();
  },

  beaten_shark: function(){
    window.LonelyIsland.removeShark();
  },

  squirrel_house_spear: function(){
    window.SquirrelCity.disableSpear();
  },

  squirrel_house_small_painting: function(){

  },

  squirrel_house_closet: function(){

  },

  squirrel_house_boss_fight: function(){

  },

  squirrel_house_chimney: function(){

  },

  show_stat: function(type){
    var stat_elem = dom.findId(type + "s");
    var statCount = dom.findId(type + "-count");
    stat_elem.style.display = "inline-block";
    statCount.innerHTML = GameData.player[type + "s"];
  },

  setup_inventory: function(){
    window.currentGame.player.inventory.checkInventory();
    for(var inventoryScope in window.GameData.player.inventory){
      $.each(window.GameData.player.inventory[inventoryScope], function(i, inventoryItem){
        if(window.currentGame.callbacks.loadCallbacks.inventory[inventoryItem + "_callback"]){
          window.currentGame.callbacks.loadCallbacks.inventory[inventoryItem + "_callback"]();
        }

        new InventoryItem(inventoryItem, inventoryScope).add();
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
      dom.find(".message-in-a-bottle .message").innerHTML = "&nbsp;";
    }
  }
}
