QUnit.module("setting current level", {
  setup: function(){
    resetGame();
    window.Test.oldLevel = window.currentGame.levels.lonely_island;
    window.currentGame.levels.squirrel_city.addToGame();
  },

  teardown: function(){
    window.currentGame.levels.lonely_island.addToGame();
    delete window.Test.oldLevel;
  }
});

  QUnit.test("Setting squirrel city as current level", function(assert){
    assert.deepEqual(window.currentLevel, window.currentGame.levels.squirrel_city);
  });

  QUnit.test("Should enable old spot", function(assert){
    assert.ok(window.Test.oldLevel.pointOnMap.classList.contains("enabled"));
  });

  QUnit.test("Should disable current spot", function(assert){
    assert.ok(!window.currentLevel.pointOnMap.classList.contains("enabled"));
  });

QUnit.module("setting current sub level", {
  setup: function(){
    window.Test.oldLevel = window.currentGame.levels.lonely_island;
    window.currentGame.levels.squirrel_city_first_level_house.addToGame();
  },

  teardown: function(){
    window.currentGame.levels.lonely_island.addToGame();
  }
});

  QUnit.test("Setting squirrel city first level as current level", function(assert){
    assert.deepEqual(window.currentLevel, window.currentGame.levels.squirrel_city_first_level_house);
  });

  QUnit.test("Should set squirrel city spot as X", function(assert){
    assert.equal(window.currentGame.levels.squirrel_city.pointOnMap.innerHTML, "X");
  });

  QUnit.test("Should set island as O", function(assert){
    assert.equal(window.currentGame.levels.lonely_island.pointOnMap.innerHTML, "O");
  });

QUnit.module("onclick methods", {
  setup: function(){
    GameData.player.seashells = 0;

    resetGame();
  }
});

  QUnit.test("triggering intialize method", function(assert){
    window.currentGame.levels.underwater_shack.addToGame();

    assert.ok(dom.find("#island-whirlpool-2").onclick !== null);
  });

  QUnit.test("setting onclick methods", function(assert){
    window.currentGame.levels.lonely_island.addToGame();

    assert.ok(window.currentLevel.clickAreas.length > 0);
  });

  QUnit.test("setting onclick methods #island-seashell", function(assert){
    window.currentGame.levels.lonely_island.addToGame();

    assert.ok(dom.findId("island-seashell").onclick !== null);
  });

QUnit.module();
