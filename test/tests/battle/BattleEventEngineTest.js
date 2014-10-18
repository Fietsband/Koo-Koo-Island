QUnit.test("should intitialize with 0 events", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);

  assert.equal(battle.eventEngine.events.length, 0, "should start with no events");
});

QUnit.test("should add 1 event if player attacks", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  battle.start();
  window.currentGame.player.attack();

  assert.equal(battle.eventEngine.events.length, 1, "should have 1 event");
});

QUnit.test("should add 1 event if enemy attacks", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  battle.start();
  enemy.attack();

  assert.equal(battle.eventEngine.events.length, 1);
});

QUnit.test("should remove events from stack when performing", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  battle.start();
  enemy.attack();
  battle.eventEngine.invoke();

  assert.equal(battle.eventEngine.events.length, 0, "should start with no events");
});

QUnit.test("should clear event when battle stops", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  battle.start();
  enemy.attack();
  battle.stop();

  assert.equal(battle.eventEngine.events.length, 0, "should start with no events");
});
