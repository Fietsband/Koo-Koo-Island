SquirrelCity = {
  openDoor: function(){
    var entertheHouseButton = document.querySelector("#squirrel-warning button#enter-the-house");
    var squirrelWarningPopup = new Popup("squirrel-warning");
    squirrelWarningPopup.show();
    entertheHouseButton.onclick = function(){
      window.Game.levels.squirrel_city_first_level.addToGame();
      squirrelWarningPopup.hide();
    }
  },

  goToFirstLevel: function(){
    window.Game.levels.squirrel_city_second_level.addToGame();
  },

  goToSecondLevel: function(){
    window.Game.levels.squirrel_city_attic_level.addToGame();
  },

  goToGroundLevel: function(){
    window.Game.levels.squirrel_city_first_level.addToGame();
  },

  goOutside: function(){
    window.Game.levels.squirrel_city.addToGame();
  },

  grabSpear: function(){
    var item = new Weapon();
    window.Game.player.inventory.addItem(item);
    window.Game.levels.squirrel_city_second_level.levelClickAreas[".squirrel-city-spear-wall"].disable();
  }
}
