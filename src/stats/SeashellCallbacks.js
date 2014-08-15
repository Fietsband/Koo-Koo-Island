SeashellCallbacks = {
  performCallback: function(amount){
    switch(amount){
      case 20:
        SeashellCallbacks.showFish();
      break;

      case 100:
        SeashellCallbacks.showMessageInABottle()
      break;
    }
  },

  showMessageInABottle: function(){
    messageInABottle = new Item("message-in-a-bottle", function(){
      new Popup("message-in-a-bottle-popup").show();
    });
    messageInABottle.add();
  },

  showFish: function(){
    fish = new Character("fish");
    fish.add();
  }
};
