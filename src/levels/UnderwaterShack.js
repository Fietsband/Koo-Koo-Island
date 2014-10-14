window.UnderwaterShack = {
  initialize: function(){
    var whirpoolArea = document.querySelector("#island-whirlpool-2");
    whirpoolArea.onclick = function(){
      window.currentGame.levels.island.addToGame();
    }
  }
};
