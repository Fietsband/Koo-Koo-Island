window.SquirrelCityAtticLevelHouse = {
  initialize: function(){
    this.disableFleeing();
    window.Animations.EvilPortrait.start();
  },

  disableFleeing: function(){
    //dom.findId("open-inventory-button").setAttribute("disabled", "disabled");
    dom.findId("squirrel-city-goto-first-level-back").classList.add("disabled");
    window.currentGame.levels.squirrel_city_attic_level.setClickMethodsToLevel();
  },

  enableFleeing: function(){
    dom.findId("open-inventory-button").removeAttribute("disabled");
    dom.findId("squirrel-city-goto-first-level-back").classList.remove("disabled");
    window.currentGame.levels.squirrel_city_attic_level.setClickMethodsToLevel();
  },

  destroy: function(){
    this.enableFleeing();
  }
};
