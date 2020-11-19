QUnit.module("battle tests", {
  setup: function(){
    window.Test.enemy  = new Enemy("btl-tiny-fish");
    window.Test.battle = new Battle(window.Test.enemy);
  },

  teardown: function(){
    window.Test.battle.battlePopup.hide();
    delete window.Test.enemy;
    delete window.Test.battle;
  }
});

  QUnit.test("should start a new battle in currentBattle", function(assert){
    window.Test.battle.start();

    assert.deepEqual(window.currentBattle, window.Test.battle);
  });

  QUnit.test("current battle enemy should be an enemy", function(assert){
    window.Test.battle.start();

    assert.deepEqual(window.currentBattle.enemy, window.Test.enemy);
  });

  QUnit.test("should have battle controls", function(assert){
    window.Test.battle.start();

    assert.ok(window.currentBattle.battleControls);
  });

  QUnit.test("current battle popup should be there", function(assert){
    window.Test.battle.start();

    assert.ok(window.currentBattle.battlePopup);
  });

  QUnit.test("should fill the graphics with the user", function(assert){
    window.Test.battle.start();

    var playerGraphic = dom.find("#battle-sequence-popup .field .player #graphic").innerHTML;

    assert.equal(playerGraphic, " <span class=\"armor head\">o </span><span class=\"weapon\"></span>\n<span class=\"armor body\">/|\\</span><span class=\"weapon\"></span>\n<span class=\"armor legs\">/ \\</span>\n");
  });

  QUnit.test("should fill the graphics with the enemy", function(assert){
    window.Test.battle.start();

    var enemyGraphic = dom.find("#battle-sequence-popup .field .enemy #graphic").innerHTML;

    assert.equal(enemyGraphic, "{. }&lt;");
  });

  QUnit.test("should stop a battle", function(assert){
    window.Test.battle.start();
    window.Test.battle.stop();

    assert.equal(window.currentBattle, undefined, "shoud be undefined");
  });

  QUnit.test("should empty enemy graphic", function(assert){
    window.Test.battle.start();
    window.Test.battle.stop();

    var enemyGraphic = dom.find("#battle-sequence-popup .field .enemy #graphic").innerHTML;

    assert.equal(enemyGraphic, "");
  });

  QUnit.test("should empty player graphic", function(assert){
    window.Test.battle.start();
    window.Test.battle.stop();

    var playerGraphic = dom.find("#battle-sequence-popup .field .player #graphic").innerHTML;

    assert.equal(playerGraphic, "");
  });

QUnit.module("items in battle", {
  setup: function(){
    var enemy  = new Enemy("btl-tiny-fish");
    var potion = new InventoryItem("potion", "items");
    window.Test.battle = new Battle(enemy);
    window.currentGame.player.inventory.addItem("items", potion);
    window.Test.battle.start();
    window.Test.battle.stop();
  },

  teardown: function(){
    window.Test.battle.battlePopup.hide();
  }
});

  QUnit.test("should fill the items menu in the battle", function(assert){
    var itemList = dom.find(".items ul.list li", true);

    assert.equal(itemList.length, 1);
  });

QUnit.module("battle magic tests", {
  setup: function(){
    GameData.player.mp = [20, 20];
    GameData.player.inventory.magic = ["fire"];
    window.Test.enemy  = new Enemy("btl-tiny-fish");
    window.Test.battle = new Battle(window.Test.enemy);
    window.Test.battle.start();
  },

  teardown: function(){
    GameData.player.mp = [0, 0];
    GameData.player.inventory.magic = [];
    window.Test.battle.battlePopup.hide();
    delete window.Test.enemy;
    delete window.Test.battle;
  }
});

  QUnit.test("should fill the magic list", function(assert){
    var magicList = dom.find(".magic ul.list li", true);

    assert.equal(magicList.length, 1);
  });

  QUnit.test("should fill the magic list", function(assert){
    window.currentGame.player.magicAttack('fire');

    assert.equal(window.currentBattle.eventEngine.events.length, 1);
  });

  // QUnit.test("when casting the spell, the player mp should go down", function(assert){
  //   window.currentGame.player.magicAttack('fire');
  //   window.currentBattle.eventEngine.invoke();

  //   assert.equal(window.GameData.player.mp[0], 15);
  // });

  // TODO: how to test move timeouts
  // QUnit.test("enemy should loose health when attacked", function(assert){
  //   window.currentGame.player.magicAttack('fire');
  //   window.currentBattle.eventEngine.invoke();

  //   assert.equal(window.currentBattle.enemy.enemyInformation.health, 0);
  // });

QUnit.module();
