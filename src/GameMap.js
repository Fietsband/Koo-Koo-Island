GameMap.prototype = {
  showBridge: function(){
    var mapBridge = document.querySelector("#map-popup .map-bridge");
    mapBridge.innerHTML = "==";
  },

  enableMapSpot: function(spot){
    var mapSpot = document.querySelector("#map-popup #" + spot + ".map-place");
    mapSpot.innerHTML = "O";
    mapSpot.classList.add("enabled");
    mapSpot.onclick = function(){
      window.currentGame.levels[spot].addToGame();
      window.currentGame.mapPopUp.hide();
      window.currentGame.inventoryPopUp.hide();
    }
  },

  disableMapSpot: function(spot){
    var mapSpot = document.querySelector("#map-popup #" + spot + ".map-place");
    mapSpot.innerHTML = "X";
    mapSpot.classList.remove("enabled");
    mapSpot.onclick = null;
  }
}

function GameMap(){
}
