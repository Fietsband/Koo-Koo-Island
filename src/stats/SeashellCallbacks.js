SeashellCallbacks = {
  performCallback: function(amount){
    switch(amount){
      case 20:
        SeashellCallbacks.showFish();
      break;

      case 1:
        SeashellCallbacks.showMessageInABottle()
      break;
    }
  },

  showMessageInABottle: function(){
    var messageInABottle = new Item("message-in-a-bottle", function(){
      var messageInABottlePopUp = new Popup("message-in-a-bottle-popup",
        undefined,
        function(){
          messageInABottle.clearOnClickMethod();
        }
      );

      messageInABottlePopUp.show()
    });
    messageInABottle.add();
  },

  showFish: function(){
    fish = new Character("fish");
    fish.add();
  }
};
