Callbacks = {
  seashell: {
    performCallback: function(amount){
      switch(amount){
        case 1:
          Callbacks.seashell.showFish();
        break;

        case 20:
          Callbacks.seashell.showMessageInABottle()
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
            if(Game.player.canBuyItem(itemName)){
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
              Game.player.buy(itemName);
              self.checkFishInventory();
            }
          });
        }
      });
      fish.add();
    }
  },

  oyster: {

  },

  woods: {

  }
}
