QUnit.test("0.0 game initialization", function(assert){
  assert.ok(window.Game, "Passed!");
});

QUnit.test("0.1 game player initialization", function(assert){
  assert.ok(window.Game.player, "Passed!");
  assert.ok(window.Game.player.inventory, "Passed!");
});

QUnit.test("0.2 game levels initialization", function(assert){
  assert.ok(window.Game.levels, "Passed");
  assert.ok(window.Game.levels.island, "Passed");
  assert.ok(window.Game.levels.squirrel_city, "Passed");
  assert.ok(window.Game.levels.squirrel_city_first_level, "Passed");
  assert.ok(window.Game.levels.squirrel_city_second_level, "Passed");
  assert.ok(window.Game.levels.squirrel_city_attic_level, "Passed");
});

QUnit.test("0.3 stats should be initialized", function(assert){
  assert.ok(window.Stats, "Passed");
});
