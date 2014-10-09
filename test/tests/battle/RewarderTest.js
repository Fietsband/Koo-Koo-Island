QUnit.test("should reward player", function(assert){
  GameData.player.seashells = 0;
  GameData.player.oysters = 0;

  var rewarder = new Rewarder("stats", {stats: { seashell: 20, oyster: 10 }});
  rewarder.reward();

  assert.equal(GameData.player.seashells, 20, "should be 20");
  assert.equal(GameData.player.oysters, 10, "should be 20");
});
