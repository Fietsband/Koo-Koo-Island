SeashellCallbacks = {
  performCallback: function(amount){
    switch(amount){
      case 1:
        SeashellCallbacks.showFish();
      break;

      case 20:
        SeashellCallbacks.showMessageInABottle()
      break;
    }
  },

  showMessageInABottle: function(){
    var map = new InventoryItem("A partial map of the world", "map", function(){
      var mapPopUp = new Popup("map-popup")
      mapPopUp.show();
    });

    var messageInABottle = new Item("message-in-a-bottle", function(){
      var messageInABottlePopUp = new Popup("message-in-a-bottle-popup",
        undefined,
        function(){
          messageInABottle.clearOnClickMethod();
          document.querySelector(".message-in-a-bottle .message").innerHTML = "&nbsp;";
          window.Game.player.inventory.addItem(map);
        }
      );
      messageInABottlePopUp.show()
    });
    messageInABottle.add();
  },

  showFish: function(){
    var fish = new Character("fish", {
      initialize: function(){
        var self = this;
        var fishBuyButton = document.getElementById("fish-seller-buy-button");
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
      },

      addBuyListeners: function(){
        var itemsForSale = document.querySelectorAll(".sell-items li");
        $.each(itemsForSale, function(i, item){
          item.onclick = function(){
            Game.player.buy(item.className);
          }
        });
      },

      buy: function(item){
        console.log("buy stuff");
      }
    });
    fish.add();
  }
};
