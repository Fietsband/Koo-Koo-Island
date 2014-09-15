GameMap.prototype = {
  showBridge: function(){
    var mapBridge = document.querySelector("#map-popup .map-bridge");
    mapBridge.innerHTML = "==";
  },

  enableSquirrelCity: function(){
    var squirrelCity = document.querySelector("#map-popup #squirrel-city.map-place");
    squirrelCity.classList.add("enabled");
    squirrelCity.onclick = function(){
      window.Game.levels.squirrelCity.addToGame();
    }
  }
}

function GameMap(){
}
