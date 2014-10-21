window.UnderwaterShack = {
  initialize: function(){
    var whirpoolArea = dom.find("#island-whirlpool-2");
    whirpoolArea.onclick = function(){
      window.currentGame.levels.island.addToGame();
    }
  }
};
