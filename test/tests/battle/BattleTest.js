QUnit.test("should start a new battle", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  battle.startBattle();

  assert.deepEqual(window.currentBattle, battle, "current battle should be battle");
  assert.deepEqual(window.currentBattle.enemy, enemy, "current battle enemy should be an enemy");
  assert.ok(window.currentBattle.battleEngine, "current battle engine should be there");
  assert.ok(window.currentBattle.infoHeader, "current battle info header should be there");
  assert.ok(window.currentBattle.battlePopup, "current battle popup should be there");

  battle.battlePopup.hide();
});
