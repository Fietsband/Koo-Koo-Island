QUnit.module("initializing squirrel city second level house", {
  setup: function(){
    window.currentGame.levels.squirrel_city_second_level_house.addToGame();
  },

  teardown: function(){
    window.currentGame.levels.lonely_island.addToGame();
  }
});

  QUnit.test("should open the house closet popup", function(assert){
    window.SquirrelCitySecondLevelHouse.openCloset();

    assert.equal(dom.findId("squirrel-city-house-closet").style.display, "block");
    dom.findId("squirrel-city-house-closet").style.display = "none";
  });

  QUnit.test("should go into a fight with octopus bunny", function(assert){
    expect(0);
  });

QUnit.module();
