QUnit.module("battle event engine tests", {
  setup: function(){
    window.Test.enemy  = new Enemy("btl-tiny-fish");
    window.Test.battle = new Battle(window.Test.enemy);
    window.Test.battle.start();
  },

  teardown: function(){
    window.Test.battle.battlePopup.hide();
    delete window.Test.enemy;
    delete window.Test.battle;
  }
});

  QUnit.test("should intitialize with 0 events", function(assert){
    assert.equal(window.Test.battle.eventEngine.events.length, 0);
  });

  QUnit.test("should add 1 event if player attacks", function(assert){
    window.currentGame.player.attack();

    assert.equal(window.Test.battle.eventEngine.events.length, 1);
  });

  QUnit.test("should add 1 event if enemy attacks", function(assert){
    window.Test.enemy.attack();

    assert.equal(window.Test.battle.eventEngine.events.length, 1);
  });

  QUnit.test("should remove events from stack when performing", function(assert){
    window.Test.battle.eventEngine.clear();
    window.Test.enemy.attack();
    window.Test.battle.eventEngine.invoke();

    assert.equal(window.Test.battle.eventEngine.events.length, 0);
  });

  QUnit.test("should clear event when battle stops", function(assert){
    window.Test.enemy.attack();
    window.Test.battle.stop();

    assert.equal(window.Test.battle.eventEngine.events.length, 0);
  });

  QUnit.test("should  stop battle when end event is called", function(assert){
    window.Test.battle.eventEngine.add({type: "end"});
    window.Test.battle.eventEngine.invoke();

    assert.equal(window.currentBattle, undefined);
  });

  QUnit.test("should stop battle when player looses all it's health", function(assert){
    window.currentGame.player.looseHealth(1000);
    window.Test.battle.eventEngine.invoke();

    assert.equal(window.currentBattle, undefined, "game should be gone");
  });

  QUnit.test("should leave the player with 0 HP", function(assert){
    window.currentGame.player.looseHealth(1000);
    window.Test.battle.eventEngine.invoke();

    assert.equal(window.GameData.player.hp[0], 0);
  });

  QUnit.test("should stop battle when enemy looses all it's health", function(assert){
    window.currentBattle.enemy.looseHealth(1000);
    window.Test.battle.eventEngine.invoke();

    assert.equal(window.currentBattle, undefined);
  });

  QUnit.test("should perform custom methods", function(assert){
    var i = 0;
    window.Test.battle.eventEngine.add({perform: function(){i = 20;}})
    window.Test.battle.eventEngine.invoke();

    assert.equal(i, 20);
  });

QUnit.module();
