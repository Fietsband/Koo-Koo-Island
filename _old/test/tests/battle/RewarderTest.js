QUnit.module("reward player with a weapon", {
  setup: function(){
    window.Test.enemy = new Enemy("big-shark");
    window.Test.battle = new Battle(window.Test.enemy);
    window.Test.battle.start();
    window.Test.enemy.looseHealth(9999);
    window.currentBattle.eventEngine.invoke();
  },

  teardown: function(){
    window.Test.battle.battlePopup.hide();
    window.Test.resetStats();
  }
});

  QUnit.test("should reward the player with a weapon", function(assert){
    assert.ok(GameData.player.inventory.weapons.indexOf("shark_laser") !== -1);
  });

  QUnit.test("weapon should be found in the inventory", function(assert){
    var option = dom.find("#inventory-stash #select-weapons select option[value='shark_laser']");

    assert.ok(option);
  });

QUnit.module("reward player with a part of the map", {
  setup: function(){
    window.Test.enemy  = new Enemy("evil-portrait");
    window.Test.battle = new Battle(window.Test.enemy);
    window.Test.battle.start();
    window.Test.enemy.looseHealth(100);
    window.currentBattle.eventEngine.invoke();
  },

  teardown: function(){
    window.Test.battle.battlePopup.hide();
    window.currentGame.gameMap.popUp.hide();
    GameData.player.inventory.items = [];
    window.Test.resetStats();
  }
});

  QUnit.test("should reward the player with a part of the map", function(assert){
    window.currentGame.gameMap.popUp.show();
    var map = dom.find("#map-popup .inner pre.l2");

    assert.equal(map.style.display, "block");
  });

  QUnit.test("there should only be one map in the inventory", function(assert){
    var mapFirstLevel = new InventoryItem("map", "items");
    window.currentGame.player.inventory.addItem("items", mapFirstLevel);

    var maps = dom.find("#inventory-stash .items #map", true);

    assert.equal(maps.length, 1);
  });

QUnit.module();
