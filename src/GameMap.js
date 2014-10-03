GameMap.prototype = {
  showBridge: function(){
    var mapBridge = document.querySelector("#map-popup .map-bridge");
    mapBridge.innerHTML = "==";
  },

  enableMapSpot: function(spot){
    var mapSpot = document.querySelector("#map-popup #" + spot + ".map-place");
    mapSpot.classList.add("enabled");
    mapSpot.onclick = function(){
      mapSpot.innerHTML = "X";
      mapSpot.classList.remove("enabled");
      window.currentGame.levels[spot].addToGame();
      window.currentGame.mapPopUp.hide();
      window.currentGame.inventoryPopUp.hide();
    }
  },

  disableMapSpot: function(spot){
    var mapSpot = document.querySelector("#map-popup #" + spot + ".map-place");
    mapSpot.classList.remove("enabled");
    mapSpot.onclick = null;
  }
}

function GameMap(){
}
