QUnit.test("rewarding the player when beating an enemy", function(assert){
  var enemy = new Enemy("tiny-fish");
  enemy.rewardPlayer();

  assert.equal(window.GameData.player.seashells, 2, "increase seashells");
  assert.equal(window.GameData.player.experience, 10, "increase experience with 10");
  assert.equal(window.GameData.player.hp[1], 30, "increase experience with 10");
});
