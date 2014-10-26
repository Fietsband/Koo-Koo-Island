QUnit.module("reward player with items", {
  setup: function(){
    window.Test.enemy = new Enemy("big-shark");
    window.Test.battle = new Battle(window.Test.enemy);
    window.Test.battle.start();
    window.Test.enemy.looseHealth(9999);
    window.currentBattle.eventEngine.invoke();
  },

  teardown: function(){
    window.Test.battle.battlePopup.hide();
  }
});

  QUnit.test("should reward the player with a weapon", function(assert){
    assert.ok(GameData.player.inventory.weapons.indexOf("shark_laser") !== -1);
  });

  QUnit.test("weapon should be found in the inventory", function(assert){
    var option = dom.find("#inventory-stash #select-weapons select option[value='shark_laser']");

    assert.ok(option);
  });

QUnit.module();
