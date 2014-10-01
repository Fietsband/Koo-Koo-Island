QUnit.test("game initialization", function(assert){
  assert.ok(window.Game, "Passed!");
  assert.ok(window.Game.player, "Passed!");
  assert.ok(window.Game.player.inventory, "Passed!");
});
