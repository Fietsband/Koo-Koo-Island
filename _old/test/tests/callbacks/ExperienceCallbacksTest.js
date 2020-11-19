QUnit.test("should not reward player twice with same experience reward", function(assert){
  GameData.player.experience_rewards.push("9");
  GameData.player.experience = 11;

  window.currentGame.callbacks.experienceCallbacks.increaseExperience(1);

  assert.equal(GameData.player.experience_rewards.length, 1, "should remain 1");
  assert.equal(GameData.player.experience_rewards[0], "9", "should remain 1");

  GameData.player.experience_rewards = [];
  GameData.player.experience = 0;
});
