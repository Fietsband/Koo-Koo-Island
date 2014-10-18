QUnit.test("should intitialize with 0 events", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  battle.eventEngine.clear();

  assert.equal(battle.eventEngine.events.length, 0, "should start with no events");
});

QUnit.test("should add 1 event if player attacks", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  battle.start();
  window.currentGame.player.attack();

  assert.equal(battle.eventEngine.events.length, 1, "should have 1 event");
  battle.stop();
});

QUnit.test("should add 1 event if enemy attacks", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  battle.start();
  enemy.attack();

  assert.equal(battle.eventEngine.events.length, 1);
  battle.stop();
});

QUnit.test("should remove events from stack when performing", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  battle.start();
  battle.eventEngine.clear();
  enemy.attack();
  battle.eventEngine.invoke();

  assert.equal(battle.eventEngine.events.length, 0, "should start with no events");
  battle.stop();
});

QUnit.test("should clear event when battle stops", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  battle.start();
  enemy.attack();
  battle.stop();

  assert.equal(battle.eventEngine.events.length, 0, "should start with no events");
});

QUnit.test("should  stop battle when end event is called", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  battle.start();
  battle.eventEngine.add({type: "end"});
  battle.eventEngine.invoke();

  assert.equal(window.currentBattle, undefined, "game should be gone");
  battle.stop();
});

QUnit.test("should stop battle when player looses all it's health", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  battle.start();
  window.currentGame.player.looseHealth(1000);
  battle.eventEngine.invoke();

  assert.equal(window.currentBattle, undefined, "game should be gone");
  battle.stop();
});

QUnit.test("should leave the player with 0 HP", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  battle.start();
  window.currentGame.player.looseHealth(1000);
  battle.eventEngine.invoke();

  assert.equal(window.GameData.player.hp[0], 0, "game should be gone");
  battle.stop();
});

QUnit.test("should stop battle when enemy looses all it's health", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  battle.start();
  window.currentBattle.enemy.looseHealth(1000);
  battle.eventEngine.invoke();

  assert.equal(window.currentBattle, undefined, "game should be gone");
  battle.stop();
});

QUnit.test("should perform custom methods", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  battle.start();
  var i = 0;
  battle.eventEngine.add({perform: function(){i = 20;}})
  battle.eventEngine.invoke();

  assert.equal(i, 20, "i should be 20");
  battle.stop();
});

