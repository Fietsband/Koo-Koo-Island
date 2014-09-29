SquirrelCity = {
  openDoor: function(){
    var entertheHouseButton = document.querySelector("#squirrel-warning button#enter-the-house");
    var squirrelWarningPopup = new Popup("squirrel-warning");
    squirrelWarningPopup.show();
    entertheHouseButton.onclick = function(){
      window.Game.levels.squirrel_city_first_level.addToGame();
      squirrelWarningPopup.hide();
    }
  }
}
