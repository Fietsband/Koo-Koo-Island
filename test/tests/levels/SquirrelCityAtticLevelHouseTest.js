QUnit.module("initializing the attic level", {
  setup: function(){
    window.currentGame.levels.squirrel_city_attic_level.addToGame();
  },

  teardown: function(){
    window.currentGame.levels.lonely_island.addToGame();
  }
});

  QUnit.test("should disable the stairs", function(assert){
    var stairs = dom.findId("squirrel-city-goto-first-level-back");

    assert.ok(stairs.classList.contains("disabled"));
  });

  QUnit.test("should disable the inventory button", function(assert){
    assert.ok(dom.findId("open-inventory-button").disabled);
  });

QUnit.module();
