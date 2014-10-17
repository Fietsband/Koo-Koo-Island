window.LonelyIsland = {
  addShark: function(){
    GameData.progress.show_shark = 1;
    $.each(document.querySelectorAll('span.big-shark-part'), function(i, sharkPart){
      sharkPart.style.display = "inline-block";
    });
  },

  removeShark: function(){
    $.each(document.querySelectorAll('span.big-shark-part'), function(i, sharkPart){
      sharkPart.style.display = "none";
    });
  },

  showMessageInABottle: function(){
    GameData.progress.show_bottle = 1;
    var map = new InventoryItem("map", "items", window.currentGame.callbacks.statsCallbacks.seashell.showMapPopup);
    window.currentGame.messageInABottle = new Item("message-in-a-bottle", function(){
      var messageInABottlePopUp = new Popup("message-in-a-bottle-popup",
        undefined,
        function(){
          window.currentGame.messageInABottle.clearOnClickMethod();
          dom.find(".message-in-a-bottle .message").innerHTML = "&nbsp;";
          window.currentGame.player.inventory.addItem("items", map);
        }
      );
      messageInABottlePopUp.show()
    });
    window.currentGame.messageInABottle.add();
  },

  showFish: function(){
    GameData.progress.show_fish = 1;
    var fish = new Character("fish", {
      initialize: function(){
        var self = this;
        var fishBuyButton = dom.findId("fish-seller-buy-button");
        this.itemsForSale = document.querySelectorAll(".sell-items li");
        this.initialfishSellerPopUp = new Popup("fish-seller-popup");
        this.fishBuyPopUp = new Popup("fish-seller-buy-popup",
          function(){
            self.checkFishInventory();
          },
          function(){
            self.initialfishSellerPopUp.hide();
          }
        );

        fishBuyButton.onclick = function(){
          self.fishBuyPopUp.show();
        }

        this.addBuyListeners();
      },

      click: function(){
        this.initialfishSellerPopUp.show();
      },

      checkFishInventory: function(){
        $.each(this.itemsForSale, function(i, item){
          var itemName = item.getAttribute("name");
          if(window.currentGame.player.canBuyItem(itemName)){
            item.classList.remove("disabled");
          }
          else{
            item.classList.add("disabled");
          }
        });
      },

      addBuyListeners: function(){
        var self = this;
        $.each(this.itemsForSale, function(i, item){
          item.onclick = function(){
            var itemName = item.getAttribute("name")
            window.currentGame.player.buy(itemName);
            self.checkFishInventory();
          }
        });
      }
    });
    fish.add();
  },

  showBuildBridgeButton: function(){
    var islandBridgePopup = new Popup('island-bridge-popup', window.LonelyIsland.enableBuildBridgeButton);
    var islandBridgeButton = dom.findId("island-bridge");
    islandBridgeButton.classList.remove("disabled");
    islandBridgeButton.onclick = function(){
      islandBridgePopup.show();
    }
  },

  enableBuildBridgeButton: function(){
    if(GameData.player.woods >= 100 && !window.currentGame.checkProgressOn('enable_build_bridge_button') && window.currentGame.checkProgressOn('show_bottle')){
      var islandBuildBrigeButton = dom.find('#island-bridge-popup #build-island-bridge');
      GameData.progress.enable_build_bridge_button = 1;
      islandBuildBrigeButton.removeAttribute("disabled");
      islandBuildBrigeButton.onclick = function(){
        window.currentStats.increaseStat('wood', -100);
        window.currentGame.gameMap.showBridge();
        window.currentGame.gameMap.enableMapSpot("squirrel_city");
        islandBuildBrigeButton.setAttribute("disabled", "disabled");
        islandBuildBrigeButton.onclick = null;
      }
    }
  },

  disableSeashell: function(){
    GameData.progress.hide_seashell = 1;
    window.currentGame.levels.island.setClickAreas();
    window.currentGame.levels.island.levelClickAreas["#island-seashell"].disable();
    dom.find("#game-levels #island #island-seashell").innerHTML = "&nbsp;";
    window.LonelyIsland.enableWhirlpool();
  },

  enableWhirlpool: function(){
    var whirlpool = dom.find("#game-levels #island #island-whirlpool");
    whirlpool.style.display = "inline";
    whirlpool.onclick = function(){
      window.currentGame.levels.underwater_shack.addToGame();
    };
  }
}
