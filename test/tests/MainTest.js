boot();

QUnit.test("0.0 game initialization", function(assert){
  assert.ok(window.Game, "Passed!");
});

QUnit.test("0.1 game player initialization", function(assert){
  window.Game.initialize();

  assert.ok(window.Game.player, "There should be player attached to the game");
  assert.ok(window.Game.player.inventory, "The player should have an inventory");
  assert.ok(window.Game.player.inventory.getInventory().items, "Passed!");
  assert.ok(window.Game.player.inventory.getInventory().weapons, "Passed!");
  assert.ok(window.Game.player.inventory.getInventory().magic, "Passed!");
});

QUnit.test("0.2 game levels initialization", function(assert){
  window.Game.setLevels();

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

// QUnit.test("1.1 loading from existing data", function(assert){

// })
