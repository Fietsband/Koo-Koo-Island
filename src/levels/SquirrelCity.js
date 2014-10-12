window.SquirrelCity = {
  openDoor: function(){
    var entertheHouseButton = document.querySelector("#squirrel-warning button#enter-the-house");
    var squirrelWarningPopup = new Popup("squirrel-warning");
    squirrelWarningPopup.show();
    entertheHouseButton.onclick = function(){
      window.currentGame.levels.squirrel_city_first_level.addToGame();
      squirrelWarningPopup.hide();
    }
  },

  goToFirstLevel: function(){
    window.currentGame.levels.squirrel_city_second_level.addToGame();
  },

  goToSecondLevel: function(){
    window.currentGame.levels.squirrel_city_attic_level.addToGame();
  },

  goToGroundLevel: function(){
    window.currentGame.levels.squirrel_city_first_level.addToGame();
  },

  goOutside: function(){
    window.currentGame.levels.squirrel_city.addToGame();
  },

  grabSpear: function(){
    var item = new Weapon("spear");
    window.currentGame.player.inventory.addItem("weapons", item);
    window.currentGame.levels.squirrel_city_second_level.levelClickAreas[".squirrel-city-spear-wall"].disable();
    $.each(document.querySelectorAll(".squirrel-city-spear-wall"), function(i, spearPart){
      spearPart.innerHTML = "&nbsp;";
    });
  }
}
