window.SquirrelCityAtticLevelHouse = {
  initialize: function(){
    if(!window.currentGame.checkProgressOn("squirrel_house_boss_fight")){
      this.disableFleeing();
      window.Animations.EvilPortrait.start();
    }
  },

  disableFleeing: function(){
    dom.findId("open-inventory-button").setAttribute("disabled", "disabled");
    dom.findId("squirrel-city-goto-first-level-back").classList.add("disabled");
    dom.findId("add-magical-fire-spell").classList.add("disabled");
    window.currentGame.levels.squirrel_city_attic_level_house.setClickMethodsToLevel();
  },

  enableFleeing: function(){
    dom.findId("open-inventory-button").removeAttribute("disabled");
    dom.findId("squirrel-city-goto-first-level-back").classList.remove("disabled");
    dom.findId("add-magical-fire-spell").classList.remove("disabled");
    window.currentGame.levels.squirrel_city_attic_level_house.setClickMethodsToLevel();
  },

  initiateBossFight: function(){
    var self = this;
    window.BattleInitializer.start("evil-portrait", null, function(){
      self.enableFleeing();
      window.currentGame.levels.squirrel_city.addToGame();
    });
  },

  destroy: function(){
    this.enableFleeing();
  }
};
