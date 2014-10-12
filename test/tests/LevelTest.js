QUnit.test("setting current level", function(assert){
  var oldLevel = window.currentGame.levels.island;
  window.currentGame.levels.squirrel_city.addToGame();

  assert.deepEqual(window.currentLevel, window.currentGame.levels.squirrel_city, "Setting squirrel city as current level");
  assert.ok(oldLevel.pointOnMap.classList.contains("enabled"), "Should enable old spot");
  assert.ok(!window.currentLevel.pointOnMap.classList.contains("enabled"), "Should disable current spot");
});

QUnit.test("setting current sub level", function(assert){
  var oldLevel = window.currentGame.levels.island;
  window.currentGame.levels.squirrel_city_first_level.addToGame();

  assert.deepEqual(window.currentLevel, window.currentGame.levels.squirrel_city_first_level, "Setting squirrel city first level as current level");
  assert.ok(oldLevel.pointOnMap.classList.contains("enabled"), "Should enable old spot");
  assert.ok(!window.currentLevel.pointOnMap.classList.contains("enabled"), "Should disable squirell city spot");
  assert.ok(!window.currentGame.levels.squirrel_city.pointOnMap.classList.contains("enabled"), "Should disable squirrel city spot");
  assert.equal(window.currentGame.levels.squirrel_city.pointOnMap.innerHTML, "X", "Should set squirrel city spot as X");
  assert.equal(window.currentGame.levels.island.pointOnMap.innerHTML, "O", "Should set island as O");
});

QUnit.test("triggering intialize method", function(assert){
  window.currentGame.levels.underwater_shack.addToGame();
});
