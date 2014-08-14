SeashellCallbacks = {
  performCallback: function(amount){
    switch(amount){
      case 20:
        SeashellCallbacks.showFish();
      break;
    }
  },

  showFish: function(){
    fish = new Character("fish");
    fish.add();
  }
};
