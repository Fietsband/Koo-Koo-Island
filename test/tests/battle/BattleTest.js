QUnit.test("should start a new battle", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  battle.start();

  assert.deepEqual(window.currentBattle, battle, "current battle should be battle");
  battle.battlePopup.hide();
});

QUnit.test("should start a new battle", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  battle.start();

  assert.deepEqual(window.currentBattle.enemy, enemy, "current battle enemy should be an enemy");
  battle.battlePopup.hide();
});

QUnit.test("should have battle controls", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  battle.start();

  assert.ok(window.currentBattle.battleControls, "current battle engine should be there");
  battle.battlePopup.hide();
});

QUnit.test("should start a new battle", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  battle.start();

  assert.ok(window.currentBattle.battlePopup, "current battle popup should be there");
  battle.battlePopup.hide();
});

QUnit.test("should fill the graphics with the user", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  window.currentGame.player.removeArmorAndWeapons();
  battle.start();

  var playerGraphic = dom.find("#battle-sequence-popup .field .player #graphic").innerHTML;

  assert.equal(playerGraphic, " <span class=\"armor head\">o </span><span class=\"weapon\"></span>\n<span class=\"armor body\">/|\\</span><span class=\"weapon\"></span>\n<span class=\"armor legs\">/ \\</span>\n", "current graphic of player should be there");
  battle.battlePopup.hide();
});

QUnit.test("should fill the graphics with the enemy", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  battle.start();

  var enemyGraphic = dom.find("#battle-sequence-popup .field .enemy #graphic").innerHTML;

  assert.equal(enemyGraphic, "&gt;{ .}\n        ", "current enemy should spawn");
  battle.battlePopup.hide();
});

QUnit.test("should stop a battle", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  battle.start();
  battle.stop();

  assert.equal(window.currentBattle, undefined, "shoud be undefined");
});

QUnit.test("should empty enemy graphic", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  battle.start();
  battle.stop();

  var enemyGraphic = dom.find("#battle-sequence-popup .field .enemy #graphic").innerHTML;

  assert.equal(enemyGraphic, "", "shoud be undefined");
});

QUnit.test("should empty player graphic", function(assert){
  var enemy  = new Enemy("tiny-fish");
  var battle = new Battle(enemy);
  window.currentGame.player.removeArmorAndWeapons();
  battle.start();
  battle.stop();

  var playerGraphic = dom.find("#battle-sequence-popup .field .player #graphic").innerHTML;

  assert.equal(playerGraphic, "", "current graphic of player should be there");
  battle.battlePopup.hide();
});

QUnit.module("items in battle", {
  setup: function(){
    var enemy  = new Enemy("tiny-fish");
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
    var itemList = dom.find("ul.items.list li", true);

    assert.equal(itemList.length, 1);
  });

QUnit.module();
