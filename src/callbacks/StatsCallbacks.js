StatsCallbacks = {
  seashell: {
    performCallback: function(amount){
      if(amount > 0 && !window.currentGame.checkProgressOn('show_fish')){
        window.currentGame.callbacks.statsCallbacks.seashell.showFish();
      }
      else if(amount > 19 && !window.currentGame.checkProgressOn('show_bottle')){
        window.currentGame.callbacks.statsCallbacks.seashell.showMessageInABottle();
      }
      else if(amount > 999 && !window.currentGame.checkProgressOn('show_shark')){
        window.currentGame.callbacks.statsCallbacks.seashell.addShark();
      }
    },

    addShark: function(){
      GameData.progress.show_shark = 1;
      $.each(document.querySelectorAll('span.big-shark-part'), function(i, sharkPart){
        sharkPart.style.display = "inline-block";
      });
    },

    showMapPopup: function(){
      window.currentGame.mapPopUp = new Popup("map-popup");
      window.currentGame.mapPopUp.show();
    },

    showMessageInABottle: function(){
      GameData.progress.show_bottle = 1;
      var map = new InventoryItem("A partial map of the world", "map", "items", window.currentGame.callbacks.statsCallbacks.seashell.showMapPopup);
      window.currentGame.messageInABottle = new Item("message-in-a-bottle", function(){
        var messageInABottlePopUp = new Popup("message-in-a-bottle-popup",
          undefined,
          function(){
            window.currentGame.messageInABottle.clearOnClickMethod();
            document.querySelector(".message-in-a-bottle .message").innerHTML = "&nbsp;";
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
          var fishBuyButton = document.getElementById("fish-seller-buy-button");
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
    }
  },

  oyster: {
    performCallback: function(amount){}
  },

  wood: {
    performCallback: function(amount){
      if(amount > 0 && !window.currentGame.checkProgressOn('show_build_bridge_button')){
        window.currentGame.callbacks.statsCallbacks.wood.showBuildBridgeButton();
      }
    },

    showBuildBridgeButton: function(){
      var islandBuildBrigeButton = document.querySelector('#island-bridge-popup #build-island-bridge');
      var islandBridgePopup = new Popup('island-bridge-popup',
        function(){
          if(GameData.player.woods >= 100 && !window.currentGame.checkProgressOn('enable_build_bridge_button') && window.currentGame.checkProgressOn('show_bottle')){
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
        }
      );

      var islandBridgeButton = document.getElementById("island-bridge");
      islandBridgeButton.classList.remove("disabled");
      islandBridgeButton.onclick = function(){
        islandBridgePopup.show();
      }
    }
  }
}
