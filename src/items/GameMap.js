var GameMap = (function(){
  GameMap.prototype = {
    showBridge: function(){
      this.findOnMap(".map-bridge").innerHTML = "==";
    },

    enableMapSpot: function(spot){
      var self = this;
      var mapSpot = this.findMapSpot(spot);
      mapSpot.innerHTML = "O";
      mapSpot.classList.add("enabled");
      mapSpot.onclick = function(){
        window.currentGame.levels[spot].addToGame();
        self.popUp.hide();
        window.currentGame.inventoryPopUp.hide();
      }
    },

    disableMapSpot: function(spot){
      var mapSpot = this.findMapSpot(spot);
      mapSpot.innerHTML = "X";
      mapSpot.classList.remove("enabled");
      mapSpot.onclick = null;
    },

    findMapSpot: function(spot){
      return this.currentMap.querySelector("#" + spot + ".map-place");
    },

    findOnMap: function(spot){
      return this.currentMap.querySelector(spot);
    }
  }

  function setCurrentMap(){
    return dom.find("#map-popup .inner .l" + GameData.player.map);
  }

  function enableCorrectMap(){
    disableOtherMaps.bind(this)();
    this.currentMap = setCurrentMap.bind(this)();
    this.currentMap.style.display = "block";
  }

  function disableOtherMaps(){
    var maps = dom.find("#map-popup .inner pre");
    $.each(maps, function(i, map){
      map.style.display = 'none';
    });
  }

  function GameMap(){
    this.currentMap = setCurrentMap.bind(this)();
    this.popUp      = new Popup("map-popup", enableCorrectMap.bind(this));
  }

  return GameMap;
})();
